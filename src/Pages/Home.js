import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import About from "../components/home/About";
import BookAppointment from "../components/home/BookAppointment";
import Reviews from "../components/home/Reviews";
import Doctors from "../components/home/Doctors";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
