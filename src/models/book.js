import mongoose, { Schema } from "mongoose";
import { uri } from "@/lib/mongodb";
import { bookCategory } from "@/constants/bookCategory";

// export const bookCategory = {
//   start: "start",
//   init: "init",
//   end: "end",
// };

// minLengthи.maxLength;

const bookShema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Set title"] },
    author: { type: String, required: [true, "Set author"] },
    pages: { type: Number, required: [true, "Set pages"] },
    year: { type: String, minLength: [4, "Set four numbers"] },
    rating: { type: [Boolean], default: [false, false, false, false, false] },
    category: { type: String, enum: bookCategory, default: "start" },
    resume: String,
    // createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      requied: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const Book = connection.model("Book", bookShema);
