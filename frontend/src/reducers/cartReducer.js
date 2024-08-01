// Importing the ADD_TO_CART constant from the cartconstant file (assuming it's defined there)
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstants";

// Defining the cartReducer function
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Extracting the item from the action payload
            const item = action.payload;

            // Checking if the item already exists in the cart
            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            );

            // If the item already exists in the cart
            if (isItemExist) {
                return {
                    ...state,
                    // Updating the cartItems array by mapping through it
                    cartItems: state.cartItems.map((i) =>
                        // If the product matches the existing one, update the item with the new one
                        i.product === isItemExist.product ? item : i
                    )
                };
            } else { // If the item is not in the cart
                return {
                    ...state,
                    // Adding the new item to the cartItems array
                    cartItems: [...state.cartItems, item]
                };
            }

        case REMOVE_CART_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((i) => i.product !== action.payload),
        };

        case SAVE_SHIPPING_INFO:
        return {
          ...state,
          shippingInfo: action.payload,
        };

        default: // If the action type doesn't match, return the current state
            return state;
    }
};