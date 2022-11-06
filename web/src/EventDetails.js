import ReactDOM from "react-dom";
import React, { StrictMode } from 'react'

import { BigNumber, ethers } from 'ethers'

const EventDetails = ({ eventData }) => { 

    console.log(eventData)
    return (
        <div>
            <p>{eventData.eventTitle}</p>
        </div>
    )
}

export default EventDetails