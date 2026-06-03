// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Options Core
contract OptionsCore {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    function createOption(bytes32 optionId) external {
        require(msg.sender == admin, "Only admin");
        // Option creation logic would go here
    }
}