// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LogicV1 {
    uint256 public value;

    // Function to set a value
    function setValue(uint256 _value) public {
        value = _value;
    }

    // Function to get the current value
    function getValue() public view returns (uint256) {
        return value;
    }
}
