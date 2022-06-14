import Minter from "../components/Minter/Minter.jsx";
import Image from "next/image";
import mint from "../lib/mint";

export default function Home() {
  return (
    <div className="text-white duration-300 ease-in-out min-h-screen h-fit  bg-bottom bg-cover bg-no-repeat bg-geometric">
      <div className="min-h-screen h-full flex flex-col items-center pt-10 pd-32 justify-center">
        <div className="w-full flex justify-center h-fit">
          <div className="flex h-full p-12 pt-24 md:p-24 items-center flex-col gap-16 md:flex-row max-w-screen-2xl">
            <div className="w-full h-fit items-center md:justify-start justify-center flex flex-col gap-6 text-center">
              <div className="font-['Caveat'] text-5xl text-amber-300 text-center lg:text-left">
                <span className="text-white">Experience </span>
                Your NFTs Like Never Before
              </div>
              <div className="text-lg">
                LUXE RACING&apos;S OFFICIAL NFT MARKETPLACE FOR BUYING,SELLING
                AND VIEWING OUR NFT SETS THAT CAN BE USED IN-GAME FOR RACING,
                AUCTIONS AND MUCH MORE. JOIN LUXE RACING&apos;S COMMUNITIES FOR
                MORE INFO :
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center content-start md:-mt-0 -mt-64">
          <Minter />
        </div>
      </div>
    </div>
  );
}
