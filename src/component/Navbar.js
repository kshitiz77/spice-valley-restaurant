import React from 'react'
import{
    Link
} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_content">
                <div className="logo"><img src="/img/logo.png" alt=""></img></div>
                    
                    <nav>
                    <ul className="navbar_menu">
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Menu">Menu</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li> 
                        <li><Link to="/Prices">Prices</Link></li>
                    </ul>
                    </nav>
                    
                   
                    
            </div>
        </nav>
                
    )
}

export default Navbar
