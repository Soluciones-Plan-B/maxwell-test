import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { MainContext } from "../Context/context";

import "../styles/globals.css";
import "../styles/clock.css";
import "../styles/card.css";
import "../styles/table.css";
import "../styles/header.css";
import "../styles/rates.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
   
  }, [cards]);

  return (
    <MainContext.Provider
      value={{
        cards,
        setCards,
      }}
    >
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}

export default MyApp;
