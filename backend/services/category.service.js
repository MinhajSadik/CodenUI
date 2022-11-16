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
  async deleteProductId(cgID, pdID) {
    const category = await this.findById(cgID);

    const cgId = category.productId.map((id) => id);

    cgId.pop();
    const transform = Object.assign({}, cgId);

    await this.update(pdID, transform, { new: true });
    return await category.save();
  }
}

export default new CategoryService();
