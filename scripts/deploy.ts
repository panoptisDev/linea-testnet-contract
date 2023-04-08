import { ethers } from 'hardhat';

async function main() {
  const NFT = await ethers.getContractFactory('LineaTestNFT');
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log('NFT Contract Deployed at ' + nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// To Verify:
// npx hardhat verify --network linea <deployed address>
