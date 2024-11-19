// import React from "react";
// import "./footer.css"

// function Footer()
// {   const date=new Date().getFullYear();
//     return <h1 className="footer">Copyright © {date}</h1>
// };

// export default Footer;




// import React from "react";
// import "./footer.css";

// function Footer() {
//     const date = new Date().getFullYear();
//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <h2>Contact Us</h2>
//                 {/* <p>Email: info@example.com</p> */}
//                 <p>Phone: (123) 456-7890</p>
//                 <p>Follow us on social media:</p>
//                 <div className="social-links">
//                     <a href="#" className="social-link">Facebook</a>
//                     <a href="#" className="social-link">Twitter</a>
//                     <a href="#" className="social-link">Instagram</a>
//                 </div>
//             </div>
//             <div className="footer-bottom">
//                 <p>Copyright © {date} Lilac And Trinkets. All Rights Reserved.</p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;






import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        {/* <a href="#" target="_blank">
          <i className="fab fa-google-plus-g"></i>  
        </a> */}
        <a href="#" target="_blank">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">News</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Our Team</a>
      </div>
      <div className="copyright">
        Copyright ©2024 Lilac And Trinkets
      </div>
    </footer>
  );
}

export default Footer;