"use server";

import mongoose from "mongoose";
import { Coach, initializeCoachModel } from "@/models/coach";
// import { Book, initializeBookModel } from "@/models/book";

export const createCoach = async (train, id) => {
  try {
    await initializeCoachModel();
    const newTrain = await Coach.create({
      train,
      owner: id,
    }).lean();
    const date = JSON.parse(JSON.stringify(newTrain));
    return date;
  } catch (e) {
    console.log(e);
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
