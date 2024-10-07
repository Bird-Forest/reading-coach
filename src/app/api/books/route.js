import { NextResponse } from "next/server";
import { getBooksByCategory } from "@/services/books";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const userId = searchParams.get("id");

  if (!category || !userId) {
    return NextResponse.json(
      { message: "Missing parameters" },
      { status: 400 }
    );
  }
  try {
    const books = await getBooksByCategory(category, userId);
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Відбулася помилка" }, { status: 500 });
  }
}

// export default async function handler(req, res) {
//   const { searchParams } = new URL(req.url);
//   const userId = searchParams.get("id");
//   const category = searchParams.get("categopy");
//   console.log("SWR", userId, category);

//   switch (method) {
//     case "GET":
//       if (id) {
//         try {
//           const book = await getBook(id);
//           res.status(200).json(book);
//         } catch (error) {
//           res.status(500).json({ message: "Відбулася помилка" });
//         }
//       } else if (userId) {
//         try {
//           console.log("GET HELLO");
//           let books;
//           switch (type) {
//             case "start":
//               books = await getBooksStart(userId);
//               break;
//             case "init":
//               books = await getBooksInit(userId);
//               break;
//             case "end":
//               books = await getBooksEnd(userId);
//               break;
//             default:
//               books = await getAllBooks(userId);
//           }
//           res.status(200).json(books);
//         } catch (error) {
//           res.status(500).json({ message: "Відбулася помилка" });
//         }
//       }
//       break;
//     case "POST":
//       try {
//         const newBook = await createBook(req.body);
//         res.status(201).json(newBook);
//       } catch (error) {
//         res.status(500).json({ message: "Відбулася помилка" });
//       }
//       break;
//     case "PUT":
//       try {
//         const updatedBook = await updateBook(id, req.body);
//         res.status(200).json(updatedBook);
//       } catch (error) {
//         res.status(500).json({ message: "Відбулася помилка" });
//       }
//       break;
//     case "DELETE":
//       try {
//         await deleteBook(id);
//         res.status(204).end();
//       } catch (error) {
//         res.status(500).json({ message: "Відбулася помилка" });
//       }
//       break;
//     default:
//       res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
