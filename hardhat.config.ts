require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const { PRIVATE_KEY, ETHERSCAN_API_KEY, TESTNET_URL } = process.env;

module.exports = {
  solidity: '0.8.17',
  networks: {
    linea: {
      url: TESTNET_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      linea: ETHERSCAN_API_KEY
    },
    customChains: [
      {
        network: 'linea',
        chainId: 59140,
        urls: {
          apiURL: 'https://explorer.goerli.linea.build/api',
          browserURL: 'https://explorer.goerli.linea.build/'
        }
      }
    ]
  }
};
