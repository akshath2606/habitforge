const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
dotenv.config();
connectDB();

const app = express();


app.get("/", (req,res) =>{
    res.send("HabitForge API Running!")
})

const port = 5000;
app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`)

})
console.log("MONGO_URI:", process.env.MONGO_URI);
