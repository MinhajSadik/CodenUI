import Category from "../models/category.model.js";

class CategoryService {
  async createCategory(payload) {
    return await Category.create(payload);
  }
  async findCategoryById(id) {
    return await Category.findById(id);
  }
  async findCategory(name) {
    return await Category.findOne({ name });
  }
  async findCategories() {
    return await Category.find({}).populate({
      path: "products",
    })
  }
  async updateCategory(id, payload) {
    return await Category.findByIdAndUpdate(id, payload, { new: true });
  }
  async deleteCategory(id) {
    return await Category.findByIdAndDelete(id);
  }
  async deleteProductID(categoryID, productID) {
    const category = await this.findById(categoryID);

    const cgId = category.products.map((id) => id);

    const removedID = cgId.pop();

    let updateDocument;
    if (removedID.toString() === productID) {
      updateDocument = {
        $set: { productId: cgId },
      };
    }
    return await Category.updateMany({ productID }, updateDocument);
  }
}

export default new CategoryService();
