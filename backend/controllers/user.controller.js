import mailService from "../services/mail.service.js";
import userService from "../services/user.service.js";

class UserController {
  async registerUser(req, res) {
    try {
      const existedUser = await userService.findUser(req, res);

      if (existedUser) return;
      else {
        const user = await userService.createUser(req.body);

        return res.status(201).json(user);
      }
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
  async loginUser(req, res) {}

  async updateUser(req, res) {}

  async sendFileByEmail(req, res) {
    const { email } = req.body;
    const options = {
      email,
      subject: `Welcome ${process.env.APP_NAME} with you`,
      message: `
        You have applied a template below we attached         
        Download Here
        `,
    };
    try {
      const existedUser = await mailService.findMail(email);

      if (existedUser) {
        const { email: userEmail } = existedUser;
        options.email = userEmail;
        console.log(options);
        await mailService.sentMail(options);
      } else {
        await mailService.saveMail(req.body);
        await mailService.sentMail(options);
      }

      // const sentMail = await mailService.sentMail(options);
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
