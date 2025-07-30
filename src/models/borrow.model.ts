import mongoose from "mongoose";



const borrowSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", require: true },
  quantity: { type: Number, required: true },
  dueDate: { type: Date, required: true },
});

export const Borrow = mongoose.model('Borrow',borrowSchema)