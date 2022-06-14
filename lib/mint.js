import { ethers } from "ethers";
import nft, { luxeToken } from "./nftRelations";
import Luxe from "../artifacts/contracts/Luxe.sol/LuxeToken.json";

export default async function mint(tokenName) {
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer = provider.getSigner();
  let currentToken = nft[tokenName];
  const luxe = new ethers.Contract(luxeToken.mainnet, Luxe.abi, signer);
  let userAddr = await signer.getAddress();
  let allowance = await luxe.allowance(userAddr, currentToken.address);
  allowance = parseInt(allowance._hex, 16);
  console.log(allowance);

  if (allowance < BigInt(150001 * 10 ** 18)) {
    luxe.approve(currentToken.address, BigInt(150001 * 10 ** 18));
  } else {
    // set up constants like contract, signer, provider etc.
    console.log("user addr:", userAddr);
    let contract = new ethers.Contract(
      currentToken.address,
      currentToken.abi,
      signer
    );
    const contractAddr = contract.connect(signer).address;
    console.log("contract addr:", contractAddr);

    // end

    // process minting payment using contract
    const result = await contract.luxeMint();
    // end
    console.log(result);
    return { result, err: null };
  }
}
