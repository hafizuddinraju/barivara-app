import Head from "next/head";
import { Features } from "../components/Features";

import { Header } from "../components/Header/Header";

import Topbar from "../components/Topbar";



export default function Home() {
  return (
    <>
      <Head>
        <title>Barivara</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Topbar></Topbar>
        <Header></Header>
        <Features></Features>
        
        
      </main>
    </>
  );
}
