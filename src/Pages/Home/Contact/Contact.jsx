import React from "react";
import img from '../../../assets/img/contact.jpg'
const Contact = () => {
  return (
    <div>
      <div>
        <div
          className="px-10 py-20 bg-cover bg-center bg-fixed flex justify-center items-center"
          style={{ backgroundImage: `url(${img})` }}>
          <div className="w-full md:w-4/5 lg:w-4/5  z-10 rounded-lg bg-opacity-60 bg-black text-white text-center p-6 md:p-12 lg:p-18">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-slate-400">
                    <h2 className="text-white text-3xl text-start mb-4 lg:mb-0">We are here to help your bussiness call discuss your solution</h2>
                </div>
                <div>
                <a className="text-white font-semibold text-3xl" href="tel:+8801757146195">+8801757146195</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
