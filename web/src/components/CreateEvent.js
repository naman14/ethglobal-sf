import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class CreateEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            eventTitle: '',
            eventDescription: '',
            price: '',
            location: '',
            organiser: '',
            organiserContact: '',
            coverImageUri: '',
            totalTickets: '',
            startTime: '',
            endTime: '',
            createdAt: '',
            entry: '',

        }
        // const {createNewEvent} = props;
        this.submitEvent = props.submitEvent;
    }

    onSubmit = () => {
        console.log(this.state)
        this.submitEvent(this.state)
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Select Event Pictures</Form.Label>
                    <Form.Control type="file" placeholder="Enter event name here..."
                                  onChange={e => this.setState({coverImageUri: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter event name here..."
                                  onChange={e => this.setState({eventTitle: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Venue</Form.Label>
                    <Form.Control type="text" placeholder="Enter the venue here..."
                                  onChange={e => this.setState({location: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description here..."
                                  onChange={e => this.setState({eventDescription: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Organizer</Form.Label>
                    <Form.Control type="text" placeholder="Enter organizer here..."
                                  onChange={e => this.setState({organiser: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Organizer Contact</Form.Label>
                    <Form.Control type="text" placeholder="Enter organizer contact here..."
                                  onChange={e => this.setState({organiserContact: e.target.value})}/>
                </Form.Group>
                <Form.Label>Entry Type</Form.Label>
                <Form.Group className="mb-2" onChange={e => this.setState({entry: e.target.value})}>
                    <Row>
                        <Col>
                            <Form.Check
                                type="radio"
                                label="Single"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                value={"Single"}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type="radio"
                                label="Multi"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value={"Multi"}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Control placeholder="Price" onChange={e => this.setState({price: e.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Select defaultValue="ETH">
                                <option>ETH</option>
                                <option>BTC</option>
                                <option>XRP</option>
                                <option>LUNA</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-2">
                    <Form.Label>Duration</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control type="datetime-local" placeholder="Enter Start Time"
                                          onChange={e => this.setState({startTime: e.target.value})}/>
                        </Col>
                        <Col>
                            <Form.Control type="datetime-local" placeholder="Enter End Time"
                                          onChange={e => this.setState({endTime: e.target.value})}/>
                        </Col>

                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Total Tickets</Form.Label>
                    <Form.Control type="text" placeholder="Enter the number of tickets..."
                                  onChange={e => this.setState({totalTickets: e.target.value})}/>
                </Form.Group>
                <Button variant="primary" color={"#5008FF"} onClick={() => this.onSubmit()}>
                    Create Event
                </Button>
            </Form>

        );
    }


}