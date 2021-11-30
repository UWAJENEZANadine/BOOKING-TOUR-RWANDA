import React from "react";
import allToursData from "../assets/constants/tours.json"
import HomeLayout from '../components/HomeLayout'
import TourCard from '../components/TourCard'


const ToursView = () => {
    return (
        <HomeLayout>
                <div className="tours-container">
                   
                {
                    allToursData.map((data)=>(<TourCard data={data}/>))
                 
                }
                
                </div>
                
                
                   
           

        </HomeLayout>

    )

}
export default ToursView;