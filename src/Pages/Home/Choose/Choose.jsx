import React from "react";
import image from "../../../assets/img/choose.png";
import CommonTitle from "../../Shared/CommonTitle/CommonTitle";
import "./choose.css";
import { FaSignLanguage, FaThumbsUp } from "react-icons/fa";
import { BsPeople, BsSpeedometer2 } from "react-icons/bs";
const Choose = () => {
  return (
    <div className="bg-[#f9fafb]">
      <div className="max-w-screen-xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-20 items-center ">
        <div className="mx-4 lg:mx-0">
          <CommonTitle
            title={"Transparent process"}
            subtitle={"Why people choose us"}
            description={
              "When you choose Finix, you're not just choosing a financial institution; you're choosing a partner dedicated to your financial success. "
            }></CommonTitle>

          <img className="w-full text-center" src={image} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 lg:mx-0">
          <div className="">
            <div className="feature-items shadow-xl rounded-lg text-center mt-4">
              <div className="feature-icon">
                <span><FaSignLanguage></FaSignLanguage></span>
              </div>
              <h3 className="pt-5 pb-3 text-slate-950 font-semibold text-2xl">Transparency</h3>
              <p className="text-lg text-[#606060] font-medium text-[17px] pb-6 pt-4">
              We believe in clear and honest communication. Our team will guide you through the entire loan process
              </p>
            </div>
          </div>

          <div className="">
            <div className="feature-items shadow-xl rounded-lg text-center">
              <div className="feature-icon">
               <span><BsSpeedometer2></BsSpeedometer2></span>
              </div>
              <h3 className="pt-5 pb-3 text-slate-950 font-semibold text-2xl">Speed</h3>
              <p className="text-lg text-[#606060] font-medium text-[17px] pb-6 pt-4">
              We know that time is of the essence when it comes to your financial needs. Our efficient approval process
              </p>
            </div>
          </div>

          <div className="">
            <div className="feature-items shadow-xl rounded-lg text-center">
              <div className="feature-icon">
                <span><FaThumbsUp></FaThumbsUp></span>
              </div>
              <h3 className="pt-5 pb-3 text-slate-950 font-semibold text-2xl">Services</h3>
              <p className="text-lg text-[#606060] font-medium text-[17px] pb-6 pt-4">
              Our friendly and professional team is always ready to assist you. Whether you have questions
              </p>
            </div>
          </div>

          <div className="">
            <div className="feature-items shadow-xl rounded-lg text-center mrgin-btm">
              <div className="feature-icon">
                <span><BsPeople></BsPeople></span>
              </div>
              <h3 className="pt-5 pb-3 text-slate-950 font-semibold text-2xl">Experiance</h3>
              <p className="text-lg text-[#606060] font-medium text-[17px] pb-6 pt-4">
              With over [25] years of experience in the financial industry, our team is well-equipped 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
