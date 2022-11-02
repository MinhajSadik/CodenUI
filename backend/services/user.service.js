import UserModel from "../models/user.model.js";

class UserService {
  async createUser(payload) {
    return await UserModel.create(payload);
  }
  async findUser(req, res) {
    const { email } = req.body;

    const existedUser = await UserModel.findOne({ email });

    if (existedUser) {
      return res.status(400).json({
        message: `User already exist email with ${email}`,
      });
    }
    return existedUser;
  }

  async sendMail(payload) {
    const mail = await UserModel.create(payload);
  }
}

export default new UserService();
