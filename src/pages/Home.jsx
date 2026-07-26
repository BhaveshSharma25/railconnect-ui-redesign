import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import SearchCard from "../components/home/SearchCard";
import PopularRoutes from "../components/home/PopularRoutes";
import WhyChoose from "../components/home/WhyChoose";
import LiveTrainStatus from "../components/home/LiveTrainStatus";
import TravelServices from "../components/home/TravelServices";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchCard />
      <PopularRoutes />
      <WhyChoose />
      <LiveTrainStatus />
      <TravelServices />
      <Footer />
    </>
  );
}

export default Home;
