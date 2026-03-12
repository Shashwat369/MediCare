const Product = require("../model/Products")


// create new product

const createProduct = async (req ,res)=>{

try{

}
catch(err){
    res.status(400).json({ error: "Error creating product: " + err.message })
}


}

module.exports = {
    createProduct
}