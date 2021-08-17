import React from 'react'
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-4 p-4">
                        <h3>About Us</h3>
                        <h1>Welcome To Spice Valley</h1>
                        <p>Spice Valley is a casual dining restaurant serving a variety od delicious preparations. A highly-rated place in Pratapgarh, it is praised for its timely service and is nice joint to visit when one is looking to satiate hunger pangs with tasty, hygienic food.</p>
                        <div className="about_btn">
                            <a href="read" className="btn btn-smart">Read More</a>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="about_image">
                        <img src="/img/about.jpg" alt=""></img>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About