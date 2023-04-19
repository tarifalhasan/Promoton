import React from 'react';
import aboutUsImg from '../../public/aboutUs.png';
import Image from 'next/image';
import { ArrowLeft } from '../svg/svg';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className=" relative">
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
            Welcome to Promotone! We are an innovative platform that connects
            talented social media creators with small businesses and startups
            looking to market their products to the right audience. Our goal is
            to foster meaningful partnerships between creators and businesses,
            driving growth and success for both parties.
          </p>
          <div className=" flex justify-center ">
            <Link
              href={'/about'}
              className="btn_primary absolute bottom-2 flex items-center justify-center font-Montserrat gap-2"
            >
              <span>Learn More</span>
              <ArrowLeft />
            </Link>
          </div>
        </div>
      </section>
      <div className=" hidden lg:block absolute bottom-0 right-0">
        <Image
          src={'/about-dots-b.png'}
          className="max-h-[150px]"
          alt="dots"
          width={300}
          height={50}
        />
      </div>
      <div className=" hidden lg:block  absolute top-0 right-0">
        <Image
          src={'/about-dots-t.png'}
          alt="dots"
          className=""
          width={150}
          height={50}
        />
      </div>
    </div>
  );
};

export default AboutUs;
