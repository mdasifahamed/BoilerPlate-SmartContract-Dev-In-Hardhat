require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    local: {
      url: "localhost",
    },
    infura_sepolia_testnet: {
      url: `${process.env.INFURA_TESTNET_PROVIDER_URL}+\+${process.env.INFURA_TESTNET_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    infura_mainnet: {
      url: `${process.env.INFURA_MAINNET_PROVIDER_URL}+\+${process.env.INFURA_MAINNET_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    alchemy_sepolia_testnet: {
      url: `${process.env.ALCHEMY_TESTNET_PROVIDER_URL}+\+${process.env.ALCHEMY_TESTNET_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    alchemy_mainnet_testnet: {
      url: `${process.env.ALCHEMY_MAINNET_PROVIDER_URL}+\+${process.env.ALCHEMY_MAINNET_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      infura_sepolia_testnet: process.env.ETHERSCAN_TESTNET_API,
      infura_mainnet: process.env.ETHERSCAN_MAINNET_API,
      alchemy_sepolia_testnet: process.env.ETHERSCAN_TESTNET_API,
      alchemy_mainnet_testnet: process.env.ETHERSCAN_MAINNET_API,
    },
  },
};
