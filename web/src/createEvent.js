import {ethers, BigNumber} from "ethers"

import {signedEventContract} from "./constants"

// address lockAddress; // keep 0x0
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

// let eventDetails = [
//     '0x0000000000000000000000000000000000000000',
//     'Test event 2',
//     'this is a test event',
//     '0',
//     'Palace of Fine Arts',
//     'ETHGlobal',
//     'https://twitter.com/ethglobal',
//     '',
//     1500,
//     Date.now() - 24 * 60 * 60 * 1000,
//     Date.now() + 24 * 60 * 60 * 1000,
//     Date.now()
// ]

export const createNewEvent = async (eventDetails) => {
    console.log('creating new event')
    eventDetails.address = '0x0000000000000000000000000000000000000000';
    eventDetails.createdAt = Date.now();
    let contract = signedEventContract();
    console.log(contract)
    let tx = await contract.createEvent(eventDetails, {value: '0'})
    console.log(tx)
    return eventDetails
}