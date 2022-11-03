import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.post("/register", userController.registerUser);
router.post("/sendMail", userController.sendFileByEmail);

export default router;
