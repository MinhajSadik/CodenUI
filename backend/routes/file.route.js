
import { Router } from "express";
import fileController from "../controllers/file.controller.js";

const router = Router()


router.post("/upload", fileController.createFile)


export default router