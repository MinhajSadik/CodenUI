import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;

class TokenService {
  async generateToken(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1m",
    });
    //later there will be refresh token
    return { accessToken };
  }
}

export default new TokenService();
