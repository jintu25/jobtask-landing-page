import React from 'react';
import image from '../../../assets/img/company2.png'
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { FaHandHoldingMedical, FaKeycdn, FaUserCog } from 'react-icons/fa';

const Company = () => {
    return (
        <div className='max-w-screen-xl m-auto py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mx-4 lg:mx-0'>
                <div>
                    <h2 className='text-4xl font-semibold text-[#11111] mb-12'>Our company values</h2>
                    <div className='flex mb-8'>
                        <div><span className='text-5xl font-bold text-[#e73c3e]'><RiLightbulbFlashLine></RiLightbulbFlashLine></span></div>
                        <div className='ml-8'>
                            <h1 className='text-3xl mb-4 font-semibold text-[#11111]'>Innovative</h1>
                            <p className='text-[17px] font-medium text-[#606060]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='flex mb-8'>
                        <div><span className='text-5xl font-bold text-[#e73c3e]'><FaUserCog></FaUserCog></span></div>
                        <div className='ml-8'>
                            <h1 className='text-3xl mb-4 font-semibold text-[#11111]'>Telent</h1>
                            <p className='text-[17px] font-medium text-[#606060]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='flex mb-8'>
                        <div><span className='text-5xl font-bold text-[#e73c3e]'><FaKeycdn></FaKeycdn></span></div>
                        <div className='ml-8'>
                            <h1 className='text-3xl mb-4 font-semibold text-[#11111]'>Enabling</h1>
                            <p className='text-[17px] font-medium text-[#606060]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='flex mb-8'>
                        <div><span className='text-5xl font-bold text-[#e73c3e]'><FaHandHoldingMedical></FaHandHoldingMedical></span></div>
                        <div className='ml-8'>
                            <h1 className='text-3xl mb-4 font-semibold text-[#11111]'>Commercially responsible</h1>
                            <p className='text-[17px] font-medium text-[#606060]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-full text-center' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Company;