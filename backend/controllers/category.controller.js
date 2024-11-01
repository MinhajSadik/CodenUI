import CategoryDto from "../dtos/category.dto.js";
import ProductDto from "../dtos/product.dto.js";
import { upperCaseWords } from "../helpers/upperCaseWords.js";
import categoryService from "../services/category.service.js";
import productService from "../services/product.service.js";
import { sendResponse } from "../utils/response.util.js";

class CategoryController {
  async createCategory(req, res) {
    try {
      const { name, productId } = req.body;
      const product = await productService.findProductById(productId);

      if (productId && !product) {
        return sendResponse(res, 400, {
          message: `We could not find product based on your id ${productId}`,
        });
      }

      const existedCategory = await categoryService.findCategoryByName(name);

      if (existedCategory?.name === name) {
        return sendResponse(res, 400, {
          message: `We have already same category, try different!`,
        });
      }

      const category = await categoryService.createCategory(req.body);


      return sendResponse(res, 201, {
        message: `${name} created successfully`,
        category: new CategoryDto(category)
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }

  async findCategoryByName(req, res) {
    const { categoryName } = req.params
    try {
      const [first, second] = categoryName.split("-")
      const upperCategoryName = upperCaseWords(first + " " + second)
      const lowerCategoryName = first + " " + second

      const category = await categoryService.findCategoryByName(upperCategoryName, lowerCategoryName)

      if (!category) {
        return sendResponse(res, 404, {
          message: `There are no categories included ${categoryName}`
        })
      }

      const transfromed = category.products.map((products) => new ProductDto(products))

      return sendResponse(res, 200, {
        message: `${category.name} successfully fetched!`,
        category: transfromed
      })

    } catch (error) {
      return sendResponse(res, 200, {
        message: error.message,
      })
    }
  }

  async findCategories(req, res) {
    try {
      const categories = await categoryService.findCategories()

      if (!categories.length) {
        return sendResponse(res, 400, {
          message: `There are no categories, You may add one!`,
        });
      }

      const transformed = categories.map((category) => {
        return new CategoryDto(category);
      });

      return sendResponse(res, 200, {
        categories: transformed,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }

  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await categoryService.findCategoryById(id);
      if (!category) {
        return sendResponse(res, 404, {
          message: `We could not find category based on your ${id}`,
        });
      }

      const updatedCategory = await categoryService.updateCategory(id, req.body);

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
    try {
      const { id } = req.params;
      const category = await categoryService.findCategoryById(id);
      if (!category) {
        return sendResponse(res, 404, {
          message: `We could not find category based on you ${id}`,
        });
      }

      await categoryService.deleteCategory(id);

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
