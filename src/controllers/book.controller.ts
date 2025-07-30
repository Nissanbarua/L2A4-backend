import { Book } from "../models/book.model";
import { Request, Response } from "express";

// get all books
export const getAllBooks = async (req: Request, res: Response) => {
  const books = await Book.find();
  res.json(books);
};

// get single book
export const getBookById = async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

// create new book