import ProductDto from "../dtos/product.dto.js";
import {
  extractImageData,
  imageResponse
} from "../helpers/extractImageData.js";
import { generateUniqeName } from "../helpers/generateUniqeName.js";
import { upperCaseWords } from "../helpers/upperCaseWords.js";
import categoryService from "../services/category.service.js";
import productService from "../services/product.service.js";
import spaceService from "../services/space.service.js";
import { sendResponse } from "../utils/response.util.js";
import statusCode from "../utils/statusCode.util.js";

class ProductController {
  async createProduct(req, res) {
    try {
      const { categoryId, name, image, thumbnail } = req.body;

      const fileNames = [image, thumbnail];
      const category = await categoryService.findCategoryById(categoryId);
      const sameProduct = await productService.findProduct({ name });

      if (sameProduct !== null) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: `Already we have same product, please change your product information...`,
        });
      }

      if (!category) {
        return sendResponse(res, statusCode.BAD_REQUEST, {
          message: `We could not find category with id ${categoryId}`,
        });
      }

      await spaceService.createBucket(process.env.PRODUCT_BUCKET);

      fileNames.forEach(async (fileName, index) => {
        const imageRes = await imageResponse(fileName);
        const imageType = imageRes.getMIME().split("/")[1];

        await spaceService.uploadFileToBucket({
          Bucket: process.env.PRODUCT_BUCKET,
          Key: `${generateUniqeName(name)}_${index}.${imageType}`,
          ACL: "public-read",
          Body: extractImageData(fileName),
          ContentType: imageRes.getMIME(),
        });

        let product = await productService.createProduct({
          ...req.body,
          image: `${process.env.SPACE_ENDPOINT}/${process.env.PRODUCT_BUCKET}/${generateUniqeName(name)}_${index}.${imageType}`,
          thumbnail: `${process.env.SPACE_ENDPOINT}/${process.env.PRODUCT_BUCKET}/${generateUniqeName(name)}_${index}.${imageType}`
        });

        category.products.push(product._id);
        await category.save();

        return sendResponse(res, statusCode.CREATED, {
          message: `${product.name} created successfully~`,
          product: new ProductDto(product),
        });
      });
      console.log(product)
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message,
      });
    }
  }

  async findProducts(req, res) {
    const limit = 1;
    const { page = 1 } = req.query;

    try {
      const products = await productService.findProducts(page, limit);

      if (!products.length) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: "There are no products",
        });
      }

      const transformed = products.map((product) => {
        return new ProductDto(product);
      });

      return sendResponse(res, statusCode.OK, {
        message: `All Product were found!`,
        products: transformed,
      });
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message,
      });
    }
  }

  async findProductsByCategoryName(req, res) {
    const { categoryName } = req.params;
    const [first, second] = categoryName.split("-");
    const upperCategoryName = upperCaseWords(first + " " + second);
    const lowerCategoryName = first + " " + second;

    try {
      const products = await productService.findByCategoryName(
        upperCategoryName,
        lowerCategoryName
      );

      if (!products.length) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: `We have no product similer to ${categoryName}`,
        });
      }

      const transformed = products.map((product) => {
        return new ProductDto(product);
      });

      return sendResponse(res, statusCode.NOT_FOUND, {
        message: `All products found related to ${categoryName}`,
        products: transformed,
      });
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
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
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: `We could not find product based on your ${id}`,
        });
      }

      const updatedProduct = await productService.updateProduct(id, req.body);

      return sendResponse(res, statusCode.OK, {
        message: `Product updated successfully ${name}`,
        product: updatedProduct,
      });
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message,
      });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await productService.findProductById(id);

      if (!product) {
        return sendResponse(res, statusCode.NOT_FOUND, {
          message: `We could not find product based on your ${id}`,
        });
      }

      await categoryService.deleteProductID(product.categoryId, id);

      await productService.deleteProduct(id);

      return sendResponse(res, statusCode.OK, {
        message: `Product ${product.name} deleted successfully`,
      });
    } catch (error) {
      return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
        message: error.message,
      });
    }
  }
}

export default new ProductController();
