"use server";

import mongoose from "mongoose";
import {
  Coach,
  initializeCoachModel,
  updateBooksCategory,
} from "@/models/coach";
import { bookCategory } from "@/constants/bookCategory";
import { bookSchema } from "@/models/book";

export const createCoach = async (item, userId) => {
  // console.log("SWRVER", item, userId);
  try {
    await initializeCoachModel();
    const newTrain = await Coach.create({
      ...item,
      owner: mongoose.Types.ObjectId.createFromHexString(userId),
    });
    newTrain.books.forEach((book) => {
      book.category = bookCategory.init;
    });

    await newTrain.save();

    return {
      message: "Успішно додано",
    };
  } catch (e) {
    console.log(e);
  }
};

export const getLastCoach = async (id) => {
  try {
    await initializeCoachModel();
    const latestCoach = await Coach.findOne({ owner: id })
      .sort({
        createdAt: -1,
      })
      .lean();

    if (!latestCoach) {
      return { message: "No coach found" };
    }
    const data = JSON.parse(JSON.stringify(latestCoach));

    return data;
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: "Server error", error });
  }
};

export const getCoachById = async (id) => {
  try {
    await initializeCoachModel();
    const coach = await Coach.findById({ _id: id }).lean();
    // return JSON.parse(JSON.stringify(coach));
    return coach;
  } catch (e) {
    console.log(e);
    return { message: "Відбулася помилка" };
  }
};

export const updateReportCoach = async (id, item) => {
  try {
    await initializeCoachModel();
    const coach = await Coach.findById(id);
    if (!coach) {
      return { message: "Відбулася помилка" };
    }

    const today = new Date().setHours(0, 0, 0, 0);
    const existingReport = coach.progress.find(
      (entry) => new Date(entry.date).setHours(0, 0, 0, 0) === today
    );

    if (existingReport) {
      existingReport.pagesRead += item.pagesRead;
    } else {
      coach.progress.push(item);
    }

    await coach.save();

    return {
      message: "Успішно додано",
    };
  } catch (e) {
    console.log(e);
    return { message: "Відбулася помилка" };
  }
};

export const updateBooksCoach = async (coachId, update) => {
  try {
    await initializeCoachModel();
    const coach = await Coach.findByIdAndUpdate(coachId, update, {
      new: true,
    }).lean();
    if (!coach) {
      return { message: "Відбулася помилка" };
    }
    for (let book of update.books) {
      if (book.category === bookCategory.end)
        await mongoose
          .model("Book")
          .findByIdAndUpdate(book._id, { category: book.category });
    }
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    console.log(e);
    return { message: "Відбулася помилка" };
  }
};

export const getAllCoaches = async (userId) => {
  try {
    await initializeCoachModel();
    const coaches = await Coach.find({ owner: userId }).lean();
    return JSON.parse(JSON.stringify(coaches));
  } catch (e) {
    console.log(e);
    return { message: "Відбулася помилка" };
  }
};

// export const createCoach = async (train, userId) => {
//   try {
//     await initializeCoachModel();
//     const newTrain = await Coach.create({
//       ...train,
//       owner: mongoose.Types.ObjectId(userId),
//     });
//     return JSON.parse(JSON.stringify(newTrain));
//   } catch (e) {
//     console.log(e);
//     return { message: "Відбулася помилка" };
//   }
// };

// export const updateCoach = async (id, data) => {
//   try {
//     await initializeCoachModel();
//     const updatedCoach = await Coach.findByIdAndUpdate(id, data, {
//       new: true,
//     }).lean();
//     return JSON.parse(JSON.stringify(updatedCoach));
//   } catch (e) {
//     console.log(e);
//     return { message: "Відбулася помилка" };
//   }
// };

// export const deleteCoach = async (id) => {
//   try {
//     await initializeCoachModel();
//     await Coach.findByIdAndDelete(id);
//   } catch (e) {
//     console.log(e);
//     return { message: "Відбулася помилка" };
//   }
// };

// export const addStartDate = async (value, id) => {
//   try {
//     await initializeCoachModel();
//     const newTrain = await Coach.findByIdAndUpdate({
//       start: value,
//       // owner: mongoose.Types.ObjectId.createFromHexString(id),
//     }).exec();
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const addEndDate = async (value, id) => {
//   try {
//     await initializeCoachModel();
//     const newTrain = await Coach.findByIdAndUpdate(
//       { _id: id },
//       { finish: value, new: true }
//     ).lean();
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const addBookTrain = async (value, id) => {
//   try {
//     await initializeCoachModel();
//     const newTrain = await Coach.findByIdAndUpdate(
//       { _id: id },
//       { end: value, new: true }
//     ).lean();
//   } catch (e) {
//     console.log(e);
//   }
// };
