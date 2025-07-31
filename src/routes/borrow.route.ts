import express from "express";
import { borrowBook, getBorrowSummary } from "../controllers/borrow.controller";

export const borrowRoutes = express.Router();

borrowRoutes.post("/borrow/:bookId", borrowBook);
borrowRoutes.get("/borrow-summary", getBorrowSummary);
