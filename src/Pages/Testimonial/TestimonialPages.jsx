import React from 'react';
import CommonBanner from '../Shared/CommonBanner/CommonBanner';
import image from '../../assets/img/testimonial.jpg'
import Testimonial from '../Home/Testimonial/Testimonial';
const TestimonialPages = () => {
    return (
        <div>
            <div>
                <CommonBanner img={image} content={'TestimonialPages'}></CommonBanner>
            </div>
            <h2 className='text-center text-slate-800 font-semibold text-2xl pt-12'>review our users</h2>
            <Testimonial></Testimonial>
        </div>
    );
};

export default TestimonialPages;