import React from 'react'
import "./Seat.css"


const Seat = ({seat}) => {
  return (
    <div className={`seat-seat seat-available ${seat.isBooked?" seat-booked":".seat-available"}`}>.</div>
  )
}

export default Seat