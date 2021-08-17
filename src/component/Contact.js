import React, { useState } from 'react'
const Contact = () => {

    const [user, setUser] = useState({
            username : " ",
            email : " ",
            contact : " ",
            address : " "
    });
    

    const handleInput = (event) => {
        setUser({
            ...user,[event.target.id] : event.target.value
        })
        
    }
    const submitData = (event) =>{
        event.preventDefault();
        console.log(user)
    }

    return (
        <div className="contact">
            <div className="contact-box">
                <h1> Contact Us</h1>
            </div>
                <form onSubmit={submitData} className="contact-container">
                    <div className="contact-input">
                        <label className="contact-lable">Username : </label>
                        <input type="text"  id="username" value={user.username}
                            onChange={handleInput} placeholder="Enter Your Name"/> 
                    </div>
                    <div className="contact-input">
                        <label>E-mail : </label>
                        <input type="email" id="email" value={user.email}
                            onChange={handleInput} placeholder="Enter Your E-mail" />
                    </div>
                    <div className="contact-input">
                        <label>Contact : </label>
                        <input type="number" id="contact" value={user.contact}
                            onChange={handleInput} placeholder="Enter Your Contact" />
                    </div>
                    <div className="contact-input">
                        <label>Address : </label>
                        <textarea id="address" value={user.address}
                            onChange={handleInput} placeholder="Enter Your Address" />
                    </div>
                    <button className="btn btn-smart">Submit</button>
                </form>
            
        </div>
    )
}

export default Contact