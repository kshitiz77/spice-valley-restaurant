import React from 'react'

function Clients(){

        return (
            <div className="clients">
            <div className="main_container">
                <div className="counter_container">
                    <div className="counter" data-target="20">20</div>
                    <span className="para">Our Employees</span>
                </div>
                <div className="counter_container">
                    <div className="counter" data-target="75">75</div>
                    <span className="para">Our Recipes</span>
                </div>
                <div className="counter_container">
                    <div className="counter" data-target="4500" >4500</div>
                    <span className="para">Satisfied Clients</span>
                </div>
                <div className="counter_container">
                    <div className="counter" data-target="11996">11996</div>
                    <span className="para">Deliveries</span>
                </div>
            </div>
            </div>
        )
    }

        

export default Clients
