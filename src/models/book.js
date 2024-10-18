import mongoose, { Schema } from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { bookCategory } from "@/constants/bookCategory";

export const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    pages: Number,
    year: String,
    rating: { type: [Boolean], default: [false, false, false, false, false] },
    category: { type: String, enum: bookCategory },
    resume: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: false, timestamps: true }
);

let Book;
const initializeBookModel = async () => {
  await connectDB();
  Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
};
export { initializeBookModel, Book };
