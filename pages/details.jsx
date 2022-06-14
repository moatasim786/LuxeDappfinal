import Moralis from "moralis";
import Image from "next/image";

export async function getServerSideProps(context) {
  Moralis.start({
    appId: "Klpoi4TDuW0DrHfVjQkCgTJhfm8tsaNjeTZN595A",
    serverUrl: "https://rf995rjsqncp.usemoralis.com:2053/server",
  });
  const options = {
    address: context.query.add,
    token_id: context.query.id,
    chain: "bsc",
  };
  const tokenIdMetadata = await Moralis.Web3API.token.getTokenIdMetadata(
    options
  );
  console.log(tokenIdMetadata);
  return {
    props: {
      data: tokenIdMetadata,
    },
  };
}

export default function details(props) {
  return (
    <div className="text-white bg-bg bg-contain bg-no-repeat bg-bottom bg-black pt-36 pb-16 min-h-screen">
      <div className="h-full">
        <div className="h-full justify-center items-center lg:items-start flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col h-full">
            <div className="w-[25rem] h-[25rem] relative rounded-xl">
              <Image
                src={
                  props.data.name != "LuxeRacingNFT Tricolore"
                    ? "https://ipfs.io/ipfs/" +
                      JSON.parse(props.data.metadata).image.substring(7)
                    : "/nft_gif/TRICOLORE.gif"
                }
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:max-w-[50%] max-w-[80%]">
            <div className="flex flex-col text-4xl text-black bg-slate-100 rounded-2xl p-10 drop-shadow-xl">
              <div className="font-['Caveat'] lg:text-8xl text-6xl font-black text-yellow-600">
                {props.data.name.substring(14) + " #" + props.data.token_id}
              </div>{" "}
              <br />
              <div>
                <span className="font-bold">Owned By </span>
                <span className="lg:block hidden">
                  {props.data.owner_of.substring(0, 16) + "..."}
                </span>
                <span className="lg:hidden block">
                  {props.data.token_address.substring(0, 10) + "..."}
                </span>
              </div>
            </div>
            <div className="flex flex-col text-4xl text-black bg-slate-100 rounded-2xl p-10 pb-0 drop-shadow-xl">
              <span className="font-bold">Model </span>{" "}
              <span className="text-2xl">{props.data.name.substring(14)}</span>{" "}
              <br />
              <span className="font-bold">Description </span>{" "}
              <span className="text-2xl">
                {JSON.parse(props.data.metadata) != null
                  ? JSON.parse(props.data.metadata).description
                  : "No Description"}
              </span>{" "}
              <br />
              <span className="font-bold flex flex-col gap-4">
                {JSON.parse(props.data.metadata) != null
                  ? JSON.parse(props.data.metadata).attributes.map((data) => (
                      <div className="flex flex-col">
                        {data.trait_type}
                        <span className="text-2xl font-normal">
                          {data.value}
                        </span>
                      </div>
                    ))
                  : "No Attributes"}
              </span>{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
