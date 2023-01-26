import { Router } from "express";
import userController from "../controllers/user.controller.js";
import checkAuth from "../middlewares/auth.middleware.js";
import authorizedRole from "../middlewares/role.middleware.js";

const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/update/:id", checkAuth, userController.updateUser);
router.post(
  "/sendMail",
  checkAuth,
  authorizedRole(["admin"]),
  userController.sendFileByEmail
);

router.get("/refresh", userController.refresh)

export default router;
