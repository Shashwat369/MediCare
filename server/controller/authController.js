const User = require("../model/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Validation of all fields
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const userExists = await User.findOne({ email });

    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });


    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        message: "Account created successfully!",
      });
    } else {
      res.status(400).json({ message: "Invalid user data received" });
    }


  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};






module.exports = { registerUser};