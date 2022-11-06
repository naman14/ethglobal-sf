import * as React from 'react'

import './index-header.css';
import Button from 'react-bootstrap/Button';

function IndexHeader() {
    return (
        <>
            <div  id="main-header"></div>
            <Button id="create-event-but" variant="primary">Create Event</Button>{' '}
        </>
    );
}

export default IndexHeader