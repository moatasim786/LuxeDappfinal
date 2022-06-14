import Pista from "../artifacts/contracts/Pista.sol/LuxeRacingPista.json";
import AMGGT from "../artifacts/contracts/AMGGT.sol/LuxeRacingAMGGT.json";
import Aventador from "../artifacts/contracts/Aventador.sol/LuxeRacingAventador.json";
import Gemera from "../artifacts/contracts/Gemera.sol/LuxeRacingGemera.json";
import GT3 from "../artifacts/contracts/GT3.sol/LuxeRacingGT3.json";
import Tricolore from "../artifacts/contracts/Tricolore.sol/LuxeRacingTricolore.json";

let nft = {
  Pista: {
    key: "Pista",
    abi: Pista.abi,
    address: "0xc7F7F0282fCDe1eD27d2B51C9cC04D38Dc1A16dC",
    supply: 500,
    //  0xc7F7F0282fCDe1eD27d2B51C9cC04D38Dc1A16dC    mainnet
    //  0xb203283914B1Fe83F5F0423a95eBdF33AA21B397    testnet (deprecated, v2 was deployed)
  },
  AMGGT: {
    key: "AMGGT",
    abi: AMGGT.abi,
    address: "0x2F07dC6962B07d03C39725527b4FE4f6BeaB3955",
    supply: 500,
  },
  Aventador: {
    key: "Aventador",
    abi: Aventador.abi,
    address: "0x97Ffff4ba0a53aAb94b17e848e68FB0173247e3F",
    supply: 500,
  },
  Gemera: {
    key: "Gemera",
    abi: Gemera.abi,
    address: "0xdA5fc981f38A79DE259D0EF85a06b10d9EEec2aC",
    supply: 500,
  },
  GT3: {
    key: "GT3",
    abi: GT3.abi,
    address: "0xE5c521843D9034fAa423bFD4753976ecB8a084df",
    supply: 500,
  },
  Tricolore: {
    key: "Tricolore",
    abi: Tricolore.abi,
    address: "0xAB4b70075b84CbBb604F43887434AAf6073A2be1",
    supply: 150,
  },
};

export const luxeToken = {
  testnet: "0x24a1C7ba7d7f8C6D55A4724252C779cAb9DDb96a", // deprecated, v2 was deployed
  mainnet: "0x13D5e09c1E2648cb94D1AD67eD266D581F6E1926",
};

export default nft;
