"use server";

import mongoose from "mongoose";
import { Coach, initializeCoachModel } from "@/models/coach";
import { bookCategory } from "@/constants/bookCategory";

export const createCoach = async (item, userId) => {
  try {
    await initializeCoachModel();
    const newTrain = await Coach.create({
      ...item,
      owner: mongoose.Types.ObjectId.createFromHexString(userId),
    });
    const data = JSON.parse(JSON.stringify(newTrain));

    for (let book of newTrain.books) {
      if (book.category === bookCategory.init)
        await mongoose
          .model("Book")
          .findByIdAndUpdate(book._id, { category: bookCategory.init });
    }
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    return { message: "Відбулася помилка" };
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
    return { message: "Відбулася помилка" };
  }
};

export const updateBooksCoach = async (coachId, update) => {
  try {
    await initializeCoachModel();
    const coach = await Coach.findByIdAndUpdate(coachId, update, {
      new: true,
    }).lean();

    for (let book of update.books) {
      if (book.category === bookCategory.end)
        await mongoose
          .model("Book")
          .findByIdAndUpdate(book._id, { category: bookCategory.end });
    }
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    return { message: "Відбулася помилка" };
  }
};

export const deleteUnreadedBooks = async (coachId, update) => {
  const readedBooks = update.books.filter(
    (book) => book.category === bookCategory.end
  );
  try {
    await initializeCoachModel();
    const coach = await Coach.findByIdAndUpdate(
      { _id: coachId, books: readedBooks },
      {
        new: true,
      }
    ).lean();

    // if (!coach) {
    //   return { message: "Відбулася помилка" };
    // }

    const unreadedBooks = update.books.filter(
      (book) => book.category === bookCategory.init
    );
    for (let book of unreadedBooks) {
      await mongoose
        .model("Book")
        .findByIdAndUpdate(book._id, { category: bookCategory.start });
    }
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    return { message: "Відбулася помилка" };
  }
};

export const getAllCoaches = async (userId) => {
  try {
    await initializeCoachModel();
    const coaches = await Coach.find({ owner: userId }).lean();
    return JSON.parse(JSON.stringify(coaches));
  } catch (e) {
    return { message: "Відбулася помилка" };
  }
};
