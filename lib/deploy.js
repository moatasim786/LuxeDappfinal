const { ethers } = require("hardhat");

async function main() {
  const factory = await ethers.getContractFactory("MyNFT");
  const NFT = await factory.deploy();
  await NFT.deployed();
  console.log("Contract address:", NFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
