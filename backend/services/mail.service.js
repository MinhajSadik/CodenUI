import nodeMailer from "nodemailer";
import UserModel from "../models/user.model.js";

class MailService {
  async sentMail(payload) {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      service: process.env.SMPT_SERVICE,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: payload.email,
      subject: payload.subject,
      text: payload.message,
    };

    const sentMail = await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
    return sentMail;
  }
  async saveMail(payload) {
    return await UserModel.create(payload);
  }
}

export default new MailService();
