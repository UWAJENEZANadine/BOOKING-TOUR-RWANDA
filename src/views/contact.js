import React from "react";
import logo from "../assets/img/locatio.jpg";
import logo1 from "../assets/img/call.png";
import logo2 from "../assets/img/inox.jpg";
import HomeLayout from "../components/HomeLayout";
import { TwitterOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";

const Contact = () => {
    return (
        <HomeLayout >
            <div className="contact-container">
                <div className="cont-container">
                    <h2>Contact us</h2>
                    <p>you can find us by contact us on my phone or by text us on my email </p>
                    <div className="row">
                        <div className="col1">
                            <img src={logo}></img>
                            <p> kigali city
                                at Nyarugenge</p>
                            <br /> <br />
                            <img src={logo1}></img>
                            <p style={{ margin: "20px 0px 0px 10px" }}> +250786774605</p><br /> <br />
                            <img src={logo2}></img>
                            <p style={{ margin: "15px 0px 0px 10px" }}> feel free to text us</p>
                        </div>
                        <div className="col2">
                            <h1>Send Message</h1>
                            <input placeholder="Type your full name" required></input><br />
                            <hr />
                            <input placeholder="Type your email" required></input><br />
                            <hr />
                            <input placeholder="Text us" required></input><br />
                            <hr />
                            <a href="./home">send</a>
                        </div>

                    </div>

                </div>

            </div>
            <div className="other-container">
                <h1>Other Way to contact us</h1>
                <hr className="header-style"/>
                <div className="others-container">
                    <div>
                        <h6>Email</h6>
                        <p>marketing@gmail.com</p>
                        <p>info@rdb.com</p>

                    </div>
                    <div>
                        <h6>Adress</h6>
                        <p>Rwanda Development Board (RDB)</p>
                        <p>KG 220 St, Kigali,</p>
                        <p>Nyarugenge | Kigali | Rwanda</p>
                    </div>
                   
                </div>
                <hr />
                <div className="icons">
                    <h6>Social media</h6>
                  
                    <a href="https://twitter.com/UWAJENEZANADIN4"><TwitterOutlined className="icon-style" style={{fontSize: '7em'}}  /></a>
                    <a href="https://www.linkedin.com/in/uwajeneza-nadine-9686091b6/"><LinkedinOutlined className="icon-style" style={{fontSize: '7em'}} /></a>
                    <a href="https://www.instagram.com/"><InstagramOutlined className="icon-style" style={{fontSize: '7em'}} /></a>
                    <a href="https://www.facebook.com/"><FacebookOutlined className="icon-style" style={{fontSize: '7em'}} /></a>

                </div>

            </div>

        </HomeLayout>
    )
}
export default Contact;