import React from "react";
import Header from "./Header";
import Footer from "./footer";
import "./HomeLayout.css"
const Home = ({ children }) => {
    return (


        <div className="home-container">
            <Header></Header>
             <div style={{ height: "1620px" }}> 
                {children}  

            </div>
            <Footer></Footer>

        </div>


    )

}
export default Home;

