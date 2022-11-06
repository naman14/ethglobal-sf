import * as React from 'react'

import './index-header.css';
import Button from 'react-bootstrap/Button';
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";

function IndexHeader(props) {
    const {routeToPage} = props;
    return (
        <>
            <h4 id="event-header-subtitle">WEB3MOVES</h4>
            <Button id="create-event-but" onClick={() => routeToPage('create')}>Create an event</Button>{' '}
            <div className="absolute top-0 right-0 p-4">
                <ConnectKitButton />
            </div>
        </>
    );
}

export default IndexHeader