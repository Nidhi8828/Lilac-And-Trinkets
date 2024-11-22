// import React from 'react'
// import "../../Homepage/homepage.js"
// import { useSelector } from "react-redux";


// const Header = () => {
//     const { user, loading, isAuthenticated } = useSelector((state) => state.user);
//     return (
//         <>
//                 {/* <div style={{ marginBottom: '1300px' }}> */}
//                     <div className="header1">
//                         <h1 className="character jumpanimation">Lilac&Trinkets</h1>
//                         <div>
//                             <ul>
//                                 <li><a href="./" className="notextdec">Home</a></li>
//                                 <li><a href="./products" className="notextdec">Products</a></li>
//                                 <li><a href="./aboutus" className="notextdec">About Us</a></li>
//                                 {!isAuthenticated && (
//                                 <li><a href="./login" className="notextdec  ">Login</a></li>
//                                 )}
//                                 {isAuthenticated && (
//                                     <li><a href="./account" className="notextdec">{user.name}</a></li>
//                                 )}
//                                 <li><a href="./search" className="notextdec"><i class="fa-solid fa-magnifying-glass black-text"></i></a></li>
//                                 <li><a href="./cart" className="notextdec"><i class="fa-solid fa-cart-shopping black-text"></i></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div style = {{backgroundColor : 'grey', height : '1px'}}>
//                     </div>
//         </>
//     )
// }

// export default Header







import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../actions/userAction"; // Import the logout action
import { useAlert } from "react-alert"; // Alert for success notification
import "./Header.css"
const Header = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate(); // To navigate to the login page after logout

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
    alert.success("Logged out successfully!");
    navigate("/login"); // Redirect to the login page
  };

  return (
    <>
      <div className="header1">
        <h1 className="character jumpanimation">Lilac&Trinkets</h1>
        <div>
          <ul>
            <li>
              <Link to="/" className="notextdec">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="notextdec">
                Products
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="notextdec">
                About Us
              </Link>
            </li>
            {isAuthenticated && user ? (
  <li>
    <Link to="/account" className="notextdec">
      {user.name}
    </Link>
  </li>
) : (
  <li>
    <Link to="/login" className="notextdec">
      Login
    </Link>
  </li>
)}

            {isAuthenticated && (
              <>
                <li>
                  <Link to="/account" className="notextdec">
                    {user?.name}
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </li>
              </>
            )}
            <li>
              <Link to="/search" className="notextdec">
                <i className="fa-solid fa-magnifying-glass black-text"></i>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="notextdec">
                <i className="fa-solid fa-cart-shopping black-text"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ backgroundColor: "grey", height: "1px" }}></div>
    </>
  );
};

export default Header;
