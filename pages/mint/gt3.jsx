import MintPage from "../../components/Minter/MintPage";
import nft from "../../lib/nftRelations";

export default function page(props) {
  return (
    <div className="flex justify-center bg-geometric bg-cover bg-bottom bg-no-repeat">
      <MintPage
        name="GT3"
        image="/nft_gif/GT3.gif"
        text="With an exclusive naturally aspirated engine and race car-inspired components, the GT3 RS is optimized for driver engagement and track-day glory. The GT3 RS is also the only 911 that's not turbocharged, and the responsive nature and immersive sounds of its 580-hp 4.0-liter flat-six qualify as inspirational. The specialness of the rear-mounted mill is further realized by the telepathic seven-speed PDK automatic transmission or the rewarding six-speed manual. Thanks to a unique suspension setup and track-focused tire options, the GT3 RS has a surprisingly supple, albeit firm, ride and incredible steering feel that are just a few of the reasons it's so exhilarating to drive.Real World Price: $350k"
        contract={nft.GT3.address}
        className="h-full w-full"
      />
    </div>
  );
}
