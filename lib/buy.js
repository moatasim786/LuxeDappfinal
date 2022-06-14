import nftRelations from "../lib/nftRelations";
import Moralis from "moralis";

export default async function buy(relation, id, price) {
  Moralis.start({
    appId: "Klpoi4TDuW0DrHfVjQkCgTJhfm8tsaNjeTZN595A",
    serverUrl: "https://rf995rjsqncp.usemoralis.com:2053/server",
  });
  await Moralis.enableWeb3();
  let currentToken = nftRelations[relation];
  console.log(currentToken);
  let options = {
    contractAddress: currentToken.address,
    functionName: "buyWithRoyalty",
    abi: currentToken.abi,
    params: {
      _tokenId: id,
    },
    msgValue: Moralis.Units.ETH(price),
  };
  await Moralis.executeFunction(options);
  console.log(price);
  // TODO: replace with "buy" only if this does not work
  /*   const result = await contract.payToMint(
    "0x77A78dfE9601aB7659dc79A0BC1B67796B639C6C",
    [1, 2, 3, 4],
    {
      value: ethers.utils.parseEther("1"),
    }
  ); */
}
