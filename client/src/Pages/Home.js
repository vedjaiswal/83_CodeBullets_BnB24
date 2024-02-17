import React from "react";
import Navbar from "../Components/home/Navbar";
import Hero from "../Components/home/Hero";
import Info from "../Components/home/Info";
import About from "../Components/home/About";
import BookAppointment from "../Components/home/BookAppointment";
import Reviews from "../Components/home/Reviews";
import Doctors from "../Components/home/Doctors";
import Footer from "../Components/home/Footer";
import Chatbot from "../Components/chatbot/Chatbot";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Chatbot />
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
