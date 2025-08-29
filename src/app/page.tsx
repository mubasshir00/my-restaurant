import Chef from "@/components/chef/chef";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero";
import Menu from "@/components/menu/menu";
import NavBar from "@/components/navbar";
import Newsletter from "@/components/newsletter/Newsletter";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Menu/>
      <Chef/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
    </>
  )
}