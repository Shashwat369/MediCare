// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../model/User');

// 1. Verify Token Middleware
const protect = async (req, res, next) => {
  let token;

  // Check if the authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header (Format: "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user from the database (excluding the password) and attach to req.user
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Move on to the actual controller function
    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }
};

// 2. Role-Based Authorization Middleware
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // Check if the logged-in user's role is in the allowed roles array
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: `User role '${req.user.role}' is not authorized to access this route` 
      });
    }
    next();
  };
};

module.exports = { protect, authorizeRoles };