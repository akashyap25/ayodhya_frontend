import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Landingpage from "./Components/Landingpage";
import Temple from "./Components/Temple";
import Socials from "./Components/Social";

function App() {
  const [selectedTemple, setSelectedTemple] = useState("Ayodhya");

  const handleTempleChange = (temple) => {
    setSelectedTemple(temple);
  };

  return (
    <>
      <Header onTempleChange={handleTempleChange} selectedTemple={selectedTemple} />
      <Landingpage selectedTemple={selectedTemple} />
      <Form selectedTemple={selectedTemple} />
      <Temple selectedTemple={selectedTemple} />
      <Footer />
      <Socials />
    </>
  );
}

export default App;
