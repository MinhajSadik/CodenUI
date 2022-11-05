import ProductModel from "../models/product.model.js";
class ProductService {
  async createProduct(payload) {
    const {
      name,
      price,
      description,
      image,
      viewsCount,
      downloadCount,
      category,
    } = payload;
    return await ProductModel.create({
      name,
      price,
      description,
      image,
      viewsCount,
      downloadCount,
      category,
    });
  }
}

export default ProductService;
