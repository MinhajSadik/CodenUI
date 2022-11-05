import { Router } from "express";
import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/user.middleware.js";

const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/update/:id", userController.updateUser);
router.post("/sendMail", authMiddleware, userController.sendFileByEmail);

export default router;
