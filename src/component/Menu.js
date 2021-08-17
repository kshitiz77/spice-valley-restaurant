import React from 'react'
import { Link, Route } from 'react-router-dom'
import Prices from './Prices'
const Menu = () => {
    const viewMore = () =>{
        <Route path="/Prices">
            <Prices />
        </Route>
    }
    return (
        <div className="about">
        <div className="container">
            <div className="row">
                <div className="col-4 p-4">
                    <h3>Our Menu</h3>
                    <h1>Kadhai Paneer</h1>
                    <p>Spice Valley is a casual dining restaurant serving a variety od delicious preparations. A highly-rated place in Pratapgarh, it is praised for its timely service and is nice joint to visit when one is looking to satiate hunger pangs with tasty, hygienic food.</p>
                    <div className="about_btn">
                    <Link to="/Prices" class="btn btn-smart" onClick={viewMore}>View More</Link>
                    </div>
                </div>
                <div className="col-4">
                <div className="about_image">
                    <img src="/img/menu.jpg" alt=""></img>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Menu
