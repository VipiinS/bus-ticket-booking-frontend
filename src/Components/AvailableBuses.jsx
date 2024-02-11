import React from 'react'
import "./AvailableBuses.css"
import {useNavigate} from 'react-router-dom';
import { FaBus } from "react-icons/fa";


const AvailableBuses = ({buses}) => {
    const navigate = useNavigate();
    if(buses === undefined || buses.length ===0){
        return (
            <>
            <div className='bus-info'>
                <div className='no-buses-error-info red'>
                    No buses found running on the route for the date selected
                </div>

            </div>
            </>
        )
    }
    const handleBusClick=(e)=>{
        setTimeout(()=>{
            navigate("/login")
        },1500)
    }

  return (
    <>
    {buses.map((bus)=>{
        return(
        <div className='bus-info' key={bus.busId} onClick={(e)=>handleBusClick(e)}>
            <div className="top-bar grey">
                <div className='company-bus'>
                    <FaBus color="rgba(255, 255, 255, 0.562)"/>
                    <div className="company">{bus.registrationNumber}</div>
                </div>
                <div className="bus-type">{bus.type}</div>
                <div className="extra-infos">On Time</div>
            </div>
            <div className="bottom-bar bottom-bar-text">
                <div className="left-column flex-col">
                    <div className="time">{bus.departureTime.slice(0,5)}</div>
                    <div className="place">Bus station</div>
                </div>
                <div className="middle-column">
                    <div className="line">.</div>
                    <div className="travel-time">{bus.travelTime.slice(2,6)}</div>
                    <div className="line">.</div>
                </div>
                <div className="right-column flex-col">
                    <div className="time">{bus.destinationTime.slice(0,5)}</div>
                    <div className="place">Bus station</div>
                </div>
                <div className="rightmost-column flex-col">
                    <div className="price">${bus.fare}</div>
                    <div className={`seats-available ${bus.availableSeats>30?"green":"red"}` }>{bus.availableSeats} Seats </div>
                </div>
            </div>

        </div>
        )
    })}
    </>
  )
}

export default AvailableBuses