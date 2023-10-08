import { Model } from "mongoose";

export interface IBook {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: { name: string; location: string };
  reviews: [{ user: string; comment: string }];
  rating: number;
  price: string;
}

export interface BookModel extends Model<IBook> {
  booksByRating(): Promise<IBook[]>;
}
