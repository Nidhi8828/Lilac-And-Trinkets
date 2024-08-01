import React, { useEffect } from 'react'
import "./homepage.css"
import "./homepage.js"
import "../layout/Header/Header.js"
import ProductCard from "./ProductCard.js"
import MetaData from "../layout/MetaData"
import { clearErrors, getProduct } from "../../actions/productAction.js"
import { useSelector, useDispatch } from "react-redux"
import Header from '../layout/Header/Header.js'
import Loader from "../layout/Loader/Loader.js"
import {useAlert} from "react-alert"

const Home = (() => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector((state) => state.products
  );


  useEffect(() => {

    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert])

  return (
    <>
        {loading ? (<Loader/>) : <>
    <MetaData title="Lilac&Trinkets" />
    <div className="slider1">
    <div className="slider">
    </div>
    <div style={{ marginTop: '45px' }}>
    <p className="bright-text">Welcome to Lilac&Trinkets</p>
    </div>
    </div>
    <div className="best">Featured Products
    </div>
    <div className="container" id="container">
        {/* <Product product= {product} />
        <Product product= {product} />
        <Product product= {product} />
        <Product product= {product} />
        <Product product= {product} /> */}
        {products && products.map((product) => (
          <ProductCard product={product} />
        ))}
    </div>
    </>}
    </>
  )
}
)

export default Home