import { ethers, BigNumber } from "ethers"

import { eventContract } from "./constants"

export const fetchEvents = async () => {
    console.log('fetching events')
    // let contract = eventContract()
    // let events = await contract.getAllEvents()

    let response = await fetch("https://api.thegraph.com/subgraphs/name/sheikebab/sf_ticket", {
        "headers": {
            "content-type": "application/json",
        },
        "referrer": "https://thegraph.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"query\":\"{\\n  events(first: 10) {\\n    id\\n    eventTitle\\n    eventDescription\\n    price\\n    organiser\\n    organiserContact\\n    coverImageUri\\n    totalTickets\\n    startTime\\n    endTime\\n    createdAt\\n  }\\n}\",\"variables\":null}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });

    let responseJson = await response.json()
    console.log(responseJson)

    return responseJson.data.events

    // // console.log(events)
    // return events.map((event) => {
    //     return {
    //         lockAddress: event.lockAddress,
    //         eventTitle: event.eventTitle,
    //         eventDescription: event.eventDescription,
    //         price: event.price.toString(),
    //         location: event.location,
    //         organiser: event.organiser,
    //         organiserContact: event.organiserContact,
    //         coverImageUri: event.coverImageUri,
    //         totalTickets: event.totalTickets.toString(),
    //         startTime: event.startTime.toString(),
    //         endTime: event.endTime.toString(),
    //         createdAt: event.createdAt.toString()
    //     }
    // })
}