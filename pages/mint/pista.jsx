import MintPage from "../../components/Minter/MintPage";
import nft from "../../lib/nftRelations";

export default function page(props) {
  return (
    <div className="flex justify-center bg-geometric bg-cover bg-bottom bg-no-repeat">
      <MintPage
        name="Pista"
        image="/nft_gif/PISTA.gif"
        text="The 488 Pista is the stuff of supercar dreams. Broad-shouldered with bulging fenders and a graceful arch of a roof, this confident Italian stands out in a crowd. Its cabin is surprisingly spacious, offering more real estate than you typically find in a two-door sports car. When it comes to performance, the 488 provides the power and poise you'd come to expect. It rockets from a standstill to 60 mph in less than three seconds, and it whips through corners and barrels down straightaways with singular agility. The 488 costs about as much as a home in the suburbs, but if you have the means, it has the goods to thrill and excite.Real World Price: $330k"
        contract={nft.Pista.address}
        className="h-full w-full"
      />
    </div>
  );
}
