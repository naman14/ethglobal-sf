import { ethers, BigNumber } from "ethers"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
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
        "body": "{\"query\":\"{\\n  events(first: 10) {\\n    id\\n    eventTitle\\n   location\\n    eventDescription\\n    price\\n    organiser\\n    organiserContact\\n    coverImageUri\\n    totalTickets\\n    startTime\\n    endTime\\n    createdAt\\n  }\\n}\",\"variables\":null}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });

    let responseJson = await response.json()
    let events = responseJson.data.events

    return events.map((event) => {
        return {
            lockAddress: event.id,
            eventTitle: event.eventTitle,
            eventDescription: event.eventDescription,
            price: event.price.toString(),
            location: event.location,
            organiser: event.organiser,
            organiserContact: event.organiserContact,
            coverImageUri: event.coverImageUri,
            singleEntry: event.singleEntry,
            transferrable: event.transferrable,
            totalTickets: event.totalTickets.toString(),
            startTime: event.startTime.toString(),
            endTime: event.endTime.toString(),
            createdAt: event.createdAt.toString(),
            baseTicketUri: event.baseTicketUri
        }
    })
}

export const fetchPeopleCounts = async (lockAddresses) => {
    if (lockAddresses == undefined) {
        return {};
    }
    const client = new ApolloClient({
        uri: 'https://api.thegraph.com/subgraphs/name/unlock-protocol/mumbai-v2',
        cache: new InMemoryCache(),
    })
    const attendeeQuery = `
    {
        locks(where: {address_in: [${lockAddresses.join(",")}]}) {
          id
          address
          totalKeys
          maxNumberOfKeys
          keys {
            id
            owner
          }
        }
      }
    `
    let data = await client
        .query({
            query: gql(attendeeQuery),
        });
        console.log(data.data.locks)
    let locks = data.data.locks;
    let peopleCountMap = new Map();
    for (let i = 0; i < locks.length; ++i) {
        peopleCountMap.set(locks[i].id, {
            attending: locks[i].totalKeys,
            maxAttendees: locks[i].maxNumberOfKeys,
            attendeeKeys: locks[i].keys
        })
    }
    console.log(peopleCountMap)
    fetchLensHandles("0x16b1025cD1A83141bf93E47dBC316f34f27f2e76")
    return peopleCountMap;
}

export const fetchLensHandles = async (addresses) => {
    // console.log("fetching lens for " + addresses)
    const hadnleQuery = `{
        profiles(where: {owner_in: ["${addresses}"]}) {
          handle
        }
      }`
    const client = new ApolloClient({
        uri: 'https://api.thegraph.com/subgraphs/name/anudit/lens-protocol',
        cache: new InMemoryCache(),
    });
    let data = await client.query({query: gql(hadnleQuery)});
    // console.log("Fetching lens stuff")
    console.log(data)
    return data.data.profiles
}

