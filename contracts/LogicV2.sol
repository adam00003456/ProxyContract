// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LogicV2 {
    uint256 public value;

    // Function to set a value (with additional logic)
    function setValue(uint256 _value) public {
        value = _value * 2; // Multiplying value by 2 to simulate an upgrade
    }

    // Function to get the current value
    function getValue() public view returns (uint256) {
        return value;
    }
}
