import MintPage from "../../components/Minter/MintPage";
import nft from "../../lib/nftRelations";

export default function page(props) {
  return (
    <div className="flex justify-center bg-geometric bg-cover bg-bottom bg-no-repeat">
      <MintPage
        name="Aventador"
        image="/nft_gif/AVENTADOR.gif"
        text="With a raucous 769-hp V-12 engine and an exotic exterior, the Aventador is the definition of a hyper car. While competitors such as the Ferrari SF90 embrace an electrified future, the Lambo's 12-cylinder mill swills fuel like a frat bro chugs a beer. Its scissor doors, wide and low proportions, and heavily vented bodywork double as a theater on wheels that's perpetually playing the Fast and Furious movies. Inside, its highly customizable cabin has room for two riders, but there's very little space to store loose items. Behind the wheel, the driver can activate the Aventador's shrieking soundtrack with a stab of their right foot or experience the massive machine's surprising agility by twirling the tiller. While its obsolete automatic transmission is almost as frustrating as the roadster's cumbersome roof removal, those are but a small penance for the Aventador's otherwise awesome powers and unmistakable style.Real World Price: $500k"
        contract={nft.Aventador.address}
        className="h-full w-full"
      />
    </div>
  );
}
