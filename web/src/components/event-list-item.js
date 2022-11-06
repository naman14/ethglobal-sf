import React, {Component} from 'react'
import './events-list.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class EventListItem extends Component {
    constructor(props) {
        super()
        this.event = props.event;
    }
    render() {
        return (
            <>
                <Container className="event-item-body">
                    <Row>
                        <Col xs={3}><Image className="event-item-img"></Image></Col>
                        <Col>
                            <span className="event-item-title">{this.event.eventTitle}</span><br/>
                            <span className="event-item-date">{this.event.eventTitle}</span>
                            <span className="event-item-place">{this.event.eventTitle}</span>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}