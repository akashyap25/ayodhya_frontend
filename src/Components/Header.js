import React, { useState } from "react";
import logo from "../Assets/ayodhyalogo.png";

const Header = () => {

  return (
    <header className="flex w-full p-4 lg:p-8 items-center justify-center lg:items-center lg:justify-between">
      <div className="flex items-center">
        <img
          src={logo}
          alt=""
          className="lg:mr-4 max-w-full h-auto lg:w-auto"
          style={{ maxWidth: "150px" }}
        />
        <h1 className="text-2xl font-bold text-orange-500">प्रसाद आपके द्वार</h1>
      </div>
    </header>
  );
};

export default Header;
