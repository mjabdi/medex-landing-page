import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import doctorSVG from "../assets/images/doctor.svg";
import "../App.css";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <Hero className="illustration-section-01" />

      {!isMobile && (
        <div className="doctorImgaeContainer">
          <img src={doctorSVG} className="doctorImage"></img>
        </div>
      )}

      <FeaturesTiles />
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider />  */}
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
