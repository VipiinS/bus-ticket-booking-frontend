import React, { useEffect } from 'react'
import Seat from './Seat'
import "./Bus.css"

const Bus = () => {

    


    let leftColumnSeats = [];
    for(let i = 0;i<10;i++){
            leftColumnSeats.push(
            <>
                <div className="left-column-one"><Seat/></div>
                <div className="left-column-two"><Seat/></div>
            </>
            )
    }
    let rightColumnSeats = [];
    for(let i = 0;i<10;i++){
        rightColumnSeats.push(
            <>
                <div className="right-column-one"><Seat/></div>
                <div className="right-column-two"><Seat/></div>
            </>
            )
    }

  return (
    <>
        <div className='bus-wrapper'>
            <div className="seat-wrapper">
                <div className="left-column">
                    {leftColumnSeats}
                </div>
                <div className="right-column">
                    {rightColumnSeats}
                </div>
            </div>
        </div>
    </>
  )
}

export default Bus