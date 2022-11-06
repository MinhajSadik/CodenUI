import ProductModel from "../models/product.model.js";
class ProductService {
  async create(payload) {
    return await ProductModel.create(payload);
  }
}

export default new ProductService();
