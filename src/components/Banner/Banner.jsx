import React from 'react';
import bannerimg from '../../assets/hero_img.jpg'


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={bannerimg}
    />
    <div className='space-y-5'>
      <h1 className="text-7xl font-bold">Books to Freshen Up<br></br> Your Bookshelf</h1>
      <button className="btn btn-success">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;