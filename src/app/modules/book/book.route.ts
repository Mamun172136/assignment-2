import express from "express";
import { BookController, getUsersById } from "./book.controller";
const router = express.Router();

router.get("/booksByGenre/:genre", BookController.getBooksFromDb);
router.post("/createBook", BookController.createBook);

router.get(
  "/booksByGenreAndPublishedBy",
  BookController.getBooksFromDbByGenreAndPublishedBy
);

router.get("/booksByRating", BookController.getBooksFromDbByRating);

router.patch("/updatePrice", BookController.updatePrice);

router.get("/:id", getUsersById);

export default router;
