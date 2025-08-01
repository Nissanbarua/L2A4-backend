import express from "express";
import cors from "cors";
import { bookRoutes } from "./routes/book.route";
import { borrowRoutes } from "./routes/borrow.route";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://library-frontend-sandy-beta.vercel.app",
      "http://localhost:5173",
    ],
  })
);

app.use("/api/books", bookRoutes);
app.use("/api", borrowRoutes);
app.get("/", (req, res) => {
  res.send("Library API is running");
});

// // Routes
// app.get("/api/books", async (req, res) => {
//   try {
//     // Example dummy data — replace with real DB query
//     res.json([{ title: "Atomic Habits", author: "James Clear" }]);
//   } catch (err) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

export default app;
