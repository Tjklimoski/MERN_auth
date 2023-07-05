import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Home route");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
