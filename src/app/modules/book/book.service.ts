import { IBook } from "./book.interface";
import Book from "./book.model";

const create = async (payload: IBook): Promise<IBook> => {
  const book = new Book(payload);

  await book.save();
  return book;
};

export const getUserByIdFromDb = async (
  payload: string
): Promise<IBook | null> => {
  const book = await Book.findOne({ id: payload });
  return book;
};

const getBooksFromDb = async (payload: string): Promise<IBook[] | null> => {
  const users = await Book.find({ genre: { $eq: payload } });
  return users;
};

const getBooksFromDbByGenreAndPublishedBy = async (): Promise<
  IBook[] | null
> => {
  const users = await Book.find({
    genre: { $eq: "Sci-Fi" },
    "publisher.name": { $eq: "Roli Books" },
  });
  return users;
};

// const getBooksFromDbByRating = async (): Promise<IBook[] | null> => {
//   const users = await Book.find({
//     rating: { $gte: 4.0 },
//   });
//   return users;
// };
const getBooksFromDbByRating = async (): Promise<IBook[] | null> => {
  const books = Book.booksByRating();

  return books;
};

const updatePrice = async (): Promise<any> => {
  try {
    const updateResult = await Book.updateMany(
      { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
      [
        {
          $set: {
            price: {
              $toInt: "$price",
            },
          },
        },
      ],
      { new: true }
    );

    if (updateResult.modifiedCount) {
      const updatedBooks = await Book.find({ publicationYear: { $gt: 2020 } });
      return updatedBooks;
    } else {
      return null;
    }
  } catch (error) {
    // Handle errors
    console.error("Error updating prices:", error);
    return null;
  }
};

export const BookSerice = {
  getBooksFromDb,
  getBooksFromDbByGenreAndPublishedBy,
  getBooksFromDbByRating,
  updatePrice,
  create,
};
