import { ethers } from 'ethers'

export const EVENT_CONTRACT_ADDRESS = "0xa4d5242df5f5F0A1955D6289c0B29c61a4cE8e0F"
export const INFURA_KEY = "ad393a56503f4e61bdf7321bd496f574"

export const eventContract = () => {
    const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
    let eventContract = new ethers.Contract(EVENT_CONTRACT_ADDRESS, EVENT_CONTRACT_ABI, provider)
    return eventContract;
}

export const signedEventContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(EVENT_CONTRACT_ADDRESS, EVENT_CONTRACT_ABI, signer);
    return contract
}

export const EVENT_CONTRACT_ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_unlockFactoryAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "lockAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "eventCreator",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "lockAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "eventTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "eventDescription",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiser",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiserContact",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "coverImageUri",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "singleEntry",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "transferrable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "totalTickets",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "baseTicketUri",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct Event.EventDetails",
          "name": "eventDetails",
          "type": "tuple"
        }
      ],
      "name": "NewEvent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "lockAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "eventTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "eventDescription",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiser",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiserContact",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "coverImageUri",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "singleEntry",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "transferrable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "totalTickets",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "baseTicketUri",
              "type": "string"
            }
          ],
          "internalType": "struct Event.EventDetails",
          "name": "eventDetails",
          "type": "tuple"
        }
      ],
      "name": "createEvent",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllEvents",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "lockAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "eventTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "eventDescription",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiser",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiserContact",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "coverImageUri",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "singleEntry",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "transferrable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "totalTickets",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "baseTicketUri",
              "type": "string"
            }
          ],
          "internalType": "struct Event.EventDetails[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "lockAddress",
          "type": "address"
        }
      ],
      "name": "getEventForLock",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "lockAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "eventTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "eventDescription",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiser",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiserContact",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "coverImageUri",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "singleEntry",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "transferrable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "totalTickets",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "baseTicketUri",
              "type": "string"
            }
          ],
          "internalType": "struct Event.EventDetails",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "organiser",
          "type": "address"
        }
      ],
      "name": "getEventsForOrganiser",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "lockAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "eventTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "eventDescription",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiser",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "organiserContact",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "coverImageUri",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "singleEntry",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "transferrable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "totalTickets",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "baseTicketUri",
              "type": "string"
            }
          ],
          "internalType": "struct Event.EventDetails[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "keyPurchasePrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "minKeyPrice",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "minKeyPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePaid",
          "type": "uint256"
        }
      ],
      "name": "onKeyPurchase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "lockAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expirationTimestamp",
          "type": "uint256"
        }
      ],
      "name": "onKeyTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "lockAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_baseTicketUri",
          "type": "string"
        }
      ],
      "name": "setTicketBaseUri",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "lockAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "keyId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expirationTimestamp",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]