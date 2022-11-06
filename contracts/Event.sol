// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "./interfaces/IUnlock.sol";
import "./interfaces/IPublicLock.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockKeyPurchaseHook.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockKeyCancelHook.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockValidKeyHook.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockTokenURIHook.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockKeyTransferHook.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Event {
    event NewEvent(
        address indexed lockAddress,
        address indexed eventCreator,
        EventDetails eventDetails
    );

    struct EventDetails {
        address lockAddress;
        string eventTitle;
        string eventDescription;
        uint256 price;
        string location;
        string organiser;
        string organiserContact;
        string coverImageUri;
        bool singleEntry;
        bool transferrable;
        uint256 totalTickets;
        uint256 startTime;
        uint256 endTime;
        uint256 createdAt;
        string baseTicketUri;
    }

    EventDetails[] private allEvents;
    mapping(address => EventDetails) private locksToEvent;
    mapping(address => EventDetails[]) private organisersToEvents;

    address unlockFactoryAddress;

    using Strings for uint256;

    constructor(address _unlockFactoryAddress) {
        unlockFactoryAddress = _unlockFactoryAddress;
    }

    function createEvent(EventDetails memory eventDetails) public payable {
        bytes memory data = abi.encodeWithSignature(
            "initialize(address,uint256,address,uint256,uint256,string)",
            address(this),
            type(uint256).max,
            address(0),
            eventDetails.price,
            eventDetails.totalTickets,
            eventDetails.eventTitle
        );

        address lockAddress = IUnlock(unlockFactoryAddress)
            .createUpgradeableLock(data);

        IPublicLock(lockAddress).addLockManager(msg.sender);
        
        IPublicLock(lockAddress).setEventHooks(
            address(0),
            address(0),
            address(0),
            address(this),
            address(this),
            address(0),
            address(0)
        );

        eventDetails.lockAddress = lockAddress;
        allEvents.push(eventDetails);
        locksToEvent[lockAddress] = eventDetails;
        organisersToEvents[msg.sender].push(eventDetails);

        emit NewEvent(lockAddress, msg.sender, eventDetails);
    }

    function getAllEvents() public view returns (EventDetails[] memory) {
        return allEvents;
    }

    function getEventsForOrganiser(address organiser)
        public
        view
        returns (EventDetails[] memory)
    {
        return organisersToEvents[organiser];
    }

    function getEventForLock(address lockAddress)
        public
        view
        returns (EventDetails memory)
    {
        return locksToEvent[lockAddress];
    }

    function setTicketBaseUri(address lockAddress, string memory _baseTicketUri) public {
        IPublicLock lock = IPublicLock(lockAddress);
        require(lock.hasRole(lock.LOCK_MANAGER_ROLE(), msg.sender), "only lock managers can set base uri");
        locksToEvent[lockAddress].baseTicketUri = _baseTicketUri;
    }

    function tokenURI(
        address lockAddress,
        address operator,
        address owner,
        uint256 keyId,
        uint256 expirationTimestamp
    ) external view returns (string memory) {
        string memory baseTicketUri= locksToEvent[lockAddress].baseTicketUri;
        return string(abi.encodePacked(baseTicketUri,  "?lock=", lockAddress, "&ticketId=",  keyId.toString()));
    }

    function onKeyTransfer(
        address lockAddress,
        uint256 tokenId,
        address operator,
        address from,
        address to,
        uint256 expirationTimestamp
    ) external {
        if (from != address(0) && to != address(0)) {
            require(locksToEvent[lockAddress].transferrable, "ticket not transferrable");
        }
    }
}
