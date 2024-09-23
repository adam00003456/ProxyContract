// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Proxy {
    // Storage slot to store the address of the logic contract
    address public logicContract;

    constructor(address _logicContract) {
        logicContract = _logicContract;
    }

    // Fallback function will delegate calls to the logic contract
    fallback() external payable {
        address _impl = logicContract;
        require(_impl != address(0), "Logic contract address is not set.");

        assembly {
            // Load the calldata into memory
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())

            // Call the logic contract
            let result := delegatecall(gas(), _impl, ptr, calldatasize(), 0, 0)

            // Get the size of the returned data
            let size := returndatasize()

            // Copy the returned data
            returndatacopy(ptr, 0, size)

            // If the call failed, revert
            if eq(result, 0) {
                revert(ptr, size)
            }

            // Return the data
            return(ptr, size)
        }
    }

    // Function to update the logic contract address (upgradeability)
    function updateLogicContract(address _newLogicContract) public {
        require(_newLogicContract != address(0), "New logic contract cannot be zero address.");
        logicContract = _newLogicContract;
    }
}
