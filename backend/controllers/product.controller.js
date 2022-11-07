import categoryService from "../services/category.service.js";
import productService from "../services/product.service.js";
import { sendResponse } from "../utils/response.util.js";
class ProductController {
  async createProduct(req, res) {
    const { categoryId } = req.body;
    try {
      const category = await categoryService.findById(categoryId);

      if (!category) {
        return sendResponse(res, 400, {
          message: `We could not find category with id ${categoryId}`,
        });
      }

      const product = await productService.create(req.body);
      const newProduct = await product.save();
      category.productId.push(newProduct._id);
      await category.save();

      return sendResponse(res, 201, {
        message: `${product.name} created successfully~`,
        product: newProduct,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }

  async findProduct(req, res) {
    try {
      const products = await productService.find({});

      return sendResponse(res, 200, {
        message: `All Product were found!`,
        products,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }
}

export default new ProductController();
