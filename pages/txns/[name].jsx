import nftRelations from "../../lib/nftRelations";
import Moralis from "moralis/node";
import Link from "next/link";

/* 
amount: "1"
block_hash: "0x9aad7469339f2a3e7a14e692c3abf8f66a1705e81105b3711605fac7e9ea48c8"
block_number: "16375032"
block_timestamp: "2022-03-25T19:44:45.000Z"
contract_type: "ERC721"
from_address: "0x0000000000000000000000000000000000000000"
log_index: 307
operator: null
to_address: "0xa957a7f4d684966909680119a0cb06a593dc0645"
token_address: "0x222f0aa06a64ee1d880ee23c4e67eb068ae52219"
token_id: "18"
transaction_hash: "0x39a21d083ca7003658272e866ddc7a7d16f0e05e674461023ebb3599a7edf323"
transaction_index: 86
transaction_type: "Single"
value: "0"
verified: 1
*/

function TxnView(props) {
  const nftIdentifier = props.name + "@" + props.data.token_id;
  return (
    <div className="break-all">
      <div className="py-8 px-16">
        <div className="p-12 bg-neutral-900 rounded-3xl border-2 border-neutral-800 max-w-screen-2xl m-auto">
          <div className="flex 2xl:flex-row flex-col justify-between">
            <div className="flex flex-col justify-center">
              <h1 className="pb-2 pt-6">
                <span className="text-3xl font-bold">Transaction</span>
                {props.data.verified == 1 ? (
                  <span className="bg-emerald-300 text-emerald-900 font-bold px-2 rounded-md m-2 text-sm">
                    Verified
                  </span>
                ) : (
                  <span className="text-xs">(Not Verified)</span>
                )}
              </h1>
              <p>
                <b>From: </b>{" "}
                <span>
                  {props.data.from_address ==
                  "0x0000000000000000000000000000000000000000"
                    ? "Null Address 0x0000... (Mint)"
                    : props.data.from_address}
                </span>
              </p>
              <p>
                <b>To: </b>
                <span>{props.data.to_address}</span>
              </p>
              <p>
                <b>Contract: </b>
                <p>
                  <span>{props.data.token_address}</span>
                </p>
              </p>
              <div className="font-bold text-lg pt-4 pb-6 cursor-pointer underline">
                <Link
                  href={"https://bscscan.com/tx/" + props.data.transaction_hash}
                >
                  See on bscscan
                </Link>
              </div>
            </div>
            <div className="bg-neutral-800 h-full p-8 rounded-xl flex flex-col justify-center">
              <div>
                <h2 className="text-xl font-bold py-2">Transaction Info:</h2>
              </div>
              <div>
                <b>TXN Hash: </b>
                <span>{props.data.transaction_hash}</span>
              </div>
              <div className="uppercase">
                <b>On NFT: </b>
                <span>{nftIdentifier}</span>
              </div>
              <div>
                <b>On Block: </b>
                <span>{props.data.block_number}</span>
              </div>
              <div>
                <b>Timestamp: </b>
                <span>{props.data.block_timestamp}</span>
              </div>
              <div className="pt-6 cursor-pointer">
                <Link href={"/buy/" + nftIdentifier} passHref>
                  <span className="bg-white text-black font-bold px-4 py-2 text-xl rounded-md">
                    Go to item page
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function txns(props) {
  const t = props.txns.result;
  let l = [];
  t.forEach((txn) => {
    l.push(<TxnView name={props.name} data={txn} key={txn.block_number} />);
  });
  return (
    <div className="text-white pt-32 min-h-screen">
      <h1 className="font-['Caveat'] font-bold text-4xl uppercase text-center m-auto pt-12 pb-8">
        Transactions for {props.name}
      </h1>
      {l}
    </div>
  );
}

export async function getServerSideProps(context) {
  Moralis.start({
    serverUrl: "https://rf995rjsqncp.usemoralis.com:2053/server",
    appId: "Klpoi4TDuW0DrHfVjQkCgTJhfm8tsaNjeTZN595A",
  });
  const { name } = context.query;
  let x = {};
  if (name == "pista") {
    x = nftRelations.Pista;
  } else if (name == "aventador") {
    x = nftRelations.Aventador;
  } else if (name == "amggt") {
    x = nftRelations.AMGGT;
  } else if (name == "gt3") {
    x = nftRelations.GT3;
  } else if (name == "gemera") {
    x = nftRelations.Gemera;
  } else if (name == "tricolore") {
    x = nftRelations.Tricolore;
  } else {
    return {
      notFound: true,
    };
  }
  const address = x.address;
  const options = { address, chain: "bsc" };
  const txns = await Moralis.Web3API.token.getContractNFTTransfers(options);
  return {
    props: {
      txns,
      name,
    },
  };
}
