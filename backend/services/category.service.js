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
  async update(id, payload) {
    return await Category.findByIdAndUpdate(id, payload, { new: true });
  }
  async delete(id) {
    return await Category.findByIdAndDelete(id);
  }
  async deleteProductId(categoryId, productId) {
    const category = await this.findById(categoryId);

    const cgId = category.productId.map((id) => id).toString();

    const transform = Array.isArray(cgId) ? cgId : [cgId];

    const newValue = transform.map((perId) => perId <= productId);
    console.log(newValue);
  }
}

export default new CategoryService();
