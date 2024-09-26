"use server";

import mongoose from "mongoose";

import { bookCategory } from "@/constants/bookCategory";
import { Book, initializeBookModel } from "@/models/book";

//  *** FOR API/books
export const getBooksByCategory = async (category, userId) => {
  // console.log("S", category, userId);
  try {
    await initializeBookModel();
    const books = await Book.find({
      category,
      owner: userId,
    }).exec();
    // console.log("SERVER", books);
    return books;
    // const data = JSON.parse(JSON.stringify(books));
    // return data;
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const createBook = async (values, id) => {
  try {
    await initializeBookModel();
    const book = await Book.create({
      ...values,
      owner: mongoose.Types.ObjectId.createFromHexString(id),
      // owner: mongoose.Types.ObjectId(id),
    });
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

export const updateBook = async (id, book) => {
  // console.log("ID", id);
  // console.log("BOOK", book);
  // const session = await mongoose.startSession();
  // session.startTransaction();
  try {
    await initializeBookModel();
    const bookId = await Book.findByIdAndUpdate(id, book, { new: true }).lean();
    if (!bookId) {
      // throw new Error("is absent");
      return {
        message: "Відбулася помилка",
      };
    }
    // await Coach.findOneAndUpdate(
    //   { "books._id": id },
    //   { $set: { "books.$": book } },
    //   { session }
    // );

    // await session.commitTransaction();
    // session.endSession();

    const data = JSON.parse(JSON.stringify(book));
    return data;
  } catch (e) {
    console.log(e);
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
    console.log(e);
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
    console.log(e);
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
// export const getAllBooks = async () => {
//   try {
//     await initializeBookModel();
//     const books = await Book.find().lean();
//     return books;
//   } catch (e) {
//     console.log(e);
//     return {
//       message: "Відбулася помилка",
//     };
//   }
// };

// export const deleteBook = async (id) => {
//   try {
//     await initializeBookModel();
//     const book = await Book.findOneAndDelete({ _id: id }).lean();
//     if (!book) {
//       throw new Error("is absent");
//     }
//   } catch (e) {
//     console.log(e);
//     return {
//       message: "Відбулася помилка",
//     };
//   }
// };

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
