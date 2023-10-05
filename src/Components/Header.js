import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";

const slogans = [
  "कण कण में विष्णु बसें जन जन में श्रीराम,\n प्राणों में माँ जानकी मन में बसे हनुमान",
  "हनुमान हैं नाम महान, हनुमान करे बेड़ा पार,\n जो जपता हैं नाम हनुमान, होते सब दिन एक समान।",
  "राम जिनका नाम है, अयोध्या जिनका धाम है,\n ऐसे रघुनंदन को, हमारा प्रणाम है."
];

const Header = () => {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSloganIndex((prevIndex) =>
        (prevIndex + 1) % slogans.length
      );
    }, 10000); // Change slogan every 10 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header className="flex flex-col mb-6 lg:mb-8 w-full ">
      <div className="flex w-full h-14 justify-center bg-orange-500"></div>
      <div className="flex items-center">
        <img
          src={logo}
          alt=""
          className="lg:mr-4 ml-8 max-w-full h-auto lg:w-auto"
          style={{ maxWidth: "150px" }}
        />
        <span>
          <h1 className="text-2xl font-bold text-orange-500">
            प्रसाद आपके द्वार
          </h1>
          <h3 className="ml-2 font-semibold text-sm">prasadaapkedwaar.in</h3>
        </span>
        <p className="hidden lg:block ml-80 mt-4 text-lg font-bold italic text-slate-700" style={{ whiteSpace: "pre-line" }}>
          {slogans[currentSloganIndex]}
        </p>
      </div>
    </header>
  );
};

export default Header;
