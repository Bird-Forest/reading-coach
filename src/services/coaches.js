"use server";

import mongoose from "mongoose";
import { Coach, initializeCoachModel } from "@/models/coach";

export const createCoach = async (item, userId) => {
  try {
    await initializeCoachModel();
    const newTrain = await Coach.create({
      ...item,
      owner: mongoose.Types.ObjectId.createFromHexString(userId),
    });
    newTrain.books.forEach((book) => {
      book.category = "init";
    });

    await newTrain.save();
    // const date = JSON.parse(JSON.stringify(newTrain));
    // console.log(date);
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    console.log(e);
  }
};

export const getCoach = async (id) => {
  try {
    await initializeCoachModel();
    const coach = await Coach.findById(id).lean();
    return JSON.parse(JSON.stringify(coach));
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

export const updateCoach = async (id, data) => {
  try {
    await initializeCoachModel();
    const updatedCoach = await Coach.findByIdAndUpdate(id, data, {
      new: true,
    }).lean();
    return JSON.parse(JSON.stringify(updatedCoach));
  } catch (e) {
    console.log(e);
    return { message: "Відбулася помилка" };
  }
};

export const deleteCoach = async (id) => {
  try {
    await initializeCoachModel();
    await Coach.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
    return { message: "Відбулася помилка" };
  }
};

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
