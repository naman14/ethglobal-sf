import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class CreateEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Form>
                <Form.Group >
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Venue</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        );
    }


}