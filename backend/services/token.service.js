import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    });
    //later there will be refresh token
    return { accessToken };
  }
  async verifyAccessToken(token) {
    return jwt.verify(token, accessTokenSecret);
  }

  async storeRefreshToken() {

  }
}

export default new TokenService();
