import UserModel from "../models/user.model.js";

class UserService {
  async createUser(payload) {
    return await UserModel.create(payload);
  }
  async findUser(req, res) {
    const { email } = req.body;
    const existUser = await UserModel.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        message: `User already exist email with ${email}`,
      });
    }
    return existUser;
  }
}

export default new UserService();
