const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const mongoose=require('mongoose');
const catchAysncErros=require('../middleware/catchAsyncErrors');
const ApiFeatures = require("../utils/apifeatures");

//Create product

exports.createProduct = catchAysncErros(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//Get All Product
exports.getAllProducts = catchAysncErros(async (req, res) => {
  const apifeature=new ApiFeatures(Product.find(),req.query)
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

//Update Product--Admin

exports.updateProduct = catchAysncErros(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found",404))
  }
  
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    
    });
    res.status(200).json({
      success:true,
      product
    })
  
  
})

//delete product --admin
exports.deleteProduct=catchAysncErros(async(req,res,next)=>{
  const product=await Product.findById(req.params.id)
  if(!product)
  {
    return next(new ErrorHandler("Product Not Found",404))
   
  }
  await product.remove();
  res.status(200).json({
    success:true,
    message:"Product deleted Successfully"
  })
})

//get product detalis
exports.getProductDetails=catchAysncErros(async(req,res,next)=>{
  const product=await Product.findById(req.params.id)
 
  if(!mongoose.Types.ObjectId.isValid(product))
  {
    return next(new ErrorHandler("Product not found",404))
  }
  res.status(200).json({
    success:true,
    product
  })

})
