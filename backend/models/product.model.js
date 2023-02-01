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
    image: {
      type: String,
      required: false,
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
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", async function (next) {
  this.productId = this.productId + 1
  return next();
})

const Product = model("Product", productSchema);

export default Product;
