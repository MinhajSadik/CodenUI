import Category from "../models/category.model.js";

class CategoryService {
  async createCategory(payload) {
    return await Category.create(payload);
  }
  async findCategoryById(id) {
    return await Category.findById(id);
  }
  async findCategoryByName(name) {
    return await Category.findOne({ name });
  }
  async findCategories(page, limit) {
    return await Category
      // .aggregate([
      //   {
      //     "$unwind": "$products"
      //   },
      //   {
      //     "$limit": 2
      //   }
      // ])
      .find({})
      // .limit(limit)
      .populate({
        path: "products",
      }).skip((page * limit) - limit).limit(limit).exec()
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
  async countDocuments() {
    return await Category.countDocuments();
  }
}

export default new CategoryService();
