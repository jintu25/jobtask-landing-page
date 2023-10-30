import React from "react";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Choose from "../Choose/Choose";
import ApplyNow from "../ApplyNow/ApplyNow";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Slider></Slider>
        <About></About>
        <Choose></Choose>
        <ApplyNow></ApplyNow>
    </div>
  );
};

export default Home;
