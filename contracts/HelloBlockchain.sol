pragma solidity ^0.7.3;

contract HelloBlockchain {

    //Emitted when update function is called
    //Smart contract events are a way for your contract to communicate that something happened on the blockchain to your app front-end,
    //which can be 'listening' for certain events and take action when they happen.
    event UpdatedMessages(string oldStr, string newStr);

    string public message;


    // Similar to many class-based object-oriented languages, a constructor is a special function that is only executed upon contract creation.
    // Constructors are used to initialize the contract's data. Learn more:https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
    constructor(string memory initMessage) {

        // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable).
        message = initMessage;
    }

    // A public function that accepts a string argument and updates the `message` storage variable.
    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdatedMessages(oldMsg, newMessage);
    }
}
