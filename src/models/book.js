import mongoose, { Schema } from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { bookCategory } from "@/constants/bookCategory";

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    pages: Number,
    year: String,
    rating: { type: [Boolean], default: [false, false, false, false, false] },
    category: { type: String, enum: bookCategory },
    resume: String,
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

// owner: {
//   type: Schema.Types.ObjectId,
//   ref: "User",
//   requied: true,
// },

// const connection = mongoose.createConnection(uri);
// export const Book = connection.model("Book", bookShema);

// createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
