import React from "react";
import "./footer.css"
import { TwitterOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";


const Footer = () => {
    return (
        <>
            <div className="footer-footer">
                <div className="useful-links">
                    <h1> Links</h1>

                    <a href="./home">Home </a>
                    <a href="./contact">Contact </a>
                    <a href="./gallelly"> Gallelly</a>
                    <a href="./Aboutus">Aboutus</a>

                </div>
                <div className="socil-media-used">
                    <h1>Follow us on:</h1>

                    <a href="https://twitter.com/UWAJENEZANADIN4"><TwitterOutlined className="icon-style" style={{ fontSize: '3em' }} /></a>
                    <a href="https://www.linkedin.com/in/uwajeneza-nadine-9686091b6/"><LinkedinOutlined className="icon-style" style={{ fontSize: '3em' }} /></a>
                    <a href="https://www.instagram.com/"><InstagramOutlined className="icon-style" style={{ fontSize: '3em' }} /></a>
                    <a href="https://www.facebook.com/"><FacebookOutlined className="icon-style" style={{ fontSize: '3em' }} /></a>

                </div>

            </div>

            <div className="footer-container">

                <h1>&copy; designned by Nadine UWAJENEZA </h1>

            </div>
        </>
    )
}
export default Footer;