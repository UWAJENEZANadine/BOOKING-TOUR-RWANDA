import React from 'react';
import logo from "../assets/2.PNG";
import "./header.css";
const Header = () => {
    return (
        <div className="container-logo">
            <img src={logo} />
            <div className="nav-bar">
                <a href="/contact">Contact </a>
                <a href="/gallelly">Gallelly </a>
                <a href="/tours">Tours</a>
                <a href="/Aboutus">About us </a>
                <a href="/home">Home </a>
               

            </div>

        </div>

    )
}
export default Header;