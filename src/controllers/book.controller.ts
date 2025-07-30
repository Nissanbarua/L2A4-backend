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
export const createBook = async (req: Request, res: Response) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

// UpdateBook
export const updateBook = async (req: Request, res: Response) => {
  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updateBook) return res.status(404).json({ message: "Book Not Found" });
  res.json(updateBook);
};

// deleteBook
export const deleteBook = async (req: Request, res: Response) => {
  const deleteBook = await Book.findByIdAndDelete(req.params.id);
  if (!deleteBook) return res.status(404).json({ message: "BOOK NOT FOUND" });
  res.json({ message: "Book Deleted Succesfully" });
};
