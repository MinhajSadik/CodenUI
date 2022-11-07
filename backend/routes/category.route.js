import { Router } from "express";
import categoryController from "../controllers/category.controller.js";
// import checkAuth from "../middlewares/auth.middleware.js";
import authorizedRole from "../middlewares/role.middleware.js";

const router = Router();

router.post(
  "/create",
  // checkAuth,
  authorizedRole(["admin"]),
  categoryController.createCategory
);

router.get(
  "/all",
  // checkAuth,
  authorizedRole(["admin"]),
  categoryController.findCategory
);

export default router;
