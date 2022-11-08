import categoryService from "../services/category.service.js";
import productService from "../services/product.service.js";
import { sendResponse } from "../utils/response.util.js";

class CategoryController {
  async createCategory(req, res) {
    const { name, productId } = req.body;
    try {
      const product = await productService.findById(productId);
      console.log(product);

      if (product === null && !undefined) {
        return sendResponse(res, 400, {
          message: `We could not find product based on your id ${productId}`,
        });
      }

      const existedCategory = await categoryService.findOne(name);

      if (existedCategory?.name === name) {
        return sendResponse(res, 400, {
          message: `We have already same category, try different!`,
        });
      }

      const category = await categoryService.create(req.body);

      return sendResponse(res, 201, {
        message: `${name} created successfully`,
        category,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }
  async findCategory(req, res) {
    const categories = await categoryService.find({});

    if (!categories.length) {
      return sendResponse(res, 400, {
        message: `There are no categories, You may add one!`,
      });
    }

    return sendResponse(res, 200, {
      categories,
    });
  }
}

export default new CategoryController();
