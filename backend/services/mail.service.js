import nodeMailer from "nodemailer";
import User from "../models/user.model.js";

class MailService {
  async sentMail(payload) {
    const serder = nodeMailer.createTransport({
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
      message: payload.message,
      // html: payload.body,
      // attachments: payload.attachments,
    };

    return await serder.sendMail(mailOptions);
  }
  async saveMail(payload) {
    return await User.create(payload);
  }
}

export default new MailService();
