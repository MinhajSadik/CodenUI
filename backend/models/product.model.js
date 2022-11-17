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
    filePath: {
      type: String,
      required: false,
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

// productSchema.pre("save", async function (next) {
//   if (this.SubCategory) {
//     try {
//       const check = await SubCategory.findById(this.SubCategory);
//       if (
//         !check ||
//         JSON.stringify(check.Category) !== JSON.stringify(this.Category)
//       ) {
//         throw new Error("Check your Category and/or SubCategory");
//       }
//     } catch (error) {
//       throw error;
//     }
//   }
//   next();
// });

const Product = model("Product", productSchema);

export default Product;
