//Deploys LogicV2.
//Connects to the existing Proxy contract.
//Calls updateLogicContract to switch the logic contract to LogicV2.
//Demonstrates interaction with the proxy to verify that the upgrade worked.


async function main() {
    const Proxy = await ethers.getContractFactory("Proxy");
    const LogicV2 = await ethers.getContractFactory("LogicV2");
  
    // Assuming proxy is already deployed, enter its address
    const proxyAddress = "ENTER_PROXY_CONTRACT_ADDRESS";
  
    // Deploy LogicV2 (the upgraded logic contract)
    const logicV2 = await LogicV2.deploy();
    await logicV2.deployed();
    console.log("LogicV2 deployed to:", logicV2.address);
  
    // Connect to the existing Proxy contract
    const proxy = Proxy.attach(proxyAddress);
  
    // Update the proxy to use LogicV2
    const tx = await proxy.updateLogicContract(logicV2.address);
    await tx.wait();
    console.log("Proxy upgraded to LogicV2");
  
    // Verify that the proxy is now using LogicV2
    const logicV2Instance = await ethers.getContractAt("LogicV2", proxy.address);
    const tx2 = await logicV2Instance.setValue(21);
    await tx2.wait();
    const value = await logicV2Instance.getValue();
    console.log("Value through proxy after upgrade (should be 42):", value.toString());
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  