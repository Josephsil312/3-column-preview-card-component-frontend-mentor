import React from 'react'
import './card.css'
import sedan from './images/icon-sedans.svg'
import suvs from './images/icon-suvs.svg'
import luxury from './images/icon-luxury.svg'
const Card = () => {
    return (
        <>

            <div className="container">
                <div className="box1">
                    <img src={sedan} alt="" className="logo1" />
                    <h1 className="heading">
                        SEDANS
                    </h1>
                    <p className="para">
                        Choose a sedan for it's affordability and excellence fuel economy. Ideal for cruising in the city or on your next road trip.
                    </p>
                    <button className="btn1">Learn More</button>
                </div>
                <div className="box2">
                    <img src={suvs} alt="" className="logo2" />
                    <h1 className="heading">
                        SUVS
                    </h1>
                    <p className="para">
                        Cruise in the est car brands without the bloathed prices.Enjoy the enhanced comfort of a luxury rental and arrive in style.

                    </p>
                    <button className="btn2">Learn More</button>
                </div>
                <div className="box3">
                    <img src={luxury} alt="" className="logo3" />
                    <h1 className="heading">
                        LUXURY
                    </h1>
                    <p className="para">
                        Take an SUV for it's spacious interior,power and versatility,perfect for your next family vacation and off-road adventures.
                    </p>
                    <button className="btn3">Learn More</button>
                </div>
            </div>
        </>
    )
}

export default Card