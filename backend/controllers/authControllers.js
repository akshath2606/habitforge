import User from "../models/user.js";

export const loginUser = (req, res) => {
    console.log("Login hit");
    res.json({ message: "Login working" });
};


export const registerUser = async (req, res) => {
  try {
    // 1. Extract data
    const { name, email, password } = req.body;

    // 2. Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 3. Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 4. Create user
    const user = await User.create({
      name,
      email,
      password, // will be hashed by schema middleware
    });

    // 5. Send success response
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "User registered successfully",
    });

} catch (error) {
  console.log("Register error:", error);
  res.status(500).json({ message: error.message });
}
};