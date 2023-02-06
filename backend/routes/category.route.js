import { Router } from "express";
import categoryController from "../controllers/category.controller.js";
import checkAuth from "../middlewares/auth.middleware.js";
import authorizedRole from "../middlewares/role.middleware.js";

const router = Router();

router.post(
  "/create",
  checkAuth,
  authorizedRole(["admin"]),
  categoryController.createCategory
);

router.get(
  "/getAll",
  // checkAuth,
  authorizedRole(["admin"]),
  categoryController.findCategories
);


router.put(
  "/update/:id",
  checkAuth,
  authorizedRole(["admin"]),
  categoryController.updateCategory
);

router.delete(
  "/delete/:id",
  checkAuth,
  authorizedRole(["admin"]),
  categoryController.deleteCategory
);

export default router;
