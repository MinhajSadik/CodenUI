import categoryService from "../services/category.service.js";
import { sendResponse } from "../utils/response.util.js";

class CategoryController {
  async createCategory(req, res) {
    const { name } = req.body;
    try {
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
