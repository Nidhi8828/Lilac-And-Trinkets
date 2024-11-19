import {combineReducers, applyMiddleware} from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk"
// import { compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer , productDetailsReducer} from "./reducers/productReducer";
import { orderReducer,orderDetailsReducer,} from "./reducers/orderReducer";
import logger from "redux-logger"

//using redux-toolkit instead of redux core
import {userReducer} from "./reducers/userReducer"
import { cartReducer } from "./reducers/cartReducer";
const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    user:userReducer,
    cart:cartReducer,
    myOrders: orderReducer,
    orderDetails: orderDetailsReducer,
});

// Initial state for the cart reducer
let initialState = {
    cart: {
        // Initializing cartItems with the value retrieved from localStorage, or an empty array if not found
        cartItems: localStorage.getItem("cartItems") 
            ? JSON.parse(localStorage.getItem("cartItems")) // If cartItems exist in localStorage, parse it from JSON
            : [], // If not found in localStorage, initialize cartItems as an empty array
    },
    shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};


const middleware = [thunk];

const store=createStore(reducer,applyMiddleware(thunk,logger));
export default store;
//while working with redux, we need to maintain 3 things - reducer, action and constant...constant is not mandatory but it maintains neatness