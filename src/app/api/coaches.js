import {
  createCoach,
  getCoach,
  getAllCoaches,
  updateCoach,
  deleteCoach,
} from "@/services/coaches";
// import { getCoach, getAllCoaches, createCoach, updateCoach, deleteCoach } from '../../api/coaches';

export default async function handler(req, res) {
  const { method } = req;
  const { id, userId } = req.query;

  switch (method) {
    case "GET":
      if (id) {
        try {
          const coach = await getCoach(id);
          res.status(200).json(coach);
        } catch (error) {
          res.status(500).json({ message: "Відбулася помилка" });
        }
      } else if (userId) {
        try {
          const coaches = await getAllCoaches(userId);
          res.status(200).json(coaches);
        } catch (error) {
          res.status(500).json({ message: "Відбулася помилка" });
        }
      }
      break;
    case "POST":
      try {
        const newCoach = await createCoach(req.body, userId);
        res.status(201).json(newCoach);
      } catch (error) {
        res.status(500).json({ message: "Відбулася помилка" });
      }
      break;
    case "PUT":
      try {
        const updatedCoach = await updateCoach(id, req.body);
        res.status(200).json(updatedCoach);
      } catch (error) {
        res.status(500).json({ message: "Відбулася помилка" });
      }
      break;
    case "DELETE":
      try {
        await deleteCoach(id);
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
