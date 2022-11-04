import fs from "fs";
import handlebars from "handlebars";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import UserDto from "../dtos/user.dto.js";
import mailService from "../services/mail.service.js";
import tokenService from "../services/token.service.js";
import userService from "../services/user.service.js";

fs.promises;

class UserController {
  async registerUser(req, res) {
    const { email } = req.body;
    try {
      const existedUser = await userService.findUser(email);

      if (existedUser) {
        return res.status(400).json({
          message: `User ${email} already exist!`,
        });
      } else {
        const newUser = await userService.createUser(req.body);

        const { accessToken } = await tokenService.generateToken({
          _id: newUser._id,
          email: newUser.email,
          role: newUser.role,
        });

        res.cookie("accessToken", accessToken, {
          maxAge: 1000 * 60 * 60 * 24 * 30,
          httpOnly: true,
        });

        const user = new UserDto(newUser);
        return res.status(201).json({
          message: `User ${req.body.name} created successfully`,
          user,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await userService.findUser(email);

      if (!user) {
        return res.status(404).json({
          message: `User not found! create one with ${email} or check again`,
        });
      }

      const isPasswordMatched = await userService.comparePassword(
        password,
        user.password
      );

      if (!isPasswordMatched) {
        return res.status(400).json({
          message: `Password is not matched!`,
        });
      }

      const { accessToken } = await tokenService.generateToken({
        _id: user._id,
        email: user.email,
        role: user.role,
      });

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
      });

      const modifiedUser = new UserDto(user);
      return res.status(200).json({
        message: `User loggedIn successfuly ${email}`,
        user: modifiedUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async updateUser(req, res) {}

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
          name: "text.txt",
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

      return res.status(200).json({
        message: `We sent mail in your accout ${email}`,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default new UserController();
