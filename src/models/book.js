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

// bookSchema.pre("save", async function (next) {
//   const book = this;
//   if (book.isModified("category")) {
//     await Coach.findOneAndUpdate(
//       { "books._id": book._id },
//       { $set: { "books.$.category": book.category } }
//     );
//   }
//   next();
// });

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
