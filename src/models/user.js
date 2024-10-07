import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pwd: { type: String },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

let User;

const initializeUserModel = async () => {
  await connectDB();
  User = mongoose.models.User || mongoose.model("User", userSchema);
};

export { initializeUserModel, User };
