// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "./interfaces/IUnlock.sol";
import "./interfaces/IPublicLock.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockKeyPurchaseHook.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockKeyCancelHook.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockValidKeyHook.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockTokenURIHook.sol";
import "@unlock-protocol/contracts/dist/Hooks/ILockKeyTransferHook.sol";

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
        uint256 totalTickets;
        uint256 startTime;
        uint256 endTime;
        uint256 createdAt;
    }

    EventDetails[] private allEvents;
    mapping(address => EventDetails) private locksToEvent;
    mapping(address => EventDetails[]) private organisersToEvents;

    address unlockFactoryAddress;

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
            address(this),
            address(this),
            address(this),
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

     function getEventsForOrganiser(address organiser) public view returns (EventDetails[] memory) {
        return organisersToEvents[organiser];
    }

    function getEventForLock(address lockAddress) public view returns (EventDetails memory) {
        return locksToEvent[lockAddress];
    }

    function keyPurchasePrice(
        address from,
        address recipient,
        address referrer,
        bytes calldata data
    ) external view returns (uint256 minKeyPrice) {
        return minKeyPrice;
    }

    function onKeyPurchase(
        address from,
        address recipient,
        address referrer,
        bytes calldata data,
        uint256 minKeyPrice,
        uint256 pricePaid
    ) external {}

    function onKeyCancel(
        address operator,
        address to,
        uint256 refund
    ) external {}

    function hasValidKey(
        address lockAddress,
        address keyOwner,
        uint256 expirationTimestamp,
        bool isValidKey
    ) external view returns (bool) {
        return true;
    }

    function tokenURI(
        address lockAddress,
        address operator,
        address owner,
        uint256 keyId,
        uint256 expirationTimestamp
    ) external view returns (string memory) {
        return "";
    }

    function onKeyTransfer(
        address lockAddress,
        uint256 tokenId,
        address operator,
        address from,
        address to,
        uint256 expirationTimestamp
    ) external {

    }
}
