import React from "react";
import logo from '../../../assets/img/firstlogo.png'
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src={logo} alt="" />
          <p className="text-lg text-[#2b2b2b]">
            FINIX Loan & Funding agency
            <br />
            Providing reliable tech since 1998
          </p>
        </aside>
        <nav>
          <header className="footer-title text-xl font-semibold text-[#111111] ">Company</header>
          <Link to='/aboutUs' className="link link-hover text-[17px] font-medium text-[#2b2b2b]">About us</Link>
          <Link to='/services' className="link link-hover text-[17px] font-medium text-[#2b2b2b]">Services</Link>
        <Link to='/testimonial' className="link link-hover text-[17px] font-medium text-[#2b2b2b]">Testimonial</Link>
          <Link to='/blog' className="link link-hover text-[17px] font-medium text-[#2b2b2b]">Blog</Link>
          <Link to='/contactUs' className="link link-hover text-[17px] font-medium text-[#2b2b2b]">Contact Us</Link>
        </nav>
        <nav>
          <header className="footer-title text-xl font-semibold text-[#111111] ">Legal</header>
          <a className="link link-hover text-[17px] font-medium text-[#2b2b2b]">Terms of use</a>
          <a className="link link-hover text-[17px] font-medium text-[#2b2b2b]">Privacy policy</a>
          <a className="link link-hover text-[17px] font-medium text-[#2b2b2b]">Cookie policy</a>
        </nav>
        <nav>
          <header className="footer-title text-xl font-semibold text-[#111111] ">Contact Us</header>
          <a className="link flex link-hover text-[17px] font-medium text-[#2b2b2b]"><span className="mr-3 text-xl text-[#e73c3e]"><FaLocationArrow></FaLocationArrow></span>Sylhet, Habiganj, Mirpur</a>
          <a href="mailto:info@gmail.com" className="link flex link-hover text-[17px] font-medium text-[#2b2b2b]"><span className="mr-3 text-xl text-[#e73c3e]"><AiOutlineMail></AiOutlineMail></span>info@gmail.com</a>
          <a href="tel:+8801757146195" className="link flex link-hover text-[17px] font-medium text-[#2b2b2b]"><span className="mr-3 text-xl text-[#e73c3e]"><BsFillTelephoneFill></BsFillTelephoneFill></span>+8802757246295</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
