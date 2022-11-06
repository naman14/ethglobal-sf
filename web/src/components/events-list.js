import React, {Component} from 'react'

import './events-list.css';
import { fetchEvents, fetchPeopleCounts } from '../fetchEvents';
import EventListItem from './event-list-item';

export default class EventList extends Component {
    constructor(props) {
        super()
        this.state = {
            events :[],
            attendeeCount: {}
        }
    }
    componentDidMount() {
        this.getEvents();
    }
    getEvents = async () => {
        const e = await fetchEvents()
        // console.log(e)
        let lockAddresses = []
        for (let i = 0; i < e.length; ++i) {
            lockAddresses.push("\"" + e[i].lockAddress + "\"")
        }
        const ac = await fetchPeopleCounts(lockAddresses)
        // console.log(ac)
        this.setState({events: e, attendeeCount: ac})
    }
    render() {
        return (
            <div style={{paddingLeft: '200px', paddingRight: '200px', backgroundColor: 'black'}}>
                <div id="event-list-bg">
                    {this.state.events.map((event, index) => {
                    return <EventListItem event={event} attendeeCount={this.state.attendeeCount.get(event.lockAddress)} key={index}></EventListItem>
                })}
                </div>
            </div>
        );
    }
}

