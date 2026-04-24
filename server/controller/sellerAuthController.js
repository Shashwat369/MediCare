const Seller = require("../model/Seller")
const bcrypt = require("bcryptjs")
const jwt  = require("jsonwebtoken")


const registerSeller = async (req,res) =>{
    const { name, email, password, shopName, shopLicense } = req.body;
    try {
        if(!name || !email || !password || !shopName || !shopLicense){
            return res.status(400).json({ message : "All fields are required"})
        }

        const existingSeller = await Seller.findOne({ email})
        if(existingSeller){
            return res.status(400).json({ message : "Seller already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newSeller = new Seller({
            name,
            email,
            password : hashedPassword,
            shopName,
            shopLicense
        })
        res.status(201).json({
      message: "Seller account created! Please wait for admin verification.",
    });


    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

const loginSeller = async(req, res) =>{
    const { email , password , role} = req.body
    try{
        if(!email || !password || !role){
            return res.status(400).json({ message : "All fields are required"})
        }

        const seller = await Seller.findOne({ email });
        if(!seller){
            return res.status(400).json({ message : "Seller not found"});
        }

        if(seller.isVerified === false){
            return res.status(403).json({ message : "Seller account is not verified yet"});
        }

        const isMatch  = await bcrypt.compare(password, seller.password);
        
        if(!isMatch){
            return res.status(400).json({ message : "Invalid credentials"});
        }

        const token = jwt.sign({id : seller._id, role : "seller"}, process.env.JWT_SECRET, { expiresIn : "30d"}
        );

        res.status(200).json({ token, seller : { id : seller._id, name : seller.name, email : seller.email, shopName : seller.shopName }});


    }catch(err){
        res.status(500).json({message : err.message})

    }
}