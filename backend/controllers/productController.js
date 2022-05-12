const Product = require("../models/productModel");

//Create product

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//Get All Product
exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({
    success: true,
    products,
  });
};

//Update Product--Admin

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not found",
    });
  }
  
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    
    });
    res.status(200).json({
      success:true,
      product
    })
  
  
};

//delete product --admin
exports.deleteProduct=async(req,res,next)=>{
  const product=await Product.findById(req.params.id)
  if(!product)
  {
    return res.status(500).json({
      success:false,
      message:"Product Not found"
    })
  }
  await product.remove();
  res.status(200).json({
    success:true,
    message:"Product deleted Successfully"
  })
}

//get product detalis
exports.getProductDetails=async(req,res,next)=>{
  const product=await Product.findById(req.params.id)
  if(!product)
  {
    return res.status(500).json({
      success:false,
      message:"Product not found"
    })
  }
  res.status(200).json({
    success:true,
    product
  })

}
