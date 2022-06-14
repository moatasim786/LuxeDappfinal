import nft from "./nftRelations";

function reverseRelation(addr) {
  let a = addr.toUpperCase();
  if (a == nft.Pista.address.toUpperCase()) return nft.Pista.key;
  if (a == nft.AMGGT.address.toUpperCase()) return nft.AMGGT.key;
  if (a == nft.Aventador.address.toUpperCase()) return nft.Aventador.key;
  if (a == nft.Gemera.address.toUpperCase()) return nft.Gemera.key;
  if (a == nft.GT3.address.toUpperCase()) return nft.GT3.key;
  if (a == nft.Tricolore.address.toUpperCase()) return nft.Tricolore.key;
}

export default reverseRelation;
