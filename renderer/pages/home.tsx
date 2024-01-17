import React from "react";
import Head from "next/head";
import Card from "./card";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>MaxWell | Soluciones Plan B</title>
      </Head>
      <Card />
    </React.Fragment>
  );
}
