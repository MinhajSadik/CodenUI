import Product from "../models/product.model.js";

class ProductService {
  async create(payload) {
    return await Product.create(payload);
  }
  async find() {
    return await Product.find({}).populate({
      path: "categoryId",
    });
  }
  async findById(id) {
    return await Product.findById(id);
  }
}

export default new ProductService();
