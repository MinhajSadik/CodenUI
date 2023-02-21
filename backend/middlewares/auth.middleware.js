import tokenService from "../services/token.service.js";
import { sendResponse } from "../utils/response.util.js";

export default async function (req, res, next) {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return sendResponse(res, 500, {
        message: "You have no session!",
      });
    }

    const userData = await tokenService.verifyAccessToken(accessToken);
    if (!userData) {
      throw new Error("Invalid Credential!");
    }

    console.log(userData)


    req.user = userData;
    return next();
  } catch (error) {
    return sendResponse(res, 500, {
      message: error.message,
    });
  }
}
