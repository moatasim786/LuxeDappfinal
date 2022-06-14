import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white duration-300 ease-in-out min-h-screen h-fit bg-wall bg-cover bg-bottom bg-no-repeat">
      <div className="min-h-screen h-full flex flex-col items-center pt-10 pd-32 justify-center">
        <div className="h-72 w-80 relative">
          <Image src="/logo.webp" layout="fill" alt="logo" />
        </div>
        <div className="flex flex-col xl:flex-row gap-20 px-8 brightness-110 select-none">
          <Link href="/staking" passHref>
            <div className="cursor-pointer py-16 px-10 flex items-center justify-center flex-col text-center rounded-xl shadow-lg border border-neutral-600 h-96 flex-1 bg-geometric bg-cover bg-bottom bg-no-repeat">
              <h2 className="font-bold text-3xl pb-8">LuxeStaking</h2>
              <p className="text-sm">
                Stake your luxeracing tokens for exciting apy and Auto
                compounding.
                <br />
                - No Max/Min Stake <br />
                - 30 Day Minimum Lock <br />
                - Automatic Compounding <br />
                - 10% Early Withdrawal Fee <br />
              </p>
            </div>
          </Link>
          <Link href="/minting" passHref>
            <div className="cursor-pointer py-16 px-10 flex items-center justify-center flex-col text-center rounded-xl shadow-lg border border-neutral-600 h-96 flex-1 bg-geometric bg-cover bg-bottom bg-no-repeat">
              <h2 className="font-bold text-3xl pb-8">LuxeNFT</h2>
              <p className="text-sm">
                Mint Luxeracing Genesis NFTs Set here which you can use to play
                in-game. - 100k $Luxetoken to mint <br />
                - 5 cars in Genesis Set <br />
                - Buy and Sell Them on Tofu <br />
                - view NFT data on metricspitstop <br />
              </p>
            </div>
          </Link>
        </div>
        <div className="max-w-screen-xl py-10">
          <div className="bg-cyan-500 flex gap-6 rounded-full py-2 px-8 shadow-xl">
            <Link href="https://discord.gg/LuxeMeta" passHref>
              <Image src="/socials/Discord.webp" height="48" width="48" />
            </Link>
            <Link href="https://www.reddit.com/r/LuxeRacing" passHref>
              <Image src="/socials/Reddit.webp" height="48" width="48" />
            </Link>
            <Link href="https://t.me/LuxeMetaOfficial" passHref>
              <Image src="/socials/Telegram.webp" height="48" width="48" />
            </Link>
            <Link href="https://twitter.com/luxemeta" passHref>
              <Image src="/socials/Twitter.webp" height="48" width="48" />
            </Link>
            <Link href="https://luxeracing.tech/" passHref>
              <Image src="/socials/Website.webp" height="48" width="48" />
            </Link>
            <Link href="https://www.youtube.com/c/LuxeMeta" passHref>
              <Image src="/socials/YouTube.webp" height="48" width="48" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
