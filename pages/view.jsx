import { useState } from "react";
import { useRouter } from "next/router";

export default function Profile(props) {
  const preventDefault = (f) => (e) => {
    e.preventDefault();
    f(e);
  };
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleParam = (setValue) => (e) => setValue(e.target.value);

  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: `/address/${query}`,
    });
  });
  return (
    <div className="text-white min-h-screen flex flex-col w-full pt-20">
      <div className="w-auto h-[80vh] bg-bg bg-cover bg-bottom bg-no-repeat">
        <div className="w-full h-14 flex flex-row bg-yellow-500 fixed items-center z-50">
          <form className="w-full h-full" onSubmit={handleSubmit}>
            <input
              id="search"
              type="text"
              value={query}
              onChange={handleParam(setQuery)}
              className="bg-white h-full px-4 md:w-80 w-full text-black transition-all"
              aria-label="Search by address"
              placeholder="Search by wallet address 0x1234..."
            />
          </form>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-10 text-center items-center p-16">
            <p className="font-['Caveat'] text-yellow-500 text-5xl md:text-7xl">
              NFT Browser
            </p>
            <p className="font-['Caveat'] text-white text-4xl md:text-5xl">
              View your NFTs or use the searchbar to search for an address.{" "}
              <br />
              <span className="text-2xl">
                *If there are no entries down below, you or the address you have
                searched owns no NFTs.
              </span>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
