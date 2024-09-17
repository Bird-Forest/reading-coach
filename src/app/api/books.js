import { createBook, deleteBook, getBook, updateBook } from "@/services/books";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const books = await getBook(id);
        res.status(200).json(books);
      } catch (error) {
        res.status(500).json({ message: "Відбулася помилка" });
      }
      break;
    case "POST":
      try {
        const newBook = await createBook(req.body);
        res.status(201).json(newBook);
      } catch (error) {
        res.status(500).json({ message: "Відбулася помилка" });
      }
      break;
    case "PUT":
      try {
        const updatedBook = await updateBook(id, req.body);
        res.status(200).json(updatedBook);
      } catch (error) {
        res.status(500).json({ message: "Відбулася помилка" });
      }
      break;
    case "DELETE":
      try {
        await deleteBook(id);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ message: "Відбулася помилка" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
