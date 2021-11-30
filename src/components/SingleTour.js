import React from "react";
import "./SingleTour.css";
import allToursData from "../assets/constants/tours.json"
const SingleTour = ({ data }) => {
    return (
        <div className="single-container">
            <h1>{data.title}</h1>
            <div className="container-image">
                <img src={data.images[0]}></img>
                <p>{data.description}</p>
            </div>
             




        </div>

    )
}

export default SingleTour;