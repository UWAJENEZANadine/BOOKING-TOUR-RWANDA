import React, { useState } from 'react';
import logo from "../assets/2.PNG";
import "./header.css";
import { Modal, Form, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom"
const Header = () => {
    const [visible, setVisible] = useState(false);
    const onFinish = (values) => {
        console.log(values)
        localStorage.setItem("userLogedIn", true);
        navigate("/dash/NewTour")
    };
    const navigate = useNavigate();
    return (
        <>
            <Modal visible={visible}
                width="40%"
                onOk={() => setVisible(true)}
                onCancel={() => setVisible(false)}
            >
                <h1>Signin Form</h1>
                <Form onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
                        <Input type="email" />

                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                        <Input type="password" />

                    </Form.Item>
                    <Button htmlType="submit" onClick={() => {


                    }}>Login</Button>
                </Form>

            </Modal>
            <div className="container-logo">
                <img src={logo} />
                <div className="nav-nav">


                    <div className="nav-bar">
                    <a href="#" onClick={() => setVisible(true)}>signIn</a>
                        <a href="/contact">Contact </a>
                        <a href="/gallelly">Gallelly </a>
                        <a href="/tours">Tours</a>
                        <a href="/Aboutus">About us </a>
                        <a href="/home">Home </a>
                       


                    </div>
                </div>

            </div>
        </>

    )
}
export default Header;