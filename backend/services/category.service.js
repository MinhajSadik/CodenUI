import Category from "../models/category.model.js";

class CategoryService {
  async create(payload) {
    return await Category.create(payload);
  }
  async findById(id) {
    return await Category.findById(id);
  }
  async findOne(name) {
    return await Category.findOne({ name });
  }
  async find() {
    return await Category.find({}).populate({
      path: "productId",
    });
  }
}

export default new CategoryService();
