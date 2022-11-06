import { ethers, BigNumber } from "ethers"

import { eventContract } from "./constants"

export const fetchEvents  = async () => {
    console.log('fetching events')
   let events = await eventContract.events()
   console.log(events)
}