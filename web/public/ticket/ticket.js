import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.6.9/ethers.esm.js";

const urlParams = new URLSearchParams(window.location.search);

let lockAddress = urlParams.get('lock');
let ticketId = urlParams.get('ticketId');

const contractAddress = '0xa4d5242df5f5F0A1955D6289c0B29c61a4cE8e0F'

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

const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
const eventContract = new ethers.Contract(contractAddress, EVENT_CONTRACT_ABI, provider)

let _confetti;

getEventDetails()

async function getEventDetails() {
    let event = await eventContract.getEventForLock(lockAddress)
    console.log(event)
    document.getElementById('event-title').innerHTML = event.eventTitle

    showApproved()
    // showConfetti()
    startCounter(parseInt(event.endTime.toString()))
}

function showApproved() {
    var element = document.getElementById("trigger");
    element.classList.toggle("drawn");
    setTimeout(() => {
        if (_confetti) {
            _confetti.reset()
            _confetti = undefined
        }
        showApproved()
    }, 3000)
}

function showConfetti() {

    _confetti = confetti.create(document.getElementById('confetti'), {
        resize: true,
        useWorker: true
    });
    _confetti({
        particleCount: 100,
        spread: 160
    });
}

function startCounter(endTime) {
    console.log(endTime)
    setTimeout(() => {
        document.getElementById('timer').innerHTML = secondsToDhms((endTime - Date.now()) / 1000)
        startCounter(endTime)
    }, 1000)
}

function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    
    if( d == 0) {
      var hDisplay = h > 0 ? h + "h  " : "";
      var mDisplay = m > 0 ? m + "m  " : "";
      var sDisplay = s > 0 ? s + "s  " : "";

      return hDisplay + mDisplay + sDisplay;
    } else {
      var dDisplay = d > 0 ? d + "d   " : "";
      var hDisplay = h > 0 ? h + "h   " : "";

      return dDisplay + hDisplay;
    }
}
   

