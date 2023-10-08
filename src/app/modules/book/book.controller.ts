import { NextFunction, Request, Response } from "express";
import { BookSerice, getUserByIdFromDb } from "./book.service";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { ...data } = req.body;

  const book = await BookSerice.create(data);
  res.status(200).json({
    status: "success",
    data: book,
  });
};

const getBooksFromDb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { genre } = req.params;
  const user = await BookSerice.getBooksFromDb(genre);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

const getBooksFromDbByGenreAndPublishedBy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const { genre, publishedBy } = req.params;
  const user = await BookSerice.getBooksFromDbByGenreAndPublishedBy();
  res.status(200).json({
    status: "success",
    data: user,
  });
};
const getBooksFromDbByRating = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await BookSerice.getBooksFromDbByRating();
  res.status(200).json({
    status: "success",
    data: user,
  });
};
const updatePrice = async (req: Request, res: Response, next: NextFunction) => {
  const user = await BookSerice.updatePrice();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsersById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDb(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const BookController = {
  getBooksFromDb,
  getBooksFromDbByGenreAndPublishedBy,
  getBooksFromDbByRating,
  updatePrice,
  createBook,
};
