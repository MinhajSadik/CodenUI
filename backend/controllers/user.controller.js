import fs from "fs";
import handlebars from "handlebars";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import UserDto from "../dtos/user.dto.js";
import hashService from "../services/hash.service.js";
import mailService from "../services/mail.service.js";
import otpService from "../services/otp.service.js";
import tokenService from "../services/token.service.js";
import userService from "../services/user.service.js";
import { sendResponse } from "../utils/response.util.js";
const __filename = fileURLToPath(import.meta.url),
  __dirname = dirname(__filename),
  zipPath = path.resolve(__dirname, "../files/UH13YLPQhvdRqugO.zip"),
  docMailPath = path.join(__dirname, "../files/doc.mail.html"),
  otpMailPath = path.join(__dirname, "../files/otp.mail.html"),
  docFile = fs.readFileSync(docMailPath, "utf-8"),
  otpFile = fs.readFileSync(otpMailPath, "utf-8"),
  docTemplate = handlebars.compile(docFile),
  otpTemplate = handlebars.compile(otpFile);

fs.promises;

let ttl = 1000 * 60,
  tokenExpiries = Date.now() + ttl


class UserController {
  async registerUser(req, res) {
    try {
      const { name, email } = req.body;
      const existedUser = await userService.findUser(email);

      if (existedUser) {
        return sendResponse(res, 400, {
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
          maxAge: 1000 * 60 * 60 * 24 * 3,
          httpOnly: true,
        });

        res.cookie("refreshToken", refreshToken, {
          maxAge: 1000 * 60 * 60 * 24 * 3,
          httpOnly: true,
        });

        return sendResponse(res, 201, {
          message: `${name} Your account created successfully`,
          user,
        });
      }
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }

  async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userService.findUser(email);

      if (!user) {
        return sendResponse(res, 404, {
          message: `User not found! create one with ${email} or check again`,
        });
      }

      const isPasswordMatched = await hashService.comparePassword(
        password,
        user.password
      );

      if (!isPasswordMatched) {
        return sendResponse(res, 400, {
          message: `Password is not matched!`,
        });
      }

      const { refreshToken: refreshTokenFromCookies } = req.cookies;
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
        return sendResponse(res, 500, {
          message: error.message
        })
      }


      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
      });

      return sendResponse(res, 200, {
        message: `User ${user.name} loggedIn successfully`,
        user: new UserDto(user)
      });
    } catch (error) {
      next(error)
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const existedUser = await userService.findById(id);
      if (!existedUser) {
        return sendResponse(res, 400, {
          message: `User or Id does not exist!`,
        });
      }

      const updatedUser = await userService.updateUser(id, req.body);

      const modifiedUser = new UserDto(updatedUser);
      return sendResponse(res, 200, {
        message: `${updatedUser.name} updated successfully`,
        user: modifiedUser,
      });
    } catch (error) {
      return sendResponse(res, 500, {
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
        return sendResponse(res, 500, {
          message: error.message
        })
      }

      try {
        //check if token is in db
        const token = await tokenService.findRefreshToken(
          userData._id,
          refreshTokenFromCookies
        );

        if (!token) {
          return sendResponse(res, 401, {
            message: "Invalid Token"
          })
        }
      } catch (error) {
        return sendResponse(res, 500, {
          message: error.message
        })
      }


      //check if valid user
      const user = await userService.findById({ _id: userData._id })

      if (!user) {
        return sendResponse(res, 404, {
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
        return sendResponse(res, 500, {
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

      return sendResponse(res, 200, {
        user: transformed,
        loggedIn: true
      })
    }
    else {
      return sendResponse(res, 404, {
        message: `Your session is over!`
      })
    }
  }

  async logout(req, res) {
    const { refreshToken } = req.cookies

    //deleted refresh token from db
    await tokenService.removeToken(refreshToken);

    res.clearCookie("refreshToken")
    res.clearCookie("accessToken")

    return sendResponse(res, 200, {
      message: `You Loggedout Successfully!`
    })
  }

  async forgotPassword(req, res) {
    const { email } = req.body
    try {
      const user = await userService.findUser(email)
      if (!user) {
        return sendResponse(res, 404, {
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

      return sendResponse(res, 200, {
        email,
        forgotten: true,
        hashed: `${hashed}.${expires}`,
        message: `Email sent to ${email}`,
      })
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message
      })
    }
  }

  async verifyOtp(req, res) {
    const { otp, hash, email } = req.body
    try {
      const [hashedOtp, expires] = hash.split(".")

      if (Date.now() > +expires) {
        return sendResponse(res, 400, {
          message: "OTP expired!"
        })
      }

      const data = `${email}.${otp}.${expires}`

      const isValid = await otpService.verifyOtp(hashedOtp, data)

      if (!isValid) {
        return sendResponse(res, 400, {
          message: "Invalid OTP"
        })
      }

      return sendResponse(res, 200, {
        message: "otp verified successfully",
        verified: true
      })
    } catch (error) {
      return sendResponse(res, 200, {
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
        return sendResponse(res, 400, {
          message: 'Your new password must be different to previoulsy used passwords',
        });
      }

      if (password !== confirmPassword) {
        return sendResponse(res, 400, {
          message: 'Password is not matched'
        })
      }



      const hashedPassword = await hashService.hashPassword(password)

      user.password = hashedPassword
      await user.save()

      return sendResponse(res, 200, {
        newPassword: true,
        message: "Your password changed successfully",
      })
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message
      })
    }
  }

  async updatePassword(req, res) {
    const { email, currentPassword, newPassword, confirmPassword } = req.body
    try {
      const user = await userService.findUser(email)

      if (!user) {
        return sendResponse(res, 404, {
          message: `We could not find any user with ${email}`
        })
      }


      const isPrevPasswordMached = await hashService.comparePassword(currentPassword, user.password)

      if (!isPrevPasswordMached) {
        return sendResponse(res, 400, {
          message: "Your password is not matched with previous password"
        })
      }

      if (newPassword !== confirmPassword) {
        return sendResponse(res, 400, {
          message: "Your password is not matched"
        })
      }

      if (isPrevPasswordMached && newPassword === confirmPassword) {
        const hashPassword = await hashService.hashPassword(confirmPassword)
        user.password = hashPassword
        await user.save()
      }

      return sendResponse(res, 200, {
        user,
        message: "Your password changed successfully"
      })
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message
      })
    }
  }

  async subscriber(req, res) {
    const { email } = req.body
    try {
      const existedUser = await userService.findUser(email)

      if (existedUser) {
        return sendResponse(res, 400, {
          message: "You are already subscribed"
        })
      }

      const user = await mailService.saveMail({ email })

      return sendResponse(res, 200, {
        message: "You are a subscriber to our newsletter",
        user
      })
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message
      })
    }
  }

  async countUser(req, res) {
    try {
      const users = await userService.countUser()

      if (!users) {
        return sendResponse(res, 404, {
          message: "You have no user!"
        })
      }

      return sendResponse(res, 200, {
        message: `Counted users are available ${users}`,
        users
      })
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message
      })
    }
  }
}

export default new UserController();
