const express=require("express");
const { getAllProducts ,createproduct, updateproduct, getProductDetails, findOneproduct, deleteproduct} = require("../controllers/productcontroller");


const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createproduct); 
// router.route("/product/:id").put(updateproduct);
router.route("/product/:id").get(getProductDetails);
router.route("/productdelete/:id").put(deleteproduct);
router.route("/productfindOne/:id").get(findOneproduct);
module.exports=router;

