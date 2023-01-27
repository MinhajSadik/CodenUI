import fs from "fs";
import handlebars from "handlebars";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import UserDto from "../dtos/user.dto.js";
import mailService from "../services/mail.service.js";
import tokenService from "../services/token.service.js";
import userService from "../services/user.service.js";
import { sendResponse } from "../utils/response.util.js";

fs.promises;

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

        await tokenService.storeRefreshToken(user.id, refreshToken)

        res.cookie("accessToken", accessToken, {
          maxAge: 1000 * 60 * 60 * 24 * 30,
          httpOnly: true,
        });

        res.cookie("refreshToken", refreshToken, {
          maxAge: 1000 * 60 * 60 * 24 * 30,
          httpOnly: true,
        });

        return sendResponse(res, 201, {
          message: `User ${name} created successfully`,
          user,
        });
      }
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.findUser(email);

      if (!user) {
        return sendResponse(res, 404, {
          message: `User not found! create one with ${email} or check again`,
        });
      }

      const isPasswordMatched = await userService.comparePassword(
        password,
        user.password
      );

      if (!isPasswordMatched) {
        return sendResponse(res, 400, {
          message: `Password is not matched!`,
        });
      }

      const { accessToken, refreshToken } = await tokenService.generateTokens({
        _id: user._id,
        email: user.email,
        role: user.role,
      });

      await tokenService.updateRefreshToken(user._id, refreshToken)

      const modifiedUser = new UserDto(user);

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
        secure: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
        secure: true,
      });

      return sendResponse(res, 200, {
        message: `User ${user.name} loggedIn successfully`,
        user: modifiedUser,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
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

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const zipPath = path.resolve(__dirname, "../files/UH13YLPQhvdRqugO.zip");

    const templatePath = path.join(__dirname, "../configs/index.html");
    const templateFile = fs.readFileSync(templatePath, "utf-8");
    const template = handlebars.compile(templateFile);

    const replacements = {
      username: "MinhajSadik",
    };
    const finalHtml = template(replacements);

    const options = {
      email,
      subject: `Welcome ${process.env.APP_NAME} with you`,
      body: finalHtml,
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
        secure: true,
      });

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
        secure: true,
      });

      const modifiedUser = new UserDto(user)

      return sendResponse(res, 200, {
        user: modifiedUser,
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

    res.clearCookies("refreshToken")
    res.clearCookies("accessToken")

    return sendResponse(res, 200, {
      message: `User LoggedIn Successfully!`
    })
  }
}

export default new UserController();
