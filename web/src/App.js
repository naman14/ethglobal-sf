import {Component, useState} from 'react'
import {WagmiConfig, createClient, chain} from "wagmi";

import {useAccount} from 'wagmi'

import {ConnectKitProvider, ConnectKitButton, getDefaultClient} from "connectkit";
import './App.css';
import DeployLock from './DeployLock'
import PurchaseKey from './PurchaseKey';
import IndexHeader from './components/index-header'
import CreateEvent from "./components/CreateEvent";

const alchemyId = process.env.ALCHEMY_ID;

const chains = [chain.polygonMumbai];

const client = createClient(
    getDefaultClient({
        appName: "ETH SF",
        alchemyId,
        chains
    }),
);


class App extends Component {
    constructor(props) {
        super();
        this.state = {
            page: 'home'
        }
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
                            {this.state.page === 'home' ? <Content routeToPage={this.routeToPage}></Content> : ''}
                            {this.state.page === 'create' ? <CreateEvent routeToPage={this.routeToPage}></CreateEvent> : ''}
                            {/*{this.state.page === 'home' ? <Content routeToPage={this.routeToPage}></Content> : ''}*/}
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
    const {routeToPage} = props;

    if (!isConnected) {
        return <ConnectKitButton/>

    }
    return <>
        <div className="absolute top-0 right-0 p-4">
            <ConnectKitButton/>
        </div>
        {/*{this.state.page === 'create' ? <CreateEvent/> : ''}*/}
        {/*
    {action === 'deploy' && <DeployLock />}
    {action === 'purchase' && <PurchaseKey />}

    {action === '' && <>
      <h1>Get your tickets now!</h1>
      <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('deploy')}>Deploy Lock</button>
      <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('purchase')}>Purchase Key</button>
    </>}
    {action !== '' && <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-red-700 hover:bg-red-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('')}>Cancel</button>} */}
        <div className="absolute top-0 center">
            <IndexHeader routeToPage={routeToPage}></IndexHeader>
        </div>
    </>
}


export default App
