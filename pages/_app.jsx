import "../styles/globals.css";
import Header from "../components/Header";
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis";

function MyApp({ Component, pageProps }) {
  return (
    /*
     *
     *  appId="Klpoi4TDuW0DrHfVjQkCgTJhfm8tsaNjeTZN595A"
     *  serverUrl="https://rf995rjsqncp.usemoralis.com:2053/server"
     *
     */
    <MoralisProvider
      appId="Klpoi4TDuW0DrHfVjQkCgTJhfm8tsaNjeTZN595A"
      serverUrl="https://rf995rjsqncp.usemoralis.com:2053/server"
    >
      <header>
        <Header />
      </header>
      <main
        style={{
          background: "#111012",
        }}
      >
        <Component {...pageProps} />
      </main>
    </MoralisProvider>
  );
}

export default MyApp;

export function getServerSideProps() {
  Moralis.start({
    appId: "Klpoi4TDuW0DrHfVjQkCgTJhfm8tsaNjeTZN595A",
    serverUrl: "https://rf995rjsqncp.usemoralis.com:2053/server",
  });
}
