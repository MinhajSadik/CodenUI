import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Token from "../models/refresh.model.js";

dotenv.config();
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET

class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: process.env.ACCESS_EXPIRES_IN,
    });

    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: process.env.REFRESH_EXPIRES_IN,
    });

    return { accessToken, refreshToken };
  }


  async storeRefreshToken(userId, token) {
    try {
      await Token.create({
        token,
        userId
      })
    } catch (error) {
      console.error(error.message);
    }
  }

  async verifyAccessToken(accessToken) {
    return jwt.verify(accessToken, accessTokenSecret);
  }

  async verifyRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, refreshTokenSecret)
  }

  async findRefreshToken(userId, refreshToken) {
    return await Token.findOne({
      userId,
      token: refreshToken
    });
  }

  async updateRefreshToken(userId, refreshToken) {
    return await Token.updateOne({
      userId,
      token: refreshToken
    })
  }

  async removeToken(refreshToken) {
    return await Token.deleteOne({
      token: refreshToken
    })
  }
}

export default new TokenService();
