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
  async update(id, payload) {
    return await Product.findByIdAndUpdate(id, payload, { new: true });
  }
  async delete(id, payload) {
    return await Product.findByIdAndDelete(id, payload);
  }
}

export default new ProductService();
