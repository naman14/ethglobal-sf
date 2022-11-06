import { ethers } from 'ethers'

export const EVENT_CONTRACT_ADDRESS = "0x7DCD79aE66e5C0a1b356Ff322d0cc8135Fd161e1"
export const INFURA_KEY = "ad393a56503f4e61bdf7321bd496f574"

export const eventContract = () => {
    const provider = new ethers.providers.InfuraProvider(null, INFURA_KEY);
    let eventContract = new ethers.Contract(EVENT_CONTRACT_ADDRESS, EVENT_CONTRACT_ABI, provider)
    return eventContract;
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "eventLocks",
      "outputs": [
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
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "eventOrganisers",
      "outputs": [
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
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "events",
      "outputs": [
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
        }
      ],
      "stateMutability": "view",
      "type": "function"
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
            }
          ],
          "internalType": "struct Event.EventDetails",
          "name": "eventDetails",
          "type": "tuple"
        }
      ],
      "name": "getEventCreationData",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
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
        },
        {
          "internalType": "address",
          "name": "keyOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expirationTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isValidKey",
          "type": "bool"
        }
      ],
      "name": "hasValidKey",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "refund",
          "type": "uint256"
        }
      ],
      "name": "onKeyCancel",
      "outputs": [],
      "stateMutability": "nonpayable",
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