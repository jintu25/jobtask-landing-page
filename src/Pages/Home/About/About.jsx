import React from 'react';
import image from '../../../assets/img/image3(1).png'
import CommonTitle from '../../Shared/CommonTitle/CommonTitle';
import { BsCheckAll } from 'react-icons/bs';
import './about.css'
const About = () => {
    return (
        <div className='max-w-screen-xl m-auto border-t-2 border-slate-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 mx-4 lg:mx-0'>
            <div className='relative'>
                <img className='w-full text-center' src={image} alt="" />
                <div className="about-text-sec">
                <div className="about-section-inter">
                    <h1 className='text-6xl text-[#e73c3e] font-bold'>25</h1>
                    <h6 className='text-[#111111] text-lg text-semibold'>Yours of expariance</h6>
                </div>
                
              </div>
            </div>
            <div>
                {/* use commonTitle component for some similar design use */}
                <CommonTitle title={'About company'} subtitle={'We have been working very efficiently with loan and funding for 25 years.'} description={'At Finix, we are dedicated to making your financial dreams a reality. We understand that life is filled with unexpected challenges and opportunities, and having access to reliable financial support can make all the difference.'}></CommonTitle>
                <div>
                    <p className='text-[18px] mb-4 text-[#606060]'>In business, we focus on 3 things.</p>
                    <ul>
                        <li className='text-[18px] mb-2 items-center flex text-[#606060]'><span className='mr-2 text-3xl text-[#e73c3e]'><BsCheckAll></BsCheckAll></span>Useful info</li>
                        <li className='text-[18px] mb-2 items-center flex text-[#606060]'><span className='mr-2 text-3xl text-[#e73c3e]'><BsCheckAll></BsCheckAll></span>Reliability</li>
                        <li className='text-[18px] mb-2 items-center flex text-[#606060]'><span className='mr-2 text-3xl text-[#e73c3e]'><BsCheckAll></BsCheckAll></span>Innovation</li>
                    </ul>
                    <button className='btn-left-to-right mt-6'>view more</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;