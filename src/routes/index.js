import React from 'react';
import Home from "../views/home";
import AboutUs from '../views/Aboutus';
import Gallelly from '../views/gallelly';
import Contact from '../views/contact';
import ToursView from '../views/tours';
import {Routes, Route}from "react-router-dom";

const Index=()=>{
    return(
        
    <Routes>
       <Route element={<Home/>} path="/home"></Route>
       <Route element={<AboutUs/>} path="/Aboutus"></Route>
       <Route element={<Gallelly/>} path="/gallelly"></Route>
       <Route element={<Contact/>} path="/contact"></Route>
       <Route element={<ToursView />} path="/tours"></Route>
       
    </Routes>
    )
}
export default Index;
 
