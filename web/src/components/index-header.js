import * as React from 'react'

import './index-header.css';
import Button from 'react-bootstrap/Button';

function IndexHeader() {
    return (
        <>
            <div  id="main-header"></div>
            <div class="d-flex justify-content-start"><h4 id="event-header-subtitle">WEB3MOVES  🎉</h4></div>
            <Button id="create-event-but" variant="light">Create Event</Button>{' '}
            <div class="d-flex justify-content-center"><h1 id="event-header-title">Discover Web3 Events</h1></div>
        </>
    );
}

export default IndexHeader