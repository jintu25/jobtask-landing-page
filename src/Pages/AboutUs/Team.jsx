import React from "react";
import "./team.css";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";
import image4 from "../../assets/img/image4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import CommonTitle from "../Shared/CommonTitle/CommonTitle";
const Team = () => {
  return (
    <div className="max-w-screen-xl m-auto py-20">
        <div className="text-center w-full md:w-3/5 m-auto mb-6">
            <CommonTitle title={'Expert People'} subtitle={'Global leadership team'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></CommonTitle>
        </div>
      <section className="team-mamber grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 lg:mx-0">
        <div className="team-content">
          <div className="team-image">
            <img src={image1} alt="" />
            <div className="team-icon">
              <ul>
                <li>
                  <a href="#">
                    <i><FaFacebookF></FaFacebookF></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsTwitter></BsTwitter></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsLinkedin></BsLinkedin></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsInstagram></BsInstagram></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-text">
            <h5 className="text-[#e73a3e] text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-semibold mt-5">Jerome Le Luel</h5>
            <p className="text-[17px] text-[#333] font-medium">Managing Director</p>
          </div>
        </div>

        <div className="team-content">
          <div className="team-image">
            <img src={image2} alt="" />
            <div className="team-icon">
              <ul>
                <li>
                  <a href="#">
                    <i><FaFacebookF></FaFacebookF></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsTwitter></BsTwitter></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsLinkedin></BsLinkedin></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsInstagram></BsInstagram></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-text">
            <h5 className="text-[#e73a3e] text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-semibold mt-5">Andrew Learoyd</h5>
            <p className="text-[17px] text-[#333] font-medium">Chief Executive Officer</p>
          </div>
        </div>

        <div className="team-content">
          <div className="team-image">
            <img src={image3} alt="" />
            <div className="team-icon">
              <ul>
                <li>
                  <a href="#">
                    <i><FaFacebookF></FaFacebookF></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsTwitter></BsTwitter></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsLinkedin></BsLinkedin></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsInstagram></BsInstagram></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-text">
            <h5 className="text-[#e73a3e] text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-semibold mt-5">Harry Nelis</h5>
            <p className="text-[17px] text-[#333] font-medium">Technolgy Offecer</p>
          </div>
        </div>

        <div className="team-content">
          <div className="team-image">
            <img src={image4} alt="" />
            <div className="team-icon">
              <ul>
                <li>
                  <a href="#">
                    <i><FaFacebookF></FaFacebookF></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsTwitter></BsTwitter></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsLinkedin></BsLinkedin></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><BsInstagram></BsInstagram></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-text">
            <h5 className="text-[#e73a3e] text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-semibold mt-5">Lucy Vernall</h5>
            <p className="text-[17px] text-[#333] font-medium">Chief Financial Officer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
