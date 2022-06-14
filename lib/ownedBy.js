import Moralis from "moralis/node";
import nftRelations from "./nftRelations";

export default async function ownedBy(address) {
  Moralis.start({
    appId: "Klpoi4TDuW0DrHfVjQkCgTJhfm8tsaNjeTZN595A",
    serverUrl: "https://rf995rjsqncp.usemoralis.com:2053/server",
  });
  var out = [];
  const test = await Moralis.Web3API.account.getNFTsForContract({
    chain: "bsc",
    address,
    token_address: nftRelations.AMGGT.address,
  });
  out.push(
    await Moralis.Web3API.account.getNFTsForContract({
      chain: "bsc",
      address,
      token_address: nftRelations.Pista.address,
    })
  );
  out.push(
    await Moralis.Web3API.account.getNFTsForContract({
      chain: "bsc",
      address,
      token_address: nftRelations.AMGGT.address,
    })
  );
  out.push(
    await Moralis.Web3API.account.getNFTsForContract({
      chain: "bsc",
      address,
      token_address: nftRelations.Aventador.address,
    })
  );
  out.push(
    await Moralis.Web3API.account.getNFTsForContract({
      chain: "bsc",
      address,
      token_address: nftRelations.GT3.address,
    })
  );
  out.push(
    await Moralis.Web3API.account.getNFTsForContract({
      chain: "bsc",
      address,
      token_address: nftRelations.Gemera.address,
    })
  );
  out.push(
    await Moralis.Web3API.account.getNFTsForContract({
      chain: "bsc",
      address,
      token_address: nftRelations.Tricolore.address,
    })
  );
  console.log(out.map((x) => x.result.owner_of));
  return out;
}
