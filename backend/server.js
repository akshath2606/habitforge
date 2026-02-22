import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";   // Make sure filename matches exactly
import authRoutes from "./routes/authRoutes.js";

// Load environment variables FIRST
dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Root test route
app.get("/", (req, res) => {
  res.send("HabitForge API is running...");
});

const PORT = process.env.PORT || 8000;

// Start server AFTER DB connects
const startServer = async () => {
  try {
    // Debug check (remove later if you want)
    console.log("MONGO_URI:", process.env.MONGO_URI);

    await connectDB();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Server failed to start:", error.message);
    process.exit(1);
  }
};

startServer();