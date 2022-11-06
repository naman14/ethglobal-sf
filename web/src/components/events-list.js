import React, {Component} from 'react'

import './events-list.css';
import { fetchEvents } from '../fetchEvents';

export default class EventList extends Component {
    constructor(props) {
        super()
        this.state = {
            events :[]
        }
    }

    componentDidMount() {
        this.getEvents();
    }
    getEvents = async () => {
        const e = await fetchEvents()
        console.log(e)
        this.setState({events: e})
    }
    render() {
        return (
            <>
                <div id="event-list-bg">
                    {this.state.events.map((event, index) => {
                    return <li key={index}>{event.lockAddress}</li>
                })}
                </div>
            </>
        );
    }
}

