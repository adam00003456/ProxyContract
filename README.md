# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

How It Works:
Proxy Contract:

It holds the address of the logic contract (LogicV1 or LogicV2).
The proxy does not contain any business logic itself but delegates function calls to the logic contract using the delegatecall function.
Logic Contract (LogicV1):

It contains the actual business logic, such as setting and getting a value.
Upgradeability:

The Proxy contract can be upgraded by changing the logicContract address to a new logic contract (LogicV2).
This means you can update the logic of your application without having to change the state or redeploy the proxy contract.
Deployment and Interaction:
Deploy the LogicV1 contract.
Deploy the Proxy contract, passing the LogicV1 address to the constructor.
Interact with the Proxy contract, which will delegate calls to LogicV1.
To upgrade, deploy LogicV2 and call updateLogicContract on the Proxy contract with the address of LogicV2.
