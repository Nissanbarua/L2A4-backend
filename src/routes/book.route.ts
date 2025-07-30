import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/book.controller";

export const bookRoutes = express.Router();

bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:id", getBookById);
bookRoutes.post("/", createBook);
bookRoutes.put("/:id", updateBook);
bookRoutes.delete("/:id", deleteBook);
