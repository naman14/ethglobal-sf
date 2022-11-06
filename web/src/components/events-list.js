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
            <div style={{paddingLeft: '200px', paddingRight: '200px', backgroundColor: 'black'}}>
                <div id="event-list-bg">
                    {this.state.events.map((event, index) => {
                    return <EventListItem event={event} key={index}></EventListItem>
                })}
                </div>
            </div>
        );
    }
}

