import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import hashService from "./hash.service.js";

class UserService {
  async createUser(payload) {
    const { name, email, password } = payload;
    const hashedPassword = await hashService.hashPassword(password);
    return await User.create({
      name,
      email,
      password: hashedPassword,
    });
  }
  async findUser(email) {
    return await User.findOne({ email });
  }
  async findById(id) {
    return await User.findById(id);
  }
  async updateUser(id, payload) {
    return await User.findOneAndUpdate(id, payload, { new: true });
  }

  async comparePassword(password, oldPassword) {
    return await bcrypt.compare(password, oldPassword);
  }
}

export default new UserService();
