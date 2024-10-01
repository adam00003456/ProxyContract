require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

const { alchemyApiKey, sepoliaPrivateKey } = require('./secrets.json');

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.27",  // Add this to match the pragma in your contract
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/5e87273b19c24809abed377c3a41ecc0`,
      accounts: [`0x9bed1adc6e63641ba03e7e4d8afbc2d6b1dad27ecd03ce5a39315215bad42877`]
    }
  },
  etherscan: {
    apiKey: "ZWRCWYQDIYJ8JZ1SYASA21HGS2P1RDT6EV"
  }
};
