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
    return await User.findOne({ _id: id });
  }
  async updateUser(id, payload) {
    return await User.findByIdAndUpdate(id, payload, { new: true });
  }

  async countUser() {
    return await User.count()
  }
}

export default new UserService();
