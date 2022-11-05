import { sendResponse } from "../utils/response.util.js";

export default function authorizedRole(roles = []) {
  if (typeof roles === "string") {
    roles = [roles];
  }

  return [
    async (req, res, next) => {
      if (req.user) {
        if (roles.length && !roles.includes(req.user.role)) {
          return sendResponse(res, 401, {
            message: `Role ${req.user.role} is not authorized to perform this action`,
          });
        }
      }
      return next();
    },
  ];
}
