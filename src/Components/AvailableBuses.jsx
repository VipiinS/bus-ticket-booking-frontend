import React from 'react'
import "./AvailableBuses.css"

const AvailableBuses = (props) => {
  return (
    <div className='bus-info'>
        <div className="top-bar grey">
            <div className="company">Company</div>
            <div className="bus-type">Sleeper</div>
            <div className="extra-infos">On Time</div>
        </div>
        <div className="bottom-bar">
            <div className="left-column flex-col">
                <div className="time">00:45</div>
                <div className="place">Bus station</div>
            </div>
            <div className="middle-column">
                <div className="line">.</div>
                <div className="travel-time">4h 0m</div>
                <div className="line">.</div>
            </div>
            <div className="right-column flex-col">
                <div className="time">4:45</div>
                <div className="place">Bus station</div>
            </div>
            <div className="rightmost-column flex-col">
                <div className="price">$400</div>
                <div className="seats-available green">2 seats</div>
            </div>
        </div>

    </div>
  )
}

export default AvailableBuses