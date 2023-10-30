import React from "react";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Choose from "../Choose/Choose";
import ApplyNow from "../ApplyNow/ApplyNow";
import Contact from "../Contact/Contact";
import Company from "../Company/Company";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Slider></Slider>
        <About></About>
        <Choose></Choose>
        <ApplyNow></ApplyNow>
        <Contact></Contact>
        <Company></Company>
        <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
