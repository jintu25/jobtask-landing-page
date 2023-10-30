import React from 'react';
import './banner.css'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className='banner py-20'>
            <div className='max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-end justify-end h-full mx-4'> 
                <div>
                    <p className='text-[#e73c3e] text-[18px] font-normal'>We are here for</p>
                    <h1 className='text-4xl md:text-6xl font-semibold leading-[52px] md:leading-[70px] text-sky-400 md:text-[#111111] my-5'>We believe in those made to do more</h1>
                    <p className='text-[#606060] text-[18px] font-normal mb-6 leading-[32px]'>Loans are advantageous as a relatively inexpensive way of borrowing money. Start or grow your own business</p>
                    <button className='btn-left-to-right'>view more</button>
                    <ul className='social-icon flex mt-20 items-center'>
                        <li><span>Folow Us</span></li>
                        <Link><span className='banner-social-icon'><FaFacebookF></FaFacebookF></span></Link>
                        <Link><span className='banner-social-icon'><BsInstagram></BsInstagram></span></Link>
                        <Link><span className='banner-social-icon'><BsTwitter></BsTwitter></span></Link>
                        <Link><span className='banner-social-icon'><BsLinkedin></BsLinkedin></span></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;