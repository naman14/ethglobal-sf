import React, {Component} from 'react'

import './events-list.css';
import { fetchEvents } from '../fetchEvents';
import EventListItem from './event-list-item';

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
            <div style={{marginLeft: '50px', marginRight: '50px'}}>
                <div id="event-list-bg">
                    {this.state.events.map((event, index) => {
                    return <EventListItem event={event} key={index}></EventListItem>
                })}
                </div>
            </div>
        );
    }
}

