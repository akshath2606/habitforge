import express from "express";
import dotenv from "dotenv";

console.log("SERVER FILE EXECUTED");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Express + dotenv working");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Express listening on ${PORT}`);
});