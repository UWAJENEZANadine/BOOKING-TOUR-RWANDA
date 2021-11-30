import React from "react";
import HomeLayout from "../components/HomeLayout"
import logo1 from "../assets/img/forest.jpg"
import logo2 from "../assets/img/2.webp"
import logo3 from "../assets/img/3.jpg"
import logo4 from "../assets/img/4.webp"
import logo5 from "../assets/img/5.jpg"
import logo6 from "../assets/img/6.jpg"
import logo15 from "../assets/img/7.jpg"
import logo7 from "../assets/img/forest.jpg"
import logo8 from "../assets/img/img.jpg"
import logo16 from "../assets/img/img.jpg"
import logo9 from "../assets/img/12.jpg"
import logo10 from "../assets/img/13.jpg"
import logo11 from "../assets/img/forest.jpg"
import logo12 from "../assets/img/img11.jpg"
import logo13 from "../assets/img/img.jpg"
import logo21 from "../assets/img/download.jpg"
import logo22 from "../assets/img/back.jpeg"
import logo17 from "../assets/nkend.jpg"
import logo23 from "../assets/girafe.jpg"
import logo18 from "../assets/tour.jpg"
import logo19 from "../assets/img/download (1).jpg"




const Gallelly = () => {
    return (
        <HomeLayout>
            <div className="gallelly-folder">
                <div>

                    <img src={logo1} style={{height:"250px"}}></img>
                    <img src={logo2} style={{height:"250px"}}></img>
                    <img src={logo3} style={{height:"240px"}}></img>
                </div>
                <div>
                    <img src={logo5}  style={{height:"270px"}}></img>
                    <img src={logo4}  style={{height:"270px"}}></img>
                    <img src={logo6} style={{height:"270px"}}></img>
                </div>
                <div>
                    <img src={logo7} style={{height:"280px"}}></img>
                    <img src={logo8} style={{height:"270px"}}></img>
                    <img src={logo9} style={{height:"280px"}}></img>
                </div>
                <div>
                    <img src={logo10} style={{height:"280px"}}></img>
                    <img src={logo11} style={{height:"290px"}}></img>
                    <img src={logo12} style={{height:"280px"}}></img>
                </div>
                <div>
                    <img src={logo21} style={{height:"280px"}}></img>
                    <img src={logo22} style={{height:"280px"}}></img>
                    <img src={logo23} style={{height:"270px"}}></img>
                </div>
            </div>

        </HomeLayout>


    )
}
export default Gallelly;