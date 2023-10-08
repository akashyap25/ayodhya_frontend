import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <header className="flex flex-col mb-6 lg:mb-8 w-full">
      <div className="flex w-full h-8 lg:h-8 items-center font-semibold text-base justify-center bg-orange-500 overflow-hidden">
        <p className="marquee text-white">
         || ॐ नमः शिवाय || हनुमान जी || प्रभु श्री राम || राधा रानी ||
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-between lg:items-center">
        <div className="flex items-center w-full gap-6 lg:w-auto">
          <img
            src={logo}
            alt=""
            className="lg:mr-4 max-w-full h-auto lg:w-auto"
            style={{ maxWidth: "150px" }}
          />
          <span>
            <h1 className="text-2xl font-bold text-orange-500">
              प्रसाद आपके द्वार
            </h1>
            <h3 className="ml-2 font-semibold text-sm">prasadaapkedwaar.in</h3>
          </span>
        </div>
        <div className="flex items-center mx-auto gap-4 lg:gap-16">
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold text-xl py-2 px-4 lg:px-8 lg:py-4 rounded-lg hover:bg-orange-600 transition duration-200 mb-2 lg:mb-0"
          >
            Ayodhya
          </button>

          <button
            type="submit"
            className="bg-orange-700 text-white font-semibold text-xl py-2 px-4 lg:px-8 lg:py-4 rounded-lg hover:bg-orange-500 transition duration-200 mb-2 lg:mb-0"
          >
            Mathura
          </button>

          <button
            type="submit"
            className="bg-orange-700 text-white font-semibold text-xl py-2 px-4 lg:px-8 lg:py-4 rounded-lg hover:bg-orange-500 transition duration-200 mb-2 lg:mb-0"
          >
            Varanasi
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
