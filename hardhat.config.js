require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["7d5ac5fa9242bc58cd1f1d93e0fbe99d18d73d7db18018593796a92bdf08b280"] // 0x182f47576bCFa1B9e2317495399cc6a0C3DE8f86
     }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "SR68Y694EKG4GYNXIYRC5I9QJ3937P7JFU"
  }
};
