import React from "react";

import Navbar from "./Navbar";

const Header = ({ onTempleChange, selectedTemple }) => {
  const handleTempleClick = (temple, label) => {
    onTempleChange(temple);
  };

  return (
    <header className="flex flex-col mb-6 lg:mb-8 w-full">
      {/* <div className="flex w-full h-8 lg:h-8 items-center font-semibold text-base justify-center bg-orange-500 overflow-hidden">
        <p className="marquee text-white">
          || ॐ नमः शिवाय || हनुमान जी || प्रभु श्री राम || राधा रानी ||
        </p>
       
      </div> */}
      <Navbar/>
      <div className="flex flex-col items-center lg:flex-row justify-between lg:items-center">
        
        <div className="flex flex-wrap justify-center items-center mx-auto gap-4 lg:gap-16">
          <button
            type="submit"
            className={`${
              selectedTemple === "Ayodhya" ? "bg-orange-500" : "bg-orange-700"
            } text-white font-semibold text-xl py-2 px-4 lg:px-8 lg:py-4 rounded-lg hover:bg-orange-600 transition duration-200 mb-2 lg:mb-0`}
            onClick={() => handleTempleClick("Ayodhya", "अयोध्या")}
          >
            Ayodhya
          </button>

          <button
            type="submit"
            className={`${
              selectedTemple === "Mathura" ? "bg-orange-500" : "bg-orange-700"
            } text-white font-semibold text-xl py-2 px-4 lg:px-8 lg:py-4 rounded-lg hover:bg-orange-500 transition duration-200 mb-2 lg:mb-0`}
            onClick={() => handleTempleClick("Mathura", "मथुरा")}
          >
            Mathura
          </button>

          <button
            type="submit"
            className={`${
              selectedTemple === "Varanasi" ? "bg-orange-500" : "bg-orange-700"
            } text-white font-semibold text-xl py-2 px-4 lg:px-8 lg:py-4 rounded-lg hover:bg-orange-500 transition duration-200 mb-2 lg:mb-0`}
            onClick={() => handleTempleClick("Varanasi", "वाराणसी")}
          >
            Varanasi
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
