import React from 'react';
import aboutUsImg from '../../public/aboutUs.png';
import Image from 'next/image';
import { ArrowLeft } from '../svg/svg';

const AboutUs = () => {
  return (
    <section className="grid overflow-x-hidden container gap-16 lg:gap-28 py-16 place-items-center grid-cols-1 lg:grid-cols-2 ">
      <div>
        <Image src={aboutUsImg} alt="aboutUsImg" />
      </div>
      <div className="relative order-first lg:order-last min-h-[400px] md:min-h-[300px] lg:min-h-[600px] lg:space-y-12">
        <div className="text-xl text-center lg:text-left text-[#7144D4] font-inter font-bold">
          About Us
        </div>
        <h2 className="heading font-Montserrat ">About PromoTone</h2>
        <p className="text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur. Egestas cursus vulputate
          vulputate consequat ornare imperdiet. Interdum proin tortor nisl
          hendrerit bibendum nulla. Sodales malesuada pulvinar praesent lectus
          eu odio bibendum. Neque arcu egestas et commodo a maecenas in nec
          elit.
        </p>
        <div className=" flex justify-center ">
          <button className="btn_primary absolute bottom-2 flex items-center justify-center font-Montserrat gap-2">
            <span>Learn More</span>
            <ArrowLeft />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
