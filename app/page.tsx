import react from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import TwoProduct from "./components/Two-product";
import Toppicks from "./components/Top-picks";
import Herosame from "./components/Herosame";
import Insta from "./components/Insta";

export default function Home() {
  return(
    <>
    <Header />
    <Hero />
    <TwoProduct />
    <Toppicks />
    <Herosame />
    <Insta />
    </>
  )
}
