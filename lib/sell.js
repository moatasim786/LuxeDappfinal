import { ethers } from "ethers";
import nftRelations from "../lib/nftRelations";

export default async function sell(relation, id, price) {
  let currentToken = nftRelations[relation];
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer = provider.getSigner();
  let contract = new ethers.Contract(
    currentToken.address,
    currentToken.abi,
    signer
  );
  if (price == 0) {
    return await contract.disallowBuy(id);
  }
  return await contract.allowBuy(id, price);
}
