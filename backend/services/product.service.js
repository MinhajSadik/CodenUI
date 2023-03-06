import Product from "../models/product.model.js";

class ProductService {
  async createProduct(payload) {
    return await Product.create(payload);
  }

  async findProducts(page, limit) {
    return await Product.find({}).populate({
      path: "categoryId",
      model: "Category",
      populate: {
        path: "products",
        model: "Product",
      }
    })
      // .skip((page * limit) - limit).limit(limit)
      .sort({
        createdAt: -1
      }).exec()
  }

  async findByCategoryName(upperName, lowerName) {
    return await Product.find({
      $or: [{
        categoryName: upperName,
      }, {
        categoryName: lowerName
      }]
    })
      .populate({
        path: "techStack",
        model: "Tech",
        populate: {
          path: "file",
          model: "File",
        }
      })
      // .skip((page * limit) - limit).limit(limit)
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

  async countProduct() {
    return Product.count()
  }
}

export default new ProductService();
