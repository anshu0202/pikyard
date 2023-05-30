const Variant = require("../models/VariantModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


// add Product variant --Admin

exports.addVariant = catchAsyncErrors(async (req, res, next) => {

  console.log("req body is ",req.body);

  const name=req.params.id;

  console.log("name ius ",name)
     
    const {
        price,
        mm,
        Stock
      } = req.body;
      let productVariant = await Variant.findOne({ name,price,mm });
      if (productVariant) {
        return res
          .status(400)
          .json({ success: false, message: "This variant of product already exists" });
      }
    // const variant = await Variant.create({
    //      name,
    //      price,
    //     mm,
    //     Stock
    //   });
  res.status(201).json({
    success: true,
    //  variant,
  });
});

// Get All Variants 
exports.getAllVariants = catchAsyncErrors(async (req, res, next) => {
      const productName=req.params.id
     const variants = await Variant.find({name:productName});
  res.status(200).json({
    success: true,
    variants,
  });
});
