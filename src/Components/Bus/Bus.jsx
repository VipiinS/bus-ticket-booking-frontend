import React, { useEffect, useState } from 'react'
import Seat from './Seat'
import "./Bus.css"
import {useDispatch,useSelector} from 'react-redux'


const Bus = () => {

    const seats = useSelector(state=>state.seat.fetchedSeats)
    console.log(seats);

    const totalSeats = seats && seats.length > 0 ? seats.length : 0;
    console.log(totalSeats);
    let leftColumnSeats = [];
    let rightColumnSeats = [];

    for (let i = 0; i < totalSeats; i++) {
        const seat = seats[i];
        const seatComponent = <Seat seat={seat}/>;

        if (i % 2 === 0) {
            leftColumnSeats.push(
                <div className={`left-column-${i % 2 === 0 ? 'one' : 'two'}`} key={seat.seatNumber}>
                    {seatComponent}
                </div>
            );
        } else {
            rightColumnSeats.push(
                <div className={`right-column-${i % 2 === 0 ? 'one' : 'two'}`} key={seat.seatNumber}>
                    {seatComponent}
                </div>
            );
        }
    }


  return (
    <>
        <div className='bus-wrapper'>
            <div className="seat-wrapper">
                {totalSeats > 0 ? //prints only when seats are present..
                <>
                    <div className="left-column">
                        {leftColumnSeats}
                    </div>
                    <div className="right-column">
                        {rightColumnSeats}
                    </div>
                </> : <div className='no-seats-error'>Please try again later...</div> // else display this message
                }
            </div>
        </div>
    </>
  )
}

export default Bus