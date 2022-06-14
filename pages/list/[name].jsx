import nftRelations from "../../lib/nftRelations";
import Link from "next/link";
import { useState } from "react";
import hardhat from "hardhat";
import Router from "next/router";

function ListView(props) {
  return (
    <div className="p-8">
      <div className="flex flex-col w-full justify-center py-8 px-5 bg-zinc-900 rounded-xl border border-zinc-800 shadow-xl">
        <div className="uppercase font-bold text-2xl md:text-3xl font-['Caveat'] pb-6">
          {props.name}
          <span className="text-xl pl-1">#{props.id}</span>
        </div>
        <div className="flex items-center">
          <div className="pr-8">
            <span className="hidden md:inline">Price:</span>
            <span className="md:text-2xl font-bold px-1">{props.data}</span>
            BNB
          </div>
          <Link href={"/buy/" + props.name + "@" + props.id} passHref>
            <div className="cursor-pointer w-fit font-bold text-black drop-shadow-md py-4 px-7 rounded-full transition-all ease-in-out hover:scale-110 duration-200 bg-amber-400">
              Buy
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function List(props) {
  let t = props.prices;
  console.log(t);
  const [query, setQuery] = useState("");
  const preventDefault = (f) => (e) => {
    e.preventDefault();
    f(e);
  };
  const handleSubmit = preventDefault(async () => {
    Router.push("/list/" + props.name + "-" + query);
  });
  let l = [];
  Object.entries(t).forEach((x) => {
    l.push(<ListView name={props.name} data={t[x[0]]} key={x[0]} id={x[0]} />);
  });
  console.log(props);
  const handleParam = (setQuery) => (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="text-white pt-32 min-h-screen">
      <h1 className="font-['Caveat'] font-bold text-xl md:text-3xl uppercase text-center m-auto pt-12 pb-20">
        Listing {props.name} NFTs on sale
      </h1>
      <div className="flex flex-col items-center pb-4 justify-center text-lg text-neutral-400">
        <div className="pb-4 text-center max-w-screen-sm px-4">
          Showing NFTs between ID {props.showing}
          <br />
          <br />
          To view listed NFTs please go from page 1 - page {props.max}, each
          page will show 25 nfts. or if you know the NFT ID, directly buy it by
          entering page number (if you want to buy #102, type 4 below to go to
          the page 4)
          <br />
        </div>
        <div className="pb-10 flex flex-col justify-center items-center">
          <div className="flex pb-4">
            {props.pagi > 1 && (
              <Link href={`/list/${props.name}-${props.pagi - 1}`} passHref>
                <div className="text-base mx-2 cursor-pointer w-fit text-black drop-shadow-md py-2 px-5 rounded-lg transition-all ease-in-out hover:scale-110 duration-200 bg-amber-400">
                  <span className="hidden md:inline">{"See "}</span>
                  Previous
                </div>
              </Link>
            )}
            <Link href={`/list/${props.name}-${props.pagi + 1}`} passHref>
              <div className="text-base mx-2 cursor-pointer w-fit text-black drop-shadow-md py-2 px-5 rounded-lg transition-all ease-in-out hover:scale-110 duration-200 bg-amber-400">
                <span className="hidden md:inline">{"See "}</span>
                Next
              </div>
            </Link>
          </div>
          <form className="h-full" onSubmit={handleSubmit}>
            <div className="pb-2 font-bold">Go to page:</div>
            <div className="flex items-end">
              <input
                id="search"
                type="number"
                value={query}
                onChange={handleParam(setQuery)}
                className="bg-gray-200 rounded-md py-1 px-4 w-32 text-black transition-all"
                aria-label="Search by address"
                placeholder="Page"
              />
              <button
                className="bg-gray-200 text-black ml-2 rounded-md px-4 py-1"
                type="submit"
              >
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="m-auto max-w-screen-xl">
        {l.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full m-auto">
            {l}
          </div>
        ) : (
          <div className="flex items-center justify-center text-lg text-neutral-400">
            No items on sale on this category
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  let split = name.split("-");
  let nft = split[0];
  let pagi = split[1];
  const pagiEach = 25;
  if (pagi == undefined) {
    return {
      redirect: {
        destination: "/list/" + nft + "-1",
        permanent: true,
      },
    };
  }
  try {
    pagi = parseInt(pagi);
  } catch {
    return {
      notFound: true,
    };
  }
  if (pagi < 0) {
    return {
      notFound: true,
    };
  }
  let x = {};
  if (nft == "pista") {
    x = nftRelations.Pista;
  } else if (nft == "aventador") {
    x = nftRelations.Aventador;
  } else if (nft == "amggt") {
    x = nftRelations.AMGGT;
  } else if (nft == "gt3") {
    x = nftRelations.GT3;
  } else if (nft == "gemera") {
    x = nftRelations.Gemera;
  } else if (nft == "tricolore") {
    x = nftRelations.Tricolore;
  } else {
    return {
      notFound: true,
    };
  }
  let max = Math.ceil(x.supply / pagiEach);
  if (pagi > max) {
    return {
      notFound: true,
    };
  }
  const contractFactory = await hardhat.ethers.getContractFactory(
    "LuxeRacing" + x.key
  );
  const contract = contractFactory.attach(x.address);
  const getPrice = await contract.tokenIdToPrice;
  const getPrices = async () => {
    let prices = {};
    for (const x of [...Array(pagiEach).keys()]) {
      let y = pagi * pagiEach - pagiEach + 1 + x;
      let price = (await getPrice(y)).toNumber();
      if (price > 0) {
        Object.assign(prices, { [y]: price });
      }
    }
    return prices;
  };
  return {
    props: {
      prices: await getPrices(),
      name: nft,
      pagi,
      max,
      showing: `${pagi * pagiEach - pagiEach + 1} - ${pagi * pagiEach}`,
    },
  };
}
