import ProductDto from "../dtos/product.dto.js";
import categoryService from "../services/category.service.js";
import productService from "../services/product.service.js";
import { sendResponse } from "../utils/response.util.js";
class ProductController {
  async createProduct(req, res) {
    try {
      const { categoryId, name } = req.body;
      const category = await categoryService.findCategoryById(categoryId);
      const sameProduct = await productService.findProduct({ name })

      if (sameProduct !== null) {
        return sendResponse(res, 400, {
          message: `Already we have same product, please change your product information...`
        })
      }

      if (!category) {
        return sendResponse(res, 400, {
          message: `We could not find category with id ${categoryId}`,
        });
      }

      const product = await productService.createProduct(req.body);

      category.products.push(product._id);
      await category.save();

      return sendResponse(res, 201, {
        message: `${product.name} created successfully~`,
        product: new ProductDto(product),
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }

  async findProducts(req, res) {
    const { page = 1 } = req.query
    const limit = 1
    const { name } = req.body
    try {
      const products = await productService.findProducts(name, page, limit);

      if (!products.length) {
        return sendResponse(res, 404, {
          message: "There are no products"
        })
      }


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

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const product = await productService.findProductById(id);

      if (!product) {
        return sendResponse(res, 404, {
          message: `We could not find product based on your ${id}`,
        });
      }

      const updatedProduct = await productService.updateProduct(id, req.body);

      return sendResponse(res, 200, {
        message: `Product updated successfully ${name}`,
        product: updatedProduct,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await productService.findProductById(id);

      if (!product) {
        return sendResponse(res, 404, {
          message: `We could not find product based on your ${id}`,
        });
      }

      await categoryService.deleteProductID(product.categoryId, id);

      await productService.deleteProduct(id);


      return sendResponse(res, 200, {
        message: `Product ${product.name} deleted successfully`,
      });
    } catch (error) {
      return sendResponse(res, 500, {
        message: error.message,
      });
    }
  }
}

export default new ProductController();
