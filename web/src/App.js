import ReactDOM from "react-dom";

import logo from './logo.svg';
import './App.css';
import { BigNumber, ethers } from 'ethers'
import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      connectedAccount: undefined
    }
  }

  componentDidMount() {
    // this.checkIfWalletIsConnected()
  }


  checkIfWalletIsConnected = async () => {

    this.setState({ loading: true })

    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!")
      this.setState({ loading: false })
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
      console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion');
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      this.onWalletConnected(account)
      this.setState({ loading: false })
    } else {
      console.log("No authorized account found")
      this.setState({ loading: false })
    }

    ethereum.on('accountsChanged', (accounts) => {
      const account = accounts[0];
      this.onWalletConnected(account)
    });
  }

  onWalletConnected = async (account) => {
    if (account) {
      console.log("Found an authorized account:", account);
      this.setState({ connectedAccount: account })
    }
  }

  connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask!");
        return;

      }
      if (this.state.connectedAccount == '') {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        this.onWalletConnected(accounts[0])
      } else {
        const permissions = await ethereum.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] });
        const accountsPermission = permissions.find(
          (permission) => permission.parentCapability === 'eth_accounts'
        );
        if (accountsPermission) {
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
          this.onWalletConnected(accounts[0])
        }
      }


    } catch (error) {
      console.log(error)
    }
  }


  renderUI = () => {

  }

  render() {
    return (
      <div className="container">

        {!this.state.connectedAccount ? <button type="button" onClick={this.connectWallet}>Connect wallet</button> : <p>{this.state.connectedAccount}</p>}
         
        {this.state.loading && <div className="loader"/>}

      </div>
  );
  }
}