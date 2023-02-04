import Product from "../models/product.model.js";

class ProductService {
  async createProduct(payload) {
    return await Product.create(payload);
  }

  async findProducts(page, limit) {
    return await Product.find({}).limit(limit * 1)
      .skip((page - 1) * limit).populate({
        path: "categoryId",
      }).select("-products")
      .sort({
        createdAt: -1
      }).exec()
  }

  async findProduct(payload) {
    return await Product.findOne(payload)
  }

  async findProductById(id) {
    return await Product.findById(id);
  }

  async updateProduct(id, payload) {
    return await Product.findByIdAndUpdate(id, payload, { new: true });
  }
  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}

export default new ProductService();
