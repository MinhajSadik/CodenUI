import { sendResponse } from "../utils/response.util.js";
class ProductController {
  async createProduct(req, res) {
    try {
        const product = await productService.createProduct(req.body)
        
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }
}

export default new ProductController();
