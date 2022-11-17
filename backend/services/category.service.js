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
  async deleteProductID(categoryID, productID) {
    const category = await this.findById(categoryID);

    const cgId = category.productId.map((id) => id);

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
