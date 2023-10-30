import React from 'react';
import About from '../Home/About/About';
import Choose from '../Home/Choose/Choose';
import CommonBanner from '../Shared/CommonBanner/CommonBanner';
import image from '../../assets/img/about1.webp'
import Team from './Team';
const AboutUs = () => {
    return (
        <div>
            <CommonBanner img={image} content={'About Us'}></CommonBanner>
            <About></About>
            <Choose></Choose>
            <Team></Team>
        </div>
    );
};

export default AboutUs;