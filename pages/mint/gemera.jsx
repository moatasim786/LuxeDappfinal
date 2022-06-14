import MintPage from "../../components/Minter/MintPage";
import nft from "../../lib/nftRelations";

export default function page(props) {
  return (
    <div className="flex justify-center bg-geometric bg-cover bg-bottom bg-no-repeat">
      <MintPage
        name="Gemera"
        image="/nft_gif/GEMERA.gif"
        text="This four-seater is powered by a sequentially turbocharged 2.0-liter inline-three, which is nicknamed the ‘tiny friendly giant’. It makes 592 horsepower and 443 lb-ft of torque and works in conjunction with three electric motors and a single-speed direct-drive transmission. Together, these motors make 1677 horsepower and 2581 lb-ft of torque. A 395-hp electric motor on the crankshaft powers the front wheels, and there are two other electric motors powering each rear wheel. Like most modern cars today, the Gemera has two huge central touchscreen (13.0 inches, one in front and one in back), with a gauge cluster screen and two other screens for the side and rearview cameras.Real World Price: $1.7m"
        contract={nft.Gemera.address}
        className="h-full w-full"
      />
    </div>
  );
}
