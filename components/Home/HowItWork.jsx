import React from 'react';
import { PlayStore, TaMobile } from '../svg/svg';
import iphone from '/public/iphone.png';
import Image from 'next/image';
const HowItWork = () => {
  return (
    <section id="how_it_work">
      <div className="container py-16">
        <div>
          <h2 className="text-center   relative   before:bg-[#]  font-Montserrat heading">
            How It Works
          </h2>
          <div className="lg: w-[176px] bg-[#7144D4] h-[5px] rounded-md mx-auto"></div>
        </div>
        <div className="flex pt-10 items-center gap-10 flex-col lg:flex-row">
          <div className=" space-y-10 basis-[65%]">
            <h2 className="heading font-inter">
              Steps On How To Use <br className="hidden lg:block" /> Our Mobile
              App
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas cursus vulputate
              vulputate consequat ornare imperdiet. Interdum proin tortor nisl
              hendrerit bibendum nulla. Sodales malesuada pulvinar praesent
              lectus eu odio bibendum. Neque arcu egestas et commodo a maecenas
              in nec elit.
            </p>
            <div className="pl-0 lg:pl-10">
              <a
                href=""
                className="flex w-full lg:max-w-[273px] bg-[#000000] text-white py-2 px-4 rounded-lg  gap-4 items-center"
              >
                <div className="flex items-center">
                  <PlayStore />
                </div>
                <div className="flex justify-center items-center flex-col gap-5">
                  <span className=" text-lg font-medium leading-[0]">
                    Download on the
                  </span>
                  <span className=" leading-[0] font-inter font-bold text-lg block">
                    app store
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div>
            <Image src={iphone} alt="iphone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
