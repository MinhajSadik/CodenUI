import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Token from "../models/refresh.model.js";

dotenv.config();
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET
const accessExpireIn = process.env.ACCESS_EXPIRES_IN
const refreshExpireIn = process.env.REFRESH_EXPIRES_IN


class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: accessExpireIn,
    });

    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: refreshExpireIn,
    });

    return { accessToken, refreshToken };
  }


  async storeRefreshToken(userId, token, expiries) {
    await Token.create({
      token,
      userId,
      expiries
    })
  }

  async verifyAccessToken(accessToken) {
    return jwt.verify(accessToken, accessTokenSecret);
  }

  async verifyRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, refreshTokenSecret)
  }

  async findRefreshToken(userId) {
    return await Token.findOne({
      userId,
    });
  }

  async updateRefreshToken(userId, refreshToken) {
    return await Token.findByIdAndUpdate({
      _id: userId,
      token: refreshToken,
    })
  }

  async removeToken(refreshToken) {
    return await Token.deleteOne({
      token: refreshToken
    })
  }
}

export default new TokenService();
