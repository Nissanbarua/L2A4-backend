import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  author: { type: String, required: true },
  genre: { type: String },
  isbn: { type: String, unique: true },
  description: { type: String },
  copies: { type: Number, required: true },
  available: { type: Boolean, default: true },
});

export const Book = mongoose.model("Book", bookSchema);
