import MintPage from "../../components/Minter/MintPage";
import nft from "../../lib/nftRelations";

export default function page(props) {
  return (
    <div className="flex justify-center bg-geometric bg-cover bg-bottom bg-no-repeat">
      <MintPage
        name="AMGGT"
        image="/nft_gif/AMGGT.gif"
        text="For only the sixth time in history, an AMG Black Series has arrived only to go fast, very fast. Its aerodynamic and technical similarity to the highly successful AMG GT3 and GT4 racers is evident in its form, and its formidable power. With 720 hp, the handcrafted biturbo engine is the most powerful V8 AMG has ever unleashed on the street. A ‘flat-plane’ crankshaft, 24.6 psi of max boost, and dry-sump lubrication team up to reach 60 in 3.1 seconds, 120 in under 9 seconds, and a top speed of 202 mph. High-resolution, reconfigurable digital displays and ergonomic controls anchor the stylishly functional cockpit. Bespoke materials, from the dash to the AMG Performance seats, are geared toward precise control and enduring comfort even in the most spirited driving.Real World Price: $325k"
        contract={nft.AMGGT.address}
        className="h-full w-full"
      />
    </div>
  );
}
