import React from "react";
import "./footer.css"

function Footer()
{   const date=new Date().getFullYear();
    return <h1 className="footer">Copyright © {date}</h1>
};

export default Footer;

