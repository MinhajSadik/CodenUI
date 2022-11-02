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
    try {
      const existUser = await userService.findUser(req, res);

      if (existUser){
        
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default new UserController();
