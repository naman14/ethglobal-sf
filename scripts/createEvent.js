let abi = require('../artifacts/contracts/Event.sol/Event.json').abi

const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {

    const [deployer] = await ethers.getSigners(); //get the account to deploy the contract
    console.log("interacting with the account:", deployer.address); 

    let contractAddress = '0xcE479646045254e452F1c93f8a387B832Cd41010'
    const contractInstance = new ethers.Contract(contractAddress, abi, deployer);
    
    // address lockAddress;
    // string eventTitle;
    // string eventDescription;
    // uint256 price;
    // string location;
    // string organiser;
    // string organiserContact;
    // string coverImageUri;
    // uint256 totalTickets;
    // uint256 startTime;
    // uint256 endTime;
    // uint256 createdAt;

    let eventDetails = [
        '0x0000000000000000000000000000000000000000',
        'Test event 2',
        'this is a test event',
        '0',
        'Palace of Fine Arts',
        'ETHGlobal',
        'https://twitter.com/ethglobal',
        '',
        1500,
        Date.now() - 24 * 60 * 60 * 1000,
        Date.now() + 24 * 60 * 60 * 1000,
        Date.now()
    ]

    var result = await contractInstance.createEvent(eventDetails, { value: '0'})
    console.log(result)

  };


  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
