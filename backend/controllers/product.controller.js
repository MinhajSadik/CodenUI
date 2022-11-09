import ProductDto from "../dtos/product.dto.js";
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

      const transformed = new ProductDto(newProduct);
      return sendResponse(res, 201, {
        message: `${product.name} created successfully~`,
        product: transformed,
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

      const transformed = products.map((product) => {
        return new ProductDto(product);
      });

      return sendResponse(res, 200, {
        message: `All Product were found!`,
        products: transformed,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }
}

export default new ProductController();