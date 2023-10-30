import React from 'react';
import image from '../../assets/img/contact1.avif'
import CommonBanner from '../Shared/CommonBanner/CommonBanner';
import Form from './Form/Form';
import Contact from '../Home/Contact/Contact';
const ContactPage = () => {
    return (
        <div>
            <CommonBanner img={image} content={'Contact Us'}></CommonBanner>
            <Form></Form>
            <Contact></Contact>
        </div>
    );
};

export default ContactPage;