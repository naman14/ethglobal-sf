import ReactDOM from "react-dom";
import styled from 'styled-components'

import React, { StrictMode } from 'react'

import { BigNumber, ethers } from 'ethers'

import IndexHeader from './components/index-header'

const EventImage = styled.img`
position: absolute;
width: 468px;
height: 542px;
left: 144px;
top: 125px;

background: url(image.png);
border-radius: 24px;
`

export default class EventDetails extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="absolute top-0 center">
                    <IndexHeader ></IndexHeader>
                </div>
                <EventImage src="https://ipfs.io/ipfs/QmZHni7iQM2aNYXwpP7BRUmQEjJw4rzrPjMkresNm3vfSr?filename=event_cover_image.png"/>
                <p>{this.props.eventData.eventTitle}</p>
            </div>
        )
    }
}