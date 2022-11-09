import CategoryDto from "../dtos/category.dto.js";
import categoryService from "../services/category.service.js";
import productService from "../services/product.service.js";
import { sendResponse } from "../utils/response.util.js";

class CategoryController {
  async createCategory(req, res) {
    const { name, productId } = req.body;
    try {
      const product = await productService.findById(productId);
      console.log(product);

      if (productId && !product) {
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

    const transformed = categories.map((category) => {
      // category.productId.map((product) => {
      //   return new ProductDto(product);
      // });
      return new CategoryDto(category);
    });

    return sendResponse(res, 200, {
      categories: transformed,
    });
  }
  async updateCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const category = await categoryService.findById(id);
      if (!category) {
        return sendResponse(res, 404, {
          message: `We could not find category based on your ${id}`,
        });
      }

      const updatedCategory = await categoryService.update(id, req.body);

      return sendResponse(res, 200, {
        message: `${name} Category updated successfully`,
        category: updatedCategory,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }
  async deleteCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const category = await categoryService.findById(id);
      if (!category) {
        return sendResponse(res, 404, {
          message: `We could not find category based on you ${id}`,
        });
      }

      await categoryService.delete(id);

      return sendResponse(res, 200, {
        message: `Category ${category.name} deleted successfully`,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }
}

export default new CategoryController();
