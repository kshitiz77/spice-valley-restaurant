import React from 'react'
import {Link, Route } from 'react-router-dom'
import Contact from './Contact'
const Prices = () => {

    const orderNow = () =>{
        <Route path="/Contact">
            <Contact />
        </Route>
    }

    return (
        <div className="prices">
        <div className="prices_container">
            <div className="price_inside">
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/mashroom butter masala.jpeg" alt=""/>
                </div>
                <h3 className="price_heading">Mashroom Butter Masala</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/matarmashroom.jpg" alt=""/>
                </div>
                <h3 className="price_heading">Matar Mashroom</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/chillimashroom.jpeg" alt=""/>
                </div>
                <h3 className="price_heading">Chilli Mashroom</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/mashroommanchurian.jpeg" alt=""/>
                </div>
                <h3 className="price_heading">Mashroom Manchurian</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/chilli paneer.jpeg" alt=""/>
                </div>
                <h3 className="price_heading">Chilli Paneer</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/matarpaneer.jpg" alt=""/>
                </div>
                <h3 className="price_heading">Matar Paneer</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/palakpaneer.jpeg" alt=""/>
                </div>
                <h3 className="price_heading">Palak Paneer</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/shahipaneer.jpg" alt=""/>
                </div>
                <h3 className="price_heading">Shahi Paneer</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/daalmakhni.jpg" alt=""/>
                </div>
                <h3 className="price_heading">Daal Makhni</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/daaltadka.jpeg" alt=""/>
                </div>
                <h3 className="price_heading">Daal Tadka</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            <div className="price">
                <div className="recipies_img">
                        <img src="/img/chilli patato.jpeg" alt=""/>
                </div>
                <h3 className="price_heading">Chilli Patato</h3>
                <p className="price_text">Spice Valley is a casual dining restaurant serving a variety od delicious preparations.</p>
                <p className="prices_rs">250rs.</p>
                <button><Link to="/Contact" class="cart" onClick={orderNow}>Order Now</Link></button>
            </div>
            </div>
        </div>   
        </div>
    )
}

export default Prices
