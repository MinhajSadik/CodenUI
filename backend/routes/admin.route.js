import { Router } from "express";
import adminController from "../controllers/admin.controller.js";

const router = Router()

router.all("/dashboard", adminController.admin)

export default router