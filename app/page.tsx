import Hero from "./components/Hero";
import TwoProduct from "./components/Two-product";
import Toppicks from "./components/Top-picks";
import Herosame from "./components/Herosame";
import Insta from "./components/Insta";
import Blogs from "./components/Blogs";

export default function Home() {
  return(
    <>
    <Hero />
    <TwoProduct />
    {/* <Toppicks /> */}
    <Herosame />
    <Blogs />
    <Insta />
    </>
  )
}
