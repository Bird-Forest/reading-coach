"use server";
// import Book from "../services/books";

// export const createBook = async (newBook) => {
//   console.log(newBook);
//   try {
//     const book = await Book.create(newBook);
//     console.log(book);
//     return {
//       message: "Успішно додано",
//     };
//   } catch (e) {
//     console.log(e);
//     return {
//       message: "Відбулася помилка",
//     };
//   }
// };


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
