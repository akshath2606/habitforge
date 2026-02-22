import authRoutes from "./routes/authRoutes.js";
import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();


app.get("/", (req,res) =>{
    res.send("HabitForge API Running!")
})

app.use("/api/auth", authRoutes);

const port = 5000;
app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`)

})
console.log("MONGO_URI:", process.env.MONGO_URI);

