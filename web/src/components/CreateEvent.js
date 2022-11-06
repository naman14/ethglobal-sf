import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class CreateEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedCustomer: 1
        }
    }

    //function which is called the first time the component loads
    componentDidMount() {
        this.getCustomerData();
    }

    //Function to get the Customer Data from json
    getCustomerData() {

    };

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
                <Form.Group className="mb-3" >
                    <Form.Label>Venue</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Venue</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Venue</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Venue</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        );
        // if (!this.state.customerList)
        //     return (<p>Loading data</p>)
        // return (<div className="addmargin">
        //     <div className="col-md-3">
        //         {
        //
        //             this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name}
        //                                                                 className="centeralign">
        //                 <Panel.Heading>
        //                     <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
        //                 </Panel.Heading>
        //                 <Panel.Body>
        //                     <p>{customer.email}</p>
        //                     <p>{customer.phone}</p>
        //                     <Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>
        //
        //                         Click to View Details
        //
        //                     </Button>
        //
        //                 </Panel.Body>
        //             </Panel>)
        //         }
        //     </div>
        //     <div className="col-md-6">
        //         <CustomerDetails val={this.state.selectedCustomer}/>
        //     </div>
        // </div>)
    }


}