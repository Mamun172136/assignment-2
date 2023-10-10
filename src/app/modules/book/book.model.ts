import { Model, Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

const bookSchema = new Schema<IBook, BookModel>({
  title: { type: String, required: true },
  author: { type: [String], required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  rating: { type: Number, required: true },
  price: { type: String, required: true },
});

bookSchema.static("booksByRating", async function booksByRating(): Promise<
  IBook[]
> {
  const books = await this.find({
    rating: { $gte: 4 },
  });

  return books;
});

const Book = model<IBook, BookModel>("Book", bookSchema);
export default Book;
