// import bcrypt from "bcrypt";
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
    avatar: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    plan: {
      type: String,
      default: 'basic',
      enum: ['basic', 'monthly', 'yearly', 'lifetime']
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
