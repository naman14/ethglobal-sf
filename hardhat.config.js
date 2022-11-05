require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["7d5ac5fa9242bc58cd1f1d93e0fbe99d18d73d7db18018593796a92bdf08b280"] // 0x182f47576bCFa1B9e2317495399cc6a0C3DE8f86
     }
  }
};
