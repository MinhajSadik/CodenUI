import CategoryDto from "../dtos/category.dto.js";
import ProductDto from "../dtos/product.dto.js";
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

      const transformed = new CategoryDto(category);
      return sendResponse(res, 201, {
        message: `${name} created successfully`,
        category: transformed,
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

    const transformed = categories.map((products) => {
      return products.productId.map((product) => {
        return new ProductDto(product);
      });
    });

    return sendResponse(res, 200, {
      categories: transformed,
    });
  }
}

export default new CategoryController();
