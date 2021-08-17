import React from 'react'
import { Route, Link } from 'react-router-dom'
import Contact from './Contact'

const Header = () => {
    const orderNow = () =>{
        <Route path="/Contact">
            <Contact />
        </Route>
    }
    return (
        <div className='banner'>
            <div className="banner_content">
                <div className="container">
                <div className="banner_text">
                    <h3>Order Your Favorites Recipes</h3>
                    <h1>Spice Valley</h1>
                    <p>Over 75 recipes to choose from, you're suee to find the exact mediterranean flavor you're looking for. Stock the fridge with healty snacks, all of our made-from-scratch bases, proteins, toppings, sauces and house drinks.</p>
                    <div className="banner_btn">
                    <Link to="/Contact" class="btn btn-smart" onClick={orderNow}>Order Now</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header