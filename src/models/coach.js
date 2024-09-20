import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { bookSchema } from "./book";
import { bookCategory } from "@/constants/bookCategory";

const coachSchema = new mongoose.Schema(
  {
    start: Date,
    finish: Date,
    books: [bookSchema],
    totalDay: Number,
    totalPage: Number,
    category: { type: String, enum: bookCategory },
    progress: [{ date: Date, pagesRead: Number }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: false, timestamps: true }
);

coachSchema.pre("save", async function (next) {
  const coach = this;
  if (coach.isModified("books")) {
    for (let book of coach.books) {
      await mongoose
        .model("Book")
        .findByIdAndUpdate(book._id, { category: "init" });
    }
  }
  next();
});

let Coach;
const initializeCoachModel = async () => {
  await connectDB();
  Coach = mongoose.models.Coach || mongoose.model("Coach", coachSchema);
};
export { initializeCoachModel, Coach };

// interface IReadingGoal extends Document {
//   user: mongoose.Types.ObjectId;
//   book: mongoose.Types.ObjectId;
//   startDate: Date;
//   endDate: Date;
//   dailyProgress: {
//     date: Date,
//     time: string,
//     pagesRead: number,
//   }[];
//   totalPlannedPages(): Promise<number>;
//   totalPagesRead(): number;
// }

// const goalScSchema = new Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
//   startDate: { type: Date, required: true },
//   endDate: { type: Date, required: true },
//   dailyProgress: [
//     {
//       date: { type: Date, required: true },
//       time: { type: String, required: true },
//       pagesRead: { type: Number, required: true },
//     },
//   ],
// });

// Метод для подсчета общего количества запланированных страниц
// ReadingGoalSchema.methods.totalPlannedPages = async function () {
//   const book = await mongoose.model("Book").findById(this.book);
//   return book ? book.pages : 0;
// };

// Метод для подсчета общего количества прочитанных страниц
// ReadingGoalSchema.methods.totalPagesRead = function () {
//   return this.dailyProgress.reduce(
//     (total, progress) => total + progress.pagesRead,
//     0
//   );
// };

// export default mongoose.model("ReadingGoal", ReadingGoalSchema);

// const readingGoal = await ReadingGoal.findById(goalId);
// const plannedPages = await readingGoal.totalPlannedPages();
// const pagesRead = readingGoal.totalPagesRead();

// console.log(`Запланировано страниц: ${plannedPages}`);
// console.log(`Прочитано страниц: ${pagesRead}`);
