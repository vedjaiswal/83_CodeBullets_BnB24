import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faHandshake, faVideo } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We are a groundbreaking platform dedicated to bridging the healthcare gap between urban medical expertise and underserved rural communities. In areas where medical facilities may not be as advanced, our platform connects highly skilled urban doctors with individuals in rural regions, ensuring that quality healthcare is accessible to everyone, regardless of geographic constraints. Through our innovative approach, we strive to improve the overall health and well-being of rural populations by facilitating seamless communication and providing essential medical services where they are needed most.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Real-Time Chat Assistant"
          description="Experience instant medical support through our telemedicine platform's real-time chat assistance. Connect directly with qualified healthcare professionals, receive immediate guidance on symptoms, medications, and general health concerns—all from the comfort of your home. Our aim is to provide quick, personalized, and accessible healthcare whenever you need it"
          icon={faHandshake}
        />

        <InformationCard
          title="Experienced Medical Network"
          description="Tap into a vast and experienced medical network through our telemedicine platform. Gain access to a diverse pool of seasoned healthcare professionals for comprehensive and specialized guidance. Our platform connects you with skilled doctors, ensuring that you receive expert advice and personalized care from an experienced medical network, right when you need it."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Virtual Connection"
          description="Book virtual appointments seamlessly with our telemedicine platform, establishing a direct connection with healthcare professionals. Our user-friendly system allows you to schedule appointments at your convenience, ensuring a virtual link to experienced medical expertise. Experience the ease of booking, connecting, and receiving personalized care—all from the comfort of your home."
          icon={faVideo}
        />
      </div>
    </div>
  );
}

export default Info;
