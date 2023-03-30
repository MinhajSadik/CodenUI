import fs from "fs";
import handlebars from "handlebars";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import UserDto from "../dtos/user.dto.js";
import { extractImageData, imageResponse } from "../helpers/extractImageData.js";
import { generateUniqeName } from "../helpers/generateUniqeName.js";
import hashService from "../services/hash.service.js";
import mailService from "../services/mail.service.js";
import otpService from "../services/otp.service.js";
import spaceService from "../services/space.service.js";
import tokenService from "../services/token.service.js";
import userService from "../services/user.service.js";
import { sendResponse } from "../utils/response.util.js";
import statusCode from "../utils/statusCode.util.js";
const __filename = fileURLToPath(import.meta.url),
  __dirname = dirname(__filename),
  zipPath = path.resolve(__dirname, "../files/UH13YLPQhvdRqugO.zip"),
  docMailPath = path.join(__dirname, "../files/doc.mail.html"),
  otpMailPath = path.join(__dirname, "../files/otp.mail.html"),
  docFile = fs.readFileSync(docMailPath, "utf-8"),
  otpFile = fs.readFileSync(otpMailPath, "utf-8"),
  docTemplate = handlebars.compile(docFile),
  otpTemplate = handlebars.compile(otpFile),
  ttl = 1000 * 60,
  tokenExpiries = Date.now() + ttl

fs.promises;


class UserController {
  async registerUser(req, res) {
    try {
      const { name, email } = req.body;
      const existedUser = await userService.findUser(email);

      if (existedUser) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: `User ${email} already exist!`,
        });
      } else {

        const newUser = await userService.createUser(req.body);

        const { accessToken, refreshToken } = await tokenService.generateTokens({
          _id: newUser._id,
          email: newUser.email,
          role: newUser.role,
        });

        const user = new UserDto(newUser);

        await tokenService.storeRefreshToken(user.id, refreshToken, tokenExpiries)

        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
          maxAge: 1000 * 60 * 60 * 24 * 3,
        });

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
          maxAge: 1000 * 60 * 60 * 24 * 3,
        });

        return sendResponse(res, statusCode.CREATED, {
          message: `${name} Your account created successfully`,
          user,
        });
      }
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message,
      });
    }
  }

  async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userService.findUser(email);

      if (!user) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: `User not found! create one with ${email} or check again`,
        });
      }

      const isPasswordMatched = await hashService.comparePassword(
        password,
        user.password
      );

      if (!isPasswordMatched) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: `Password is not matched!`,
        });
      }

      // const { refreshTokenFromCookies } = req.cookies;
      const { accessToken, refreshToken } = await tokenService.generateTokens({
        _id: user._id,
        email: user.email,
        role: user.role,
      });



      try {
        //check if token is in db
        const token = await tokenService.findRefreshToken(user._id);

        if (token) {
          await tokenService.updateRefreshToken(user._id, refreshToken)
        } else
          await tokenService.storeRefreshToken(user._id, refreshToken, tokenExpiries)
      } catch (error) {
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
          message: error.message
        })
      }


      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 1000 * 60 * 60 * 24 * 3,
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 1000 * 60 * 60 * 24 * 3,
      });

      return sendResponse(res, statusCode.OK, {
        message: `User ${user.name} loggedIn successfully`,
        user: new UserDto(user)
      });
    } catch (error) {
      next(error)
    }
  }

  async updateUser(req, res) {
    const { name, avatar } = req.body
    try {
      const { id } = req.params;
      const existedUser = await userService.findById(id);

      const avatarRes = await imageResponse(avatar)
      const imageType = avatarRes.getMIME().split("/")[1]

      const user = {
        ...req.body,
        avatar: `${process.env.SPACE_ENDPOINT}/${process.env.USER_BUCKET}/${generateUniqeName(name)}.${imageType}`
      }


      if (!existedUser) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: `User or Id does not exist!`,
        });
      }

      await spaceService.createBucket(process.env.USER_BUCKET)
      //deleting prev image from storage
      await spaceService.deleteFileFromBucket({
        Bucket: process.env.USER_BUCKET,
        Key: `${generateUniqeName(existedUser?.name)}.${imageType}`,
      })

      await spaceService.uploadFileToBucket({
        Bucket: process.env.USER_BUCKET,
        Key: `${generateUniqeName(name)}.${imageType}`,
        ACL: 'public-read',
        Body: extractImageData(avatar),
        ContentType: avatarRes.getMIME(),
      })

      const updatedUser = await userService.updateUser(id, user);

      const modifiedUser = new UserDto(updatedUser);
      return sendResponse(res, statusCode.OK, {
        message: `${updatedUser.name} updated successfully`,
        user: modifiedUser,
      });
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message,
      });
    }
  }

  async sendFileByEmail(req, res) {
    const { email } = req.body;

    const sendDataToHtml = {
      name: "MinhajSadik",
    };

    const docData = docTemplate(sendDataToHtml);
    const options = {
      email,
      subject: `Welcome ${process.env.APP_NAME} with you`,
      html: docData,
      attachments: [
        {
          name: zipPath,
          path: zipPath,
        },
      ],
    };

    try {
      const existedUser = await userService.findUser(email);

      if (existedUser) {
        const { email: userEmail } = existedUser;
        options.email = userEmail;
        await mailService.sentMail(options);
      } else {
        await mailService.saveMail(req.body);
        await mailService.sentMail(options);
      }

      return sendResponse(res, 200, {
        message: `We sent mail in your accout ${email}`,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }

  async refresh(req, res) {
    const { refreshToken: refreshTokenFromCookies } = req.cookies;
    let userData;


    if (refreshTokenFromCookies) {
      try {
        //check if token is valid
        userData = await tokenService.verifyRefreshToken(refreshTokenFromCookies)

      } catch (error) {
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
          message: error.message
        })
      }

      try {
        //check if token is in db
        const token = await tokenService.findRefreshToken(
          userData._id
        );

        if (!token) {
          return sendResponse(res, statusCode.UNAUTHORIZED, {
            message: "Invalid Token"
          })
        }
      } catch (error) {
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
          message: error.message
        })
      }


      //check if valid user
      const user = await userService.findById({ _id: userData._id })

      if (!user) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: "No user found!"
        })
      }

      const { accessToken, refreshToken } = await tokenService.generateTokens({
        _id: userData._id,
        email: userData.email,
        role: userData.role,
      })

      //update refresh token
      try {
        await tokenService.updateRefreshToken(userData._id, refreshToken)
      } catch (error) {
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
          message: error.message
        })
      }

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
      });

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
      });

      const transformed = new UserDto(user)

      return sendResponse(res, statusCode.OK, {
        user: transformed,
        loggedIn: true
      })
    }
    else {
      return sendResponse(res, statusCode.NOT_FOUND, {
        message: `Your session is over!`
      })
    }
  }

  async logout(req, res) {
    const { refreshToken } = req.cookies
    try {
      //deleted refresh token from db
      await tokenService.removeToken(refreshToken)

      res.clearCookie("refreshToken")
      res.clearCookie("accessToken")

      return sendResponse(res, statusCode.OK, {
        message: `You Loggedout Successfully!`
      })
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message
      })
    }
  }

  async forgotPassword(req, res) {
    const { email } = req.body
    try {
      const user = await userService.findUser(email)
      if (!user) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: `There are no user with email ${email}`
        })
      }

      const otp = await otpService.generateOtp()
      const hashData = await otpService.combinedOtpData(email, otp)

      const hashed = await hashService.hashOtp(hashData)
      const [, , , expires] = hashData.split(".")

      const sendDataToHtml = {
        otp
      };

      const otpData = otpTemplate(sendDataToHtml);

      const options = {
        email,
        subject: `${process.env.APP_NAME} Forgot Password OTP`,
        html: otpData,
      };

      await mailService.sentMail(options)

      return sendResponse(res, statusCode.OK, {
        email,
        forgotten: true,
        hashed: `${hashed}.${expires}`,
        message: `Email sent to ${email}`,
      })
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message
      })
    }
  }

  async verifyOtp(req, res) {
    const { otp, hash, email } = req.body
    try {
      const [hashedOtp, expires] = hash.split(".")

      if (Date.now() > +expires) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: "OTP expired!"
        })
      }

      const data = `${email}.${otp}.${expires}`

      const isValid = await otpService.verifyOtp(hashedOtp, data)

      if (!isValid) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: "Invalid OTP"
        })
      }

      return sendResponse(res, statusCode.OK, {
        message: "otp verified successfully",
        verified: true
      })
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message
      })
    }
  }

  async resetPassword(req, res) {
    const { email, password, confirmPassword } = req.body
    try {
      const user = await userService.findUser(email)


      const isPrevPassUsed = await hashService.comparePassword(
        password,
        user.password
      );

      if (isPrevPassUsed) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: 'Your new password must be different to previoulsy used passwords',
        });
      }

      if (password !== confirmPassword) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: 'Password is not matched'
        })
      }



      const hashedPassword = await hashService.hashPassword(password)

      user.password = hashedPassword
      await user.save()

      return sendResponse(res, statusCode.OK, {
        newPassword: true,
        message: "Your password changed successfully",
      })
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message
      })
    }
  }

  async updatePassword(req, res) {
    const { email, currentPassword, newPassword, confirmPassword } = req.body
    try {
      const user = await userService.findUser(email)

      if (!user) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: `We could not find any user with ${email}`
        })
      }


      const isPrevPasswordMached = await hashService.comparePassword(currentPassword, user.password)

      if (!isPrevPasswordMached) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: "Your password is not matched with previous password"
        })
      }

      if (newPassword !== confirmPassword) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: "Your password is not matched"
        })
      }

      if (isPrevPasswordMached && newPassword === confirmPassword) {
        const hashPassword = await hashService.hashPassword(confirmPassword)
        user.password = hashPassword
        await user.save()
      }

      return sendResponse(res, statusCode.OK, {
        user,
        message: "Your password changed successfully"
      })
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message
      })
    }
  }

  async subscriber(req, res) {
    const { email } = req.body
    try {
      const existedUser = await userService.findUser(email)

      if (existedUser) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: "You are already subscribed"
        })
      }

      const user = await mailService.saveMail({ email })

      return sendResponse(res, statusCode.OK, {
        message: "You are a subscriber to our newsletter",
        user
      })
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message
      })
    }
  }

  async countUser(req, res) {
    try {
      const users = await userService.countUser()

      if (!users) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: "You have no user!"
        })
      }

      return sendResponse(res, statusCode.OK, {
        message: `Counted users are available ${users}`,
        users
      })
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message
      })
    }
  }
}

export default new UserController();
