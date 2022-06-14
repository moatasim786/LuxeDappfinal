import hardhat from "hardhat";

export default async function getPrice(id, addr, name) {
  console.log(addr, name);
  const contractFactory = await hardhat.ethers.getContractFactory(
    "LuxeRacing" + name
  );
  const contract = contractFactory.attach(addr);
  const priceFunction = await contract.tokenIdToPrice;
  const price = await priceFunction(id);
  return price.toNumber();
}
