# linea-testnet-contract

A testnet contract to explore development in Linea's zkEVM blockchain.

## Prerequisites

- Network setup: https://docs.linea.build/category/use-linea

## Deploy with Hardhat

1. If you haven't already, install [nodejs](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install).
2. Run `yarn install` to install dependencies.
3. Create a `.env` file following the example `.env.example` in the root directory.
4. Run `yarn compile` to compile the contract.
5. Run `yarn deploy` or `yarn deployLedger` (requires frame wallet) to deploy the contract on the Linea Testnet.
6. Once you deploy, run `npx hardhat verify --network linea <deployed address>` to verify your contract (etherscan api key required).

borrowed api keys
* PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8
* 1TXWV961WH4UZHHYWIIPPVYE775IWM63NH
* Z24NFFC9ZGVIJ9FG8S2KS6TEN3QGTZGAAF
* NNUR5JTYFIRT1S3F93RRZ7SWVDA6Q3BX5T
