import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { Borrow } from "../models/borrow.model";

// borrow a book
export const borrowBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const { quantity, dueDate } = req.body;

  const book = await Book.findById(bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });

  if (!book.available || book.copies < quantity) {
    return res.status(400).json({ message: "Not enough copies available" });
  }

  // Update copies
  book.copies -= quantity;
  if (book.copies === 0) book.available = false;
  await book.save();

  const borrow = new Borrow({ bookId, quantity, dueDate });
  await borrow.save();

  res.status(201).json({
    message: "Book borrowed successfully",
    borrow,
  });
};

// borrow summary
export const getBorrowSummary = async (req: Request, res: Response) => {
  const summary = await Borrow.aggregate([
    {
      $group: {
        _id: "$bookId",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "book",
      },
    },
    {
      $unwind: "$book",
    },
    {
      $project: {
        _id: 0,
        title: "$book.title",
        isbn: "$book.isbn",
        totalQuantity: 1,
      },
    },
  ]);
  res.json(summary);
};
