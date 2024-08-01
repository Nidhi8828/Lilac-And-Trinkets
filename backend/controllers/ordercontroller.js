const Order = require("../models/orderModel");
const Product = require("../models/productmodel");
const errorhandler = require("../util/errorhandler");
const catchAsyncErrors = require("../middleware/catch");

// Create new Order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// get Single Order
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new errorhandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

exports.myOrders = catchAsyncErrors(async (req, res, next) => {

  const orders = await Order.find({ user: req.user._id });

  if (!orders) {
    return next(new ErrorHandler("No orders found for this user", 404));
  }

  res.status(200).json({
    success: true,
    orders,
  });
});


exports.getAllOrders=catchAsyncErrors(async(req,res,next)=>{
  const orders=await Order.find();
  let totalAmount = 0;
  orders.forEach(order => {
    totalAmount+=order.totalPrice;

  });
  res.status(201).json({
    success:true,
    totalAmount,
    orders
  })
})



exports.updateOrder = catchAsyncErrors(async(req,res,next)=>{
  const order = await Order.findById(req.params.id)
  if (!order) {
    return next(new errorhandler("Order not found", 404));
  }

  if(order.orderStatus==="Delivered")
  {
    return next(new errorhandler("You have already delivered that product",400));
  }

  for (const o of order.orderItems) {
    const products = await Product.find({ name: o.productname });
    for (const product of products) {
      product.Stock -= o.quantity;
      await product.save({ validateBeforeSave: false });
    }
  }
// }s
  order.orderStatus="Delivered";
   if(req.body.status==="Delivered")
   {
    order.deliveredAt=Date.now();
   }
   await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success:true,
  })
})

exports.deleteOrder= catchAsyncErrors(async(req,res,next)=>{
  const order = await Order.findById(req.params.id)
  if (!order) {
    return next(new errorhandler("No orders found for this user", 404));
  }
   await order.remove();
  res.status(200).json({
    success: true,
    order,
  });


})
