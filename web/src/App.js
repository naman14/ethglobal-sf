import { useState } from 'react'
import { WagmiConfig, createClient, chain } from "wagmi";

import { useAccount } from 'wagmi'

import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import './App.css';
import DeployLock from './DeployLock'
import PurchaseKey from './PurchaseKey';
import IndexHeader from './components/index-header'
import { fetchEvents } from './fetchEvents';

const alchemyId = process.env.ALCHEMY_ID;

const chains = [chain.polygonMumbai];

const client = createClient(
  getDefaultClient({
    appName: "ETH SF",
    alchemyId,
    chains
  }),
);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">

        <WagmiConfig client={client}>
          <ConnectKitProvider>
            <Content></Content>
          </ConnectKitProvider>
        </WagmiConfig>
      </header>
    </div>
  );
};

const Content = () => {
  const { isConnected } = useAccount()
  const [action, setAction] = useState('');

  fetchEvents()
  if (!isConnected) {
    return <ConnectKitButton />

  }
  return <>
    <div className="absolute top-0 right-0 p-4">
      <ConnectKitButton />
    </div>
{/* 
    {action === 'deploy' && <DeployLock />}
    {action === 'purchase' && <PurchaseKey />}

    {action === '' && <>
      <h1>Using Unlock with Wagmi!</h1>
      <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('deploy')}>Deploy Lock</button>
      <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('purchase')}>Purchase Key</button>
    </>}
    {action !== '' && <button className='block w-1/2 mt-8 px-4 py-3 text-white text-base bg-red-700 hover:bg-red-800 focus:outline-none rounded-lg text-center' onClick={() => setAction('')}>Cancel</button>} */}
    <div className="absolute top-0 center">
      <IndexHeader  ></IndexHeader>
    </div>
  </>
}


export default App
