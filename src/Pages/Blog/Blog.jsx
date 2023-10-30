import React from 'react';
import CommonBanner from '../Shared/CommonBanner/CommonBanner';
import image from '../../assets/img/blog.avif'
const Blog = () => {
    return (
        <div>
            <CommonBanner img={image} content={'Blogs'}></CommonBanner>
            <h3 className='text-center text-2xl py-10 text-sky-400 font-semibold'>Blog coming soon......</h3>
        </div>
    );
};

export default Blog;