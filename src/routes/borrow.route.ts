import express from "express";
import { borrowBook, getBorrowSummary } from "../controllers/borrow.controller";

export const borrowRoutes = express.Router();

borrowRoutes.post("/:bookId", borrowBook);
borrowRoutes.get("/summaray/all", getBorrowSummary);
