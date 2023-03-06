import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    products: {
      type: [Schema.Types.ObjectId]
    }

  },
  {
    timestamps: true,
    strict: true,
  }
);


const Category = model("Category", categorySchema);

export default Category;
