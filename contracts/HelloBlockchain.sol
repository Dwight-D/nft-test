pragma solidity ^0.7.3;

contract HelloBlockchain {

    //Emitted when update function is called
    //Smart contract events are a way for your contract to communicate that something happened on the blockchain to your app front-end,
    //which can be 'listening' for certain events and take action when they happen.
    event UpdatedMessages(string oldStr, string newStr);

    string public message;

    // Constructors are used to initialize the contract's data. Learn more:https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
    constructor(string memory initMessage) {

        message = initMessage;
    }

    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdatedMessages(oldMsg, newMessage);
    }
}
