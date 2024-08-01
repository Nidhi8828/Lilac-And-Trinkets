
import './App.css';
import Home from "./component/Homepage/Home.js"
import Header from "./component/layout/Header/Header.js"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebFont from "webfontloader"
import React from "react";
import Profile from "./component/User/Profile";
import Layout from "./component/layout/layout.js"
import Loader from "./component/layout/Loader/Loader.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Product.js"
import Search from "./component/Product/Search.js"
import AboutUs from "./component/AboutUs/AboutUs.js"
import Cart from "./component/Cart/Cart.js"
import LoginSignUp from './component/User/LoginSignUp.js';
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import { DataGrid } from '@material-ui/data-grid';
import Shipping from './component/Cart/Shipping.js';
// import OrderSuccess from "./component/Cart/OrderSuccess";
import ConfirmOrder from "./component/Cart/ConfirmOrder";



function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families : ["Playfair Display", "serif","Times New Roman"]
      } //fonts should load after page is loaded so useEffect hook is used, load function of webfont is used to load  the fonts, an object is passed to load function
    })
  }, []);

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Layout/>} >
      <Route exact path="/" element = {<Home/>} />
      {/* <Route exact path="/sad" element = {<Loader/>} /> */}
      <Route exact path="/product/:id" element = {<ProductDetails/>} />
      <Route exact path="/products" element = {<Products/>} />
      <Route exact path="/search" element = {<Search/>} />
      <Route exact path="/login" element = {<LoginSignUp/>} />
      <Route exact path="/about" element = {<AboutUs/>} />
      <Route path="/products/:keyword" element={<Products />} />
      <Route exact path="/cart"  element={<Cart/>} />
      <Route exact path="/account"  element={<Profile/>} />
      <Route exact path="/login/shipping" element={<Shipping/>} />
      {/* <Route exact path="/success" element={<OrderSuccess/>} /> */}
      <Route exact path="/orders" element={<MyOrders/>} />
      <Route exact path="/orders" element={<MyOrders/>} />
      <Route exact path="/order/confirm" element={<ConfirmOrder/>} />
      <Route exact path="/order/:id" element={<OrderDetails/>} />

      </Route>
      </Routes>   
    </Router>
  );
}

export default App;
