import productService from "../services/product.service.js";
import { sendResponse } from "../utils/response.util.js";
class ProductController {
  async createProduct(req, res) {
    try {
      const product = await productService.create(req.body);

      return sendResponse(res, 201, {
        message: `${product.name} created successfully~`,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }
}

export default new ProductController();
