import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { bookCategory } from "@/constants/bookCategory";
import { bookSchema } from "./book";

const coachSchema = new mongoose.Schema(
  {
    start: Date,
    finish: Date,
    books: [bookSchema],
    totalDay: Number,
    totalPage: Number,
    category: { type: String, enum: bookCategory },
    progress: [
      {
        date: Date,
        pagesRead: { type: Number, default: 0 },
        pagesPlan: { type: Number, default: 0 },
      },
    ],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: false, timestamps: true }
);

let Coach;
const initializeCoachModel = async () => {
  await connectDB();
  Coach = mongoose.models.Coach || mongoose.model("Coach", coachSchema);
};
export { initializeCoachModel, Coach };

// ***************************************************8
// Функция для обновления категории книг в зависимости от текущего состояния
// export async function updateBooksCategory(coach) {
//   if (coach.isModified("books")) {
//     for (let book of coach.books) {
//       if (book.category === bookCategory.start) {
//         await mongoose
//           .model("Book")
//           .findByIdAndUpdate(book._id, { category: bookCategory.init });
//       } else if (book.category === bookCategory.init) {
//         await mongoose
//           .model("Book")
//           .findByIdAndUpdate(book._id, { category: bookCategory.end });
//       }
//     }
//   }
// }
// Использование функции для обновления категории перед сохранением
// coachSchema.pre("save", async function (next) {
//   const coach = this;
//   await updateBooksCategory(coach);
//   next();
// });
