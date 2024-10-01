async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy the LogicV1 contract
  const LogicV1Factory = await ethers.getContractFactory("LogicV1");
  const logicV1 = await LogicV1Factory.deploy(); // Deploy LogicV1 with its constructor arguments, if any
  await logicV1.deployed();
  console.log("LogicV1 contract deployed to address:", logicV1.address);

  // Use the address of the deployed LogicV1 contract for the Proxy contract deployment
  const logicContractAddress = logicV1.address;

  // Deploy the Proxy contract with the logicContractAddress as the constructor argument
  const ProxyFactory = await ethers.getContractFactory("Proxy");
  const proxy = await ProxyFactory.deploy(logicContractAddress);
  await proxy.deployed();
  console.log("Proxy contract deployed to address:", proxy.address);
}

main().catch((error) => {
  console.error("Error deploying contracts:", error);
  process.exitCode = 1;
});
