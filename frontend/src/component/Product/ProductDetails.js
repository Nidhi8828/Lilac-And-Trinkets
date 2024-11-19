import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartAction.js";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const options = {
    edit: false,
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product?.rating || 0,
    isHalf: true,
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product?.stock <= quantity) return;
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    setQuantity(quantity - 1);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Items added to cart");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product?.name || "Product"} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <Carousel>
              {product?.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>

            <div>
              <div className="detailsBlock-1">
                <h2>{product?.name}</h2>
                <p>Product # {product?._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  ({product?.numofre || 0} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product?.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    onClick={addToCartHandler}
                    disabled={product?.stock < 1}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product?.stock < 1 ? "redColor" : "greenColor"}>
                    {product?.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description :{" "}
                <p>{product?.description || "No description available"}</p>
              </div>

              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {product?.reviews && product.reviews.length > 0 ? (
            <div className="reviews">
              {product.reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
