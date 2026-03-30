const Medicine = require("../model/Medicine");

// Get medicines


const getMedicines = async (req, res) => {
  try {

    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i', // 'i' means case-insensitive (matches "Para" or "para")
          },
        }
      : {}; // If no keyword is provided, search for everything


    const medicines = await Medicine.find({ ...keyword })
      .populate('sellerId', 'name email shopName'); 
    
    return res.status(200).json({
      success: true,
      count: medicines.length,
      data: medicines
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};


//  Get Medicine by Id

const getMedicineById = async (req, res) => {
  try {
    // We use req.params.id to grab the ID from the URL
    // .populate() pulls in the seller's details so the buyer knows who they are buying from
    const medicine = await Medicine.findById(req.params.id).populate(
      'sellerId',
      'name shopName email'
    );

    if (!medicine) {
      return res.status(404).json({ success: false, message: 'Medicine not found' });
    }

    return res.status(200).json({
      success: true,
      data: medicine,
    });
  } catch (error) {
    // If the ID is completely malformed (not a valid MongoDB ObjectId), it throws a CastError
    if (error.name === 'CastError') {
      return res.status(404).json({ success: false, message: 'Medicine not found' });
    }
    return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Add Medicine (for sellers)

const addMedicine = async (req, res) => {
  try {
    const { 
      name, 
      company, 
      category, 
      price, 
      oldPrice, 
      image, 
      stock, 
      shopName, 
      sellerId 
    } = req.body;
    
    if (!name || !company || !category || !price || !shopName || !sellerId) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields (name, company, category, price, shopName, sellerId)' 
      });
    }

    const medicine = await Medicine.create({
      name,
      company,
      category,
      price,
      oldPrice,
      image,
      stock: stock || 10,
      shopName,
      sellerId
    });

    return res.status(201).json({
      success: true,
      message: 'Medicine added successfully!',
      data: medicine
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

module.exports = {
    getMedicines,
    getMedicineById,
    addMedicine,
}