import React, {Component} from 'react'
import './events-list.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styled from 'styled-components'

const ListItem = styled.p`
width: 100%;
height: 195px;
left: 144px;
top: 160px;

background: #5008FF;
border-radius: 16px;
margin-top: 20px;

display: flex;
flexDirection row
`

const EventImage = styled.img`
width: 273px;
height: 195px;
left: 0px;
top: 0px;

`

const EventTitle = styled.p`
margin-left: 24px;
margin-right: 24px;
margin-top: 24px;
margin-bottom: -5px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 100%;
/* identical to box height, or 32px */

letter-spacing: -0.04em;
background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`

const EventLocationTime = styled.p`
margin-left: 24px;
margin-right: 24px;
margin-top: 10px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;
/* identical to box height, or 18px */

letter-spacing: -0.04em;

background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

opacity: 0.6;
`

const WalletSignedUpImg = styled.img`
width: 32px;
height: 32px;
left: 20px;
margin-top: 50px;
margin-left: 20px;

background: #FFFFFF;
border-radius: 103.571px;
`

const WalletSignedUpText = styled.span`
height: 18px;
left: 341px;
margin-top: 57px;
margin-left: 15px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;

/* identical to box height, or 18px */
letter-spacing: -0.04em;

background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`

export default class EventListItem extends Component {
    constructor(props) {
        super()
        this.event = props.event;
    }
    render() {
        return (
            <>
                <ListItem>
                  <Image src='event-default-img.png'/>
                  <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>

                    <EventTitle>{this.event.eventTitle}</EventTitle>
                    <EventLocationTime>{this.event.location} {this.event.startTime}</EventLocationTime>
                    <div style={{display: 'flex', flexDirection: 'row', textAlign: 'left'}}>
                        <WalletSignedUpImg src="wallet_outline.png"></WalletSignedUpImg>
                        <WalletSignedUpText>300 Wallets Signed Up</WalletSignedUpText>
                    </div>
                  </div>
                  <div>
                    
                  </div>
                </ListItem>
            </>
        );
    }
}