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
    const { name, email } = req.body;
    try {
      const existedUser = await userService.findUser(email);

      if (existedUser) {
        return sendResponse(res, 400, {
          message: `User ${email} already exist!`,
        });
      } else {
        const newUser = await userService.createUser(req.body);

        const { accessToken } = await tokenService.generateToken({
          _id: newUser._id,
          email: newUser.email,
          role: newUser.role,
        });

        const user = new UserDto(newUser);
        res.cookie("accessToken", accessToken, {
          maxAge: 1000 * 60 * 60 * 24,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
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
    const { email, password } = req.body;
    try {
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

      const { accessToken } = await tokenService.generateToken({
        _id: user._id,
        email: user.email,
        role: user.role,
      });

      const modifiedUser = new UserDto(user);

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
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
    const { id } = req.params;
    try {
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

    const templatePath = path.join(__dirname, "../files/index.html");
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
}

export default new UserController();
