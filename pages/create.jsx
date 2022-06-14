import React from "react";

export default function Mint() {
  return (
    <div className="bg-repeat-y bg-cover bg-bg min-h-screen h-fit text-white w-fit">
      <div className="backdrop-brightness-200 min-h-screen h-full flex pt-24 justify-center">
        <input
          type="file"
          className="bg-amber-400 w-fit h-fit p-4 text-black"
        />
      </div>
    </div>
  );
}
