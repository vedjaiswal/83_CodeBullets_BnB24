import React from "react";
import Navbar from "../Components/home/Navbar";
import Hero from "../Components/home/Hero";
import Info from "../Components/home/Info";
import About from "../Components/home/About";
import BookAppointment from "../Components/home/BookAppointment";
import Reviews from "../Components/home/Reviews";


function Home() {
  return (
    <div className="home-section">
      <Hero />
      <Info />
      <BookAppointment />
      <About />
      <Reviews />
    </div>
  );
}

export default Home;
