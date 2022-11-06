import { ethers, BigNumber } from "ethers"

import { eventContract } from "./constants"

export const fetchEvents  = async () => {
    console.log('fetching events')
    let contract = eventContract()
    let events = await contract.getAllEvents()
    console.log(events)
    return events.map((event) => {
        return {
            lockAddress: event.lockAddress,
            eventTitle: event.eventTitle,
            eventDescription: event.eventDescription,
            price: event.price.toString(),
            location: event.location,
            organiser: event.organiser,
            organiserContact: event.organiserContact,
            coverImageUri: event.coverImageUri,
            totalTickets: event.totalTickets.toString(),
            startTime: event.startTime.toString(),
            endTime: event.endTime.toString(),
            createdAt: event.createdAt.toString()
        }
    })
}