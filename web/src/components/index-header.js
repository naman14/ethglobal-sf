import * as React from 'react'
import {Link} from 'react'

import './index-header.css';
import Button from 'react-bootstrap/Button';
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import Badge from 'react-bootstrap/Badge';
import { fetchLensHandleMumbai } from '../fetchEvents';

function IndexHeader(props) {
    const {routeToPage, currentUserLensName} = props;
    return (
        <>
            <h4 id="event-header-subtitle">WEB3TICKETS</h4>
            <Button id="create-event-but" onClick={() => routeToPage('create')}>Create an event</Button>{' '}
            <div className="absolute top-0 right-0 p-4">
                <ConnectKitButton />
            </div>
            <a href="https://www.lensfrens.xyz/namand.lens" target="_blank" ><Badge id="lens-badge" bg="secondary">{currentUserLensName}</Badge></a>
        </>
    );
}

export default IndexHeader