import { Router } from "express";
import productController from "../controllers/product.controller.js";
import checkAuth from "../middlewares/auth.middleware.js";
import authorizedRole from "../middlewares/role.middleware.js";

const router = Router();

router.post(
  "/create",
  checkAuth,
  authorizedRole(["admin"]),
  productController.createProduct
);

router.get(
  "/getAll",
  checkAuth,
  authorizedRole(["admin"]),
  productController.findProduct
);

router.put(
  "/update/:id",
  checkAuth,
  authorizedRole(["admin"]),
  productController.updateProduct
);

export default router;
