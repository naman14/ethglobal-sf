import {Component, useState} from 'react'
import {WagmiConfig, createClient, chain} from "wagmi";

import {useAccount} from 'wagmi'

import {ConnectKitProvider, ConnectKitButton, getDefaultClient} from "connectkit";
import styled from 'styled-components'

import './App.css';
import DeployLock from './DeployLock'
import PurchaseKey from './PurchaseKey';
import IndexHeader from './components/index-header'
import EventList from './components/events-list';

import EventDetails from './EventDetails';
import CreateEvent from "./components/CreateEvent";
import { fetchLensHandleMumbai } from './fetchEvents';

import {createNewEvent} from "./createEvent";

const alchemyId = process.env.ALCHEMY_ID;

const chains = [chain.polygonMumbai];

const client = createClient(
    getDefaultClient({
        appName: "ETH SF",
        alchemyId,
        chains
    }),
);

const HeaderTitle = styled.p`
position: absolute;
width: 918px;
height: 86px;
left: 261px;
top: 179px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 80px;
line-height: 100%;
/* identical to box height, or 96px */

text-align: center;
letter-spacing: -0.04em;

`

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            page: 'home',
            currentUserLensName: ''
        }
        
    }
    componentDidMount(){
      const fetchMumbaiHandle = async (address) => {
        let handle = await fetchLensHandleMumbai(address)
        console.log("result handle" + handle)
        this.setState({currentUserLensName: handle})
      }
      setTimeout(fetchMumbaiHandle, 1500, "0x182f47576bCFa1B9e2317495399cc6a0C3DE8f86")
    }

    routeToPage = (page) => {
        console.log("btn clicked")
        this.setState({
            page: page
        })

    };


    render() {


        return (
            <div className="App">
                <header className="App-header">
                    <WagmiConfig client={client}>
                        <ConnectKitProvider>
                            {this.state.page === 'home' ? <Content routeToPage={this.routeToPage} currentUserLensName={this.state.currentUserLensName}></Content> : ''}
                            {this.state.page === 'create' ? <CreateEvent routeToPage={this.routeToPage}
                                                                         submitEvent={createNewEvent}></CreateEvent> : ''}
                        </ConnectKitProvider>
                    </WagmiConfig>
                </header>
            </div>
        );
    }
}


const Content = (props) => {
    const {isConnected} = useAccount()
    const [action, setAction] = useState('');
    const {routeToPage, currentUserLensName} = props;
    console.log("FETCHING PROPS: ", currentUserLensName);

    if (!isConnected) {
        return <ConnectKitButton/>

    }

    return <>

        <div style={{display: 'flex', flexDirection: 'column', width: '100%', top: '0px'}}>

            <div>
                <IndexHeader routeToPage={routeToPage} currentUserLensName={currentUserLensName}></IndexHeader>
                <img style={{width: '100%', height: '300px'}} src="/images/header-background.png"></img>
                <HeaderTitle>Discover Web3 Events</HeaderTitle>
            </div>


            <EventList></EventList>
        </div>


        {/*
    {action === 'deploy' && <DeployLock />}
    {action === 'purchase' && <PurchaseKey />}

    {action === '' && <>
      <h1>Get your tickets now!</h1>
      <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('deploy')}>Deploy Lock</button>
      <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('purchase')}>Purchase Key</button>
    </>}
    {action !== '' && <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-red-700 hover:bg-red-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('')}>Cancel</button>} */}
    </>
}


export default App
