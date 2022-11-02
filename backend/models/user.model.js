import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["basic", "admin"],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
