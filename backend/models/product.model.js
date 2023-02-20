import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String || Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false
    },
    viewsCount: {
      type: Number,
      required: false,
      default: 0,
    },
    downloadCount: {
      type: Number,
      required: false,
      default: 0,
    },
    productId: {
      type: Number,
      default: 1000,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    categoryName: {
      type: String,
      required: true
    },
    stackThumbnails: {},
    tags: {}
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", async function (next) {
  const productId = this.getChanges().$set.productId
  try {
    const product = await Product.findOne({}).sort({ _id: -1 })

    if (product === null) {
      return this.productId = productId + 1
    }
    else {
      return this.productId = product.productId + 1
    }
  } catch (error) {
    return next(error.message)
  }
})

const Product = model("Product", productSchema);

export default Product;
