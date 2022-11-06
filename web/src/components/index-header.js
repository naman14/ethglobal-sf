import * as React from 'react'

import './index-header.css';
import Button from 'react-bootstrap/Button';

function IndexHeader(props) {
    const {routeToPage} = props;
    return (
        <>
            <div id="main-header"></div>
            <Button id="create-event-but" variant="primary" onClick={() => routeToPage('create')}>Create
                Event</Button>{' '}
        </>
    );
}

export default IndexHeader