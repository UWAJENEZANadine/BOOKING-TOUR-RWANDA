import React from "react";
import HomeLayout from "../components/HomeLayout"
import logo from "../assets/img/download.jpg"
import logo1 from "../assets/img/download.jpg"
import logo2 from "../assets/img/download.jpg"
import logo4 from "../assets/img/download.jpg"

const AboutUs = () => {

    return (
        <HomeLayout>
            <div className="home-log">
                <h1>Rwanda booking tours</h1>

            </div>
            <h1 className="aboutus-containe">Who are we</h1>
            <div className="both-continer">
                <div className="aboutus-container">

                    <p>Beautiful Rwanda Tours is well known for their unique and exciting trips
                        in Rwanda and throughout East Africa. Established by experienced and
                        passionate tourism professionals, Beautiful Rwanda Tours was created
                        after the realization that Rwanda is one of the continent’s finest
                        tourism offerings and a desire to share it with the world!</p>
                </div>

            </div>
            <div className="background-containee">
                <h1>Our Partners</h1>
                <div className="containee">
                    <img src={logo}></img>
                    <p>Perhaps your tour company is just getting started and you
                        have everything you need – except a physical location for
                        your clients to meet you to start your bike tour,
                        walking tour, or any type of tour. Try partnering with
                        a local ice cream shop or pizza parlor.</p>

                </div>
               
            </div>

        </HomeLayout >

    )
}
export default AboutUs;