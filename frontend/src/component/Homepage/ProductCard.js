import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const ProductCard = ({product}) => {

  const options = {
    edit : false ,/* review stars are not selected*/
    color : "rgba(20,20,20,0.1)",
    activeColor : "tomato",
    size : window.innerwidth < 600 ? 20 : 25, /*adjust size of stars according to size of window*/
    value: product.rating, /*2.5 stars are active*/
    isHalf: true, /*shows 2.5 stars instead of 2*/
   }
 
  return (
     <Link to={`/product/${product._id}`}>
      <div className="productCard">
      <img src={product.images[0].url} alt={product.name}/>
       <p> {product.name} </p>
        <div>
            <ReactStars {...options} />
        </div>
        <div>
            <span>({product.numofre} Reviews)</span> {/*static value */}
        </div>
        <span>{`₹${product.price}`}</span>
      </div>
     </Link>
  )
}

export default ProductCard