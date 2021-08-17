import React from 'react'
import { Link, Route } from 'react-router-dom'
import Prices from './Prices'
const Shop = () => {
    const shopNow = () =>{
        <Route path="/Prices">
            <Prices />
        </Route>
    }
    return (
        <div className="shop">
            <div className="shop-container">
                <div className="shop_text">
                    <h3>Free delivery with </h3> 
                    <h1> delicious order over the 499</h1>
                <div className="shop_btn">
                <Link to="/Prices" class="btn btn-smart" onClick={shopNow}>Shop Now</Link>
                </div>   
                </div>
            </div>
        </div>
        
    )
}

export default Shop
