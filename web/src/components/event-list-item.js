import React, { Component } from 'react'
import './events-list.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Moment from 'react-moment';

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
margin-top: 40px;
margin-left: 20px;

background: #FFFFFF;
border-radius: 103.571px;
`

const WalletSignedUpText = styled.span`
height: 18px;
left: 341px;
margin-top: 47px;
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

const RegisterButton = styled.button`
width: 151px;
height: 45px;
paddingLeft: 12px;
background-color: white;
background: #FFFFFF;
border-radius: 100px;
font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 100%;
color: #000000;
margin-left: auto

`

export default class EventListItem extends Component {
    constructor(props) {
        super()
        this.event = props.event;
        this.startDate = new Date(props.event.startTime/1000);
        this.endDate = new Date(props.event.endTime/1000);
    }

    onRegisterClick = () => {
        console.log('onregister')

        const script = document.createElement("script");
        script.setAttribute('type', 'text/javascript');
        script.src = 'https://paywall.unlock-protocol.com/static/unlock.latest.min.js'

        document.head.appendChild(script);

        const script2 = document.createElement("script");
        script2.setAttribute('type', 'text/javascript');

        script2.innerHTML = `
          var unlockProtocolConfig = {
            "network": 80001, 
            "locks": {
              "${this.event.lockAddress}": {
                "name": "${this.event.eventTitle}"
              }
            },
            "icon": "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
            "callToAction": {
              "default": "Register for this event"
            }
          }
           `
        document.head.appendChild(script2);

        console.log(document)
        window.unlockProtocol.loadCheckoutModal()

    }

    render() {
        return (
            <>
                <ListItem>
                    <Image src='event-default-img.png' />
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>

                        <EventTitle>{this.event.eventTitle}</EventTitle>
                        <EventLocationTime>{this.event.location} <br></br>
                            <Moment format=" MMM DD hh:mm - " date={this.startDate} />
                            <Moment format=" MMM DD hh:mm " date={this.endDate} />
                        </EventLocationTime>

                        <div style={{
                            display: 'flex', flexDirection: 'row', textAlign: 'left', justifyContent: 'space-between', flexGrow: 1
                        }}>

                            <div style={{
                                display: 'flex', flexDirection: 'row', textAlign: 'left'
                            }}>
                                <WalletSignedUpImg src="wallet_outline.png"></WalletSignedUpImg>
                                <WalletSignedUpText>300 Wallets Signed Up</WalletSignedUpText>
                            </div>

                            <RegisterButton onClick={this.onRegisterClick}>Register</RegisterButton>
                        </div>


                    </div>
                    <div>

                    </div>
                </ListItem>
            </>
        );
    }
}