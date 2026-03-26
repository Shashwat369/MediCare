const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  // 1. Destructure the new seller fields from req.body
  const { name, email, password, role, shopName, shopLicense } = req.body;

  try {
    // Validation of standard fields
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // --- NEW: Strict Validation for Sellers ---
    if (role === "seller") {
      if (!shopName || !shopLicense) {
        return res
          .status(400)
          .json({ message: "Shop Name and License are required for Sellers" });
      }
    }
    // ------------------------------------------

    const userExists = await User.findOne({ email });

    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Create the user with conditional seller data
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
      shopName: role === "seller" ? shopName : undefined,
      shopLicense: role === "seller" ? shopLicense : undefined,
      isVerified: role === "seller" ? false : true, // Sellers default to false
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
        message: role === "seller" 
          ? "Account created! Please wait for admin verification." 
          : "Account created successfully!",
      });
    } else {
      res.status(400).json({ message: "Invalid user data received" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body; // Removed 'role' from here, we trust the DB role, not the frontend request
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // --- NEW: Check for seller verification status ---

    if(user.role === "seller" && user.isVerified === false) {
      return res.status(403).json({ 
        message: "Your seller account is still pending admin verification. Please try again later." 
      });
    }
    // ----------------------------------------------

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    if (user) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: token,
        message: "Login successful!",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser };