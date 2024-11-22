import React, { useEffect, useRef, useState } from "react";
import "./homepage.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userAction";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { loading, error, products } = useSelector((state) => state.products);

  const sliderRef = useRef(null);
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const updateSlider = () => {
      if (sliderRef.current && textRef.current) {
        sliderRef.current.style.backgroundImage = `url('${images[currentIndex]}')`;
        textRef.current.innerText = texts[currentIndex];
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    const interval = setInterval(updateSlider, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images, texts]);

  const handleLogout = () => {
    dispatch(logout());
    alert.success("Logged out successfully!");
    navigate("/login");
  };
  

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
          {/* <div className="logout-container">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div> */}
        </>
      )}
    </>
  );
};

export default Home;
