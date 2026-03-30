const express = require("express");
const router = express.Router();

const {
  getMedicines,
  getMedicineById,
  addMedicine,
} = require("../controller/medicineController");

// Route: GET /api/medicines
router.get('/', getMedicines);

// Route: POST /api/medicines
router.post('/', addMedicine);

// --- NEW Route: GET /api/medicines/:id ---
router.get('/:id', getMedicineById);

module.exports = router;
