import React, { useState } from 'react'
import "./Seat.css"
import {useDispatch,useSelector} from 'react-redux'
import { selectSeat } from '../Redux/SeatSlice';

const Seat = ({seat,key}) => {
  const dispatch = useDispatch();
  const[selected,setSelected] = useState(false) 
  const handleClick = (seatNumber) =>{
    dispatch(selectSeat(seatNumber))
    setSelected(!selected);
  }

  return (
    <div key={seat.seatNumber} className={`seat-seat seat-available ${seat.isBooked?" seat-booked":".seat-available"} ${selected?"selected":""}`}
      onClick={(e)=>{handleClick(seat.seatNumber);}}
    >.</div>
  )
}

export default Seat