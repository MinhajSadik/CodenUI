import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";

class UserService {
  async createUser(payload) {
    const { name, email, password } = payload;
    const hashedPassword = await this.hashPassword(password);
    return await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
  }
  async findUser(email) {
    return await UserModel.findOne({ email });
  }
  async findById(id) {
    return await UserModel.findById(id);
  }
  async updateUser(id, payload) {
    return await UserModel.findOneAndUpdate(id, payload, { new: true });
  }
  async hashPassword(payload) {
    return await bcrypt.hash(payload, 12);
  }
  async comparePassword(password, oldPassword) {
    return await bcrypt.compare(password, oldPassword);
  }
}

export default new UserService();
