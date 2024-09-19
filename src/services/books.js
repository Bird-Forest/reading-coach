"use server";

import mongoose from "mongoose";
import { Book, initializeBookModel } from "@/models/book";

// import { Book, initializeBookModel } from "@/models/book";

export const createBook = async (values, id) => {
  try {
    await initializeBookModel();
    const book = await Book.create({
      ...values,
      // owner: new mongoose.Types.ObjectId(_id),
      owner: mongoose.Types.ObjectId.createFromHexString(id),
      // owner: mongoose.Types.ObjectId(id),
    });
    // console.log(book);
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    console.log(e);
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
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};
export const updateBook = async (update) => {
  console.log("UPDATE", update);
  // const { id, category } = req.body;
  try {
    await initializeBookModel();
    const book = await Book.findByIdAndUpdate({
      _id: update.id,
      category: update.category,
    }).lean();
    if (!book) {
      throw new Error("is absent");
    }
    const data = JSON.parse(JSON.stringify(book));
    return data;
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};
export const deleteBook = async (id) => {
  try {
    await initializeBookModel();
    const book = await Book.findOneAndDelete({ _id: id }).lean();
    if (!book) {
      throw new Error("is absent");
    }
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getAllBooks = async (id) => {
  try {
    await initializeBookModel();
    const books = await Book.find({ owner: id }).lean();

    // const booksStart = JSON.parse(JSON.stringify(books));

    return books;
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getBooksStart = async (id) => {
  // console.log("Server", id);

  try {
    await initializeBookModel();
    const books = await Book.find({ category: "start", owner: id }).exec();

    const booksStart = JSON.parse(JSON.stringify(books));

    return booksStart;
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};
export const getBooksInit = async (id) => {
  // console.log("Server", id);

  try {
    await initializeBookModel();
    const books = await Book.find({ category: "init", owner: id }).exec();

    const booksInit = JSON.parse(JSON.stringify(books));

    return booksInit;
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};
export const getBooksEnd = async (id) => {
  // console.log("Server", id);

  try {
    await initializeBookModel();
    const books = await Book.find({ category: "end", owner: id }).exec();

    const booksEnd = JSON.parse(JSON.stringify(books));

    return booksEnd;
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};

// Преобразуйте строку в ObjectId
// const book = await Book.create(values);
// import { NextApiRequest, NextApiResponse } from "next";
// import dbConnect from "../../lib/dbConnect";
// // import Book from "../../models/Book";
// import { getSession } from "next-auth/client";

// export default async function handler() {
// // req: NextApiRequest,
// // res: NextApiResponse
//   await dbConnect();

//   const session = await getSession({ req });
//   if (!session) {
//     return res.status(401).json({ message: "Not authenticated" });
//   }

//   const { title, author } = req.body;

//   try {
//     const newBook = new Book({
//       title,
//       author,
//       createdBy: session.user.id, // Используем ID пользователя из сессии
//     });

//     await newBook.save();
//     res.status(201).json(newBook);
//   } catch (error) {
//     res.status(500).json({ message: "Error saving book", error });
//   }
// }
