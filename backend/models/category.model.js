import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
    strict: true,
  }
);

categorySchema.pre("save", async function (next) {
  // const categoryId = this.getChanges().$set.categoryId
  // try {
  //   const category = await Category.findOne({}).sort({ _id: -1 })

  //   if (category === null) {
  //     return this.categoryId = categoryId
  //   }
  //   else {
  //     return this.categoryId = category.categoryId + 1
  //   }
  // } catch (error) {
  //   return next(error.message)
  // }
  return next()
})

const Category = model("Category", categorySchema);

export default Category;
