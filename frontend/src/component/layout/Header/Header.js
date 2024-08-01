import React from 'react'
import "../../Homepage/homepage.js"
import { useSelector } from "react-redux";


const Header = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    return (
        <>
                {/* <div style={{ marginBottom: '1300px' }}> */}
                    <div className="header1">
                        <h1 className="character jumpanimation">Lilac&Trinkets</h1>
                        <div>
                            <ul>
                            <li><a href="./products" className="notextdec">Products</a></li>
                                <li><a href="./about" className="notextdec">About Us</a></li>
                                {!isAuthenticated && (
                                <li><a href="./login" className="notextdec  ">Login</a></li>
                                )}
                                {isAuthenticated && (
                                    <li><a href="./account" className="notextdec">{user.name}</a></li>
                                )}
                                <li><a href="./search" className="notextdec"><i class="fa-solid fa-magnifying-glass black-text"></i></a></li>
                                <li><a href="./cart" className="notextdec"><i class="fa-solid fa-cart-shopping black-text"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div style = {{backgroundColor : 'grey', height : '1px'}}>
                    </div>
        </>
    )
}

export default Header