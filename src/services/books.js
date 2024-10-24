"use server";

import mongoose from "mongoose";
import { bookCategory } from "@/constants/bookCategory";
import { Book, initializeBookModel } from "@/models/book";

//  *** FOR API/books
export const getBooksByCategory = async (category, userId) => {
  try {
    await initializeBookModel();
    const books = await Book.find({
      category,
      owner: userId,
    }).exec();

    return books;
  } catch (e) {
    return {
      message: "Відбулася помилка",
    };
  }
};

export const createBook = async (values, userId) => {
  try {
    await initializeBookModel();
    const book = await Book.create({
      ...values,
      owner: mongoose.Types.ObjectId.createFromHexString(userId),
      // owner: mongoose.Types.ObjectId(id),
    });
    return {
      status: 201,
    };
  } catch (e) {
    return {
      status: 404,
    };
  }
};

export const updateBook = async (id, book) => {
  try {
    await initializeBookModel();
    const bookId = await Book.findByIdAndUpdate(id, book, { new: true }).lean();
    if (!bookId) {
      // throw new Error("is absent");
      return {
        message: "Відбулася помилка",
      };
    }

    const data = JSON.parse(JSON.stringify(book));
    return data;
  } catch (e) {
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getBooksStart = async (id) => {
  try {
    await initializeBookModel();
    const booksStart = await Book.find({
      category: bookCategory.start,
      owner: id,
    }).lean();
    const books = JSON.parse(JSON.stringify(booksStart));

    return books;
  } catch (e) {
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getBooksInit = async (id) => {
  try {
    await initializeBookModel();
    const booksInit = await Book.find({
      category: bookCategory.init,
      owner: id,
    }).lean();
    const books = JSON.parse(JSON.stringify(booksInit));

    return books;
  } catch (e) {
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getBooksEnd = async (id) => {
  try {
    await initializeBookModel();
    const booksEnd = await Book.find({
      category: bookCategory.end,
      owner: id,
    }).lean();
    const books = JSON.parse(JSON.stringify(booksEnd));

    return books;
  } catch (e) {
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getBook = async (id) => {
  try {
    await initializeBookModel();
    const book = await Book.findById({ _id: id }).lean();
    if (!book) {
      throw new Error("is absent");
    }
    const data = JSON.parse(JSON.stringify(book));
    return data;
  } catch (e) {
    return {
      message: "Відбулася помилка",
    };
  }
};
