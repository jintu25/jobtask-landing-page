import React from 'react';
import CommonBanner from '../Shared/CommonBanner/CommonBanner';
import image from '../../assets/img/services.jpg'
import ApplyNow from '../Home/ApplyNow/ApplyNow';
const Services = () => {
    return (
        <div>
            <div>
                <CommonBanner img={image} content={'Services'}></CommonBanner>
            </div>
            <ApplyNow></ApplyNow>
        </div>
    );
};

export default Services;