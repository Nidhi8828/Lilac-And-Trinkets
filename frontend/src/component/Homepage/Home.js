import React, { useEffect, useRef, useState } from "react";
import "./homepage.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const sliderRef = useRef(null); // Ref for the slider element
  const textRef = useRef(null); // Ref for the text element
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index

  const images = [
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?cs=srgb&dl=pexels-rebrand-cities-1367272.jpg&fm=jpg",
  ];

  const texts = [
    "Bringing small businesses to your doorstep",
    "Empowering homemakers",
    "Encouraging creativity",
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  useEffect(() => {
    // Update the slider background and text
    const updateSlider = () => {
      if (sliderRef.current && textRef.current) {
        sliderRef.current.style.backgroundImage = `url('${images[currentIndex]}')`;
        textRef.current.innerText = texts[currentIndex];
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
      }
    };

    // Set interval to update the slider every 4 seconds
    const interval = setInterval(updateSlider, 4000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [currentIndex, images, texts]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Lilac&Trinkets" />
          <div className="slider1">
            <div ref={sliderRef} className="slider"></div>
            <div style={{ marginTop: "45px" }}>
              <p ref={textRef} className="bright-text">
                Welcome to Lilac&Trinkets
              </p>
            </div>
          </div>
          <div className="best">Featured Products</div>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
