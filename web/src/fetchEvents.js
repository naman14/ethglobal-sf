import { ethers, BigNumber } from "ethers"

import { eventContract } from "./constants"

export const fetchEvents  = async () => {
    console.log('fetching events')
    let contract = eventContract()
    let events = await contract.getAllEvents()
    console.log(events)
}