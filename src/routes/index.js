import React, { useEffect } from 'react';
import Home from "../views/home";
import AboutUs from '../views/Aboutus';
import Gallelly from '../views/gallelly';
import Contact from '../views/contact';
import ToursView from '../views/tours';
import { Routes, Route } from "react-router-dom";
import AllTours from '../views/Dashboard/allTours'
import DashLayout from '../components/dashboardLayout'
import NewTourView from '../views/Dashboard/NewTour'


const isUserLogedIn = localStorage.getItem("userLogedIn");
const Index = () => {
    return (
        <>
            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<AboutUs />} path="/Aboutus"></Route>
                <Route element={<Gallelly />} path="/gallelly"></Route>
                <Route element={<Contact />} path="/contact"></Route>
                <Route element={<ToursView />} path="/tours"></Route>



            </Routes>
           
                {
                    isUserLogedIn?(
                        <DashLayout>
                            <Routes>
                                <Route path="/dash/NewTour" element={<NewTourView />}></Route>
                                <Route path="/dash/allTours" element={< AllTours />}></Route>
                            </Routes>

                        </DashLayout>  )
                   :(<></>)
                    }
                    </>
    )}


            export default Index;

