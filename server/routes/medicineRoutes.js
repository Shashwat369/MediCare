const express = require("express");
const router = express.Router();
const { protect , authorizeRoles} = require("../middleware/authMiddleware")

const {
  getMedicines,
  getMedicineById,
  addMedicine,
} = require("../controller/medicineController");

// Route: GET /api/medicines
router.get('/', getMedicines);

// --- NEW Route: GET /api/medicines/:id ---
router.get('/:id', getMedicineById);

// Route: POST /api/medicines
router.post('/',protect , authorizeRoles('seller') , addMedicine);


module.exports = router;
