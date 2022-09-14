import Head from "next/head";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import Experiences from "../Components/Experiences";
import HospitalFeatures from "../Components/HospitalFeatures";
import FaqQuestions from "../Components/FaqQuestions";
import CarouselComp from "../Components/CarouselComp";
import Footer from "../Components/Footer";
// import '../styles/globals.css'

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#e8f8ff] to-[#fef7ff]">
        <Head>
          <title>{"Welcome to Docmic"}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="w-[1006px] mx-auto pb-[56px]">
          <NavBar />
          <Banner />
          <Services />
          <Experiences />
          <HospitalFeatures />
          <FaqQuestions />
          <CarouselComp />
        </div>
      </div>
      <div className="bg-[#E9EEF7] pt-[35px] pb-[32px]">
        <div className="w-[1006px] mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
