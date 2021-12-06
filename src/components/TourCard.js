import React, { useState } from "react";
import picture from "../assets/img/7.jpg"
import {Drawer} from "antd"
import "antd/dist/antd.css"
import SingleTour from "./SingleTour";

const TourCard = ({data})=> {
    const [drawerVisible,setDrawerVisible]=useState(false);
    const handleClickDrawerVisible =()=>{
        setDrawerVisible(true);
    }
    const closerDrawerVisible =()=>{
        setDrawerVisible(false);
    }
    
    return (
        <>
        <Drawer title="Basic Drawer" placement ="right" visible={drawerVisible} width={800} onClose={()=>closerDrawerVisible()}>
            <SingleTour data={data}/>
        </Drawer>
        <div className="TourCard-container">
            <img src={data.images[0]} width="50%"></img>
            <div style={{
                background: "whitesmoke", width: "50%", height: "100%", float: "right",
                textAlign: "center", padding: "20px"
            }}>
                <h3 style={{color:"rgba(138, 95, 10, 0.925)", fontsize:"65px"}}>{data.title}</h3>
                <p style={{ fontSize: "18px", color: "black", marginBottom: "10px" }}>{data.description}</p>
                <span style={{ display: "flex", justifyContent: "space-between", marginTop:"20px", fontWeight:"700"}}>
                    <label>Date Scheduled <br />
                        {data.dueDate}</label>
                    <label>Due Date Scheduled <br />
                        {data.dateScheduled}</label>
                        <label>Available Seats <br/>
                  {data.seats }
                    
                </label>

                </span>
                <a href="#" ><button onClick= {()=>handleClickDrawerVisible()}>Read more... </button> </a> 
                
            </div>

        </div>
        </>


    )
}
export default TourCard;