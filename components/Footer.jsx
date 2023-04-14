import React from 'react';
import { ArrowLeft } from './svg/svg';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import footerLogo from '/public/footer_logo.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-[#7144D4] relative  overflow-hidden  pt-16">
      <div className="container">
        <div className="flex lg:max-w-[420px] pb-10 ml-auto lg:justify-end">
          <div className=" space-y-6">
            <span className="text-base font-Montserrat font-normal text-[#FCFCFC]">
              Subscribe to our newsletter to receive the latest updates and
              information about Kodehauz.{' '}
            </span>
            <div className="flex  lg:max-w-[420px] w-full items-center">
              <input
                type="text"
                className="text-sm rounded-md rounded-r-[0px] px-5 py-3 w-full bg-transparent focus:outline-none border border-r-0 border-white min-h-[56px] flex  items-center border-opacity-50 text-[#FCFCFC] font-Montserrat font-normal"
                placeholder="Email address"
              />
              <button className=" flex justify-center items-center bg-insert max-w-[72px] w-full min-h-[56px]">
                <ArrowLeft />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex  md:flex-wrap lg:flex-nowrap flex-col md:flex-row justify-center gap-16 lg:gap-28 ">
          <div>
            <h3 className=" text-2xl font-Montserrat font-semibold text-white">
              Quick Links
            </h3>
            <ul className=" text-[#fcfcfc] space-y-5 pt-5">
              <li className="text-lg  font-Montserrat font-light">
                <Link href="/about">About Us</Link>
              </li>
              <li className="text-lg  font-Montserrat font-light">
                <Link href="/about">Explore</Link>
              </li>
              <li className="text-lg  font-Montserrat font-light">
                <Link href="/about">How it works</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" text-2xl font-Montserrat font-semibold text-white">
              Terms
            </h3>
            <ul className=" text-[#fcfcfc] pt-5 space-y-5">
              <li className="text-lg  font-Montserrat font-light">
                <Link href="/about">Privacy Policy</Link>
              </li>
              <li className="text-lg  font-Montserrat font-light">
                <Link href="/about">Terms of Service</Link>
              </li>
              <li className="text-lg  font-Montserrat font-light">
                <Link href="/about">Copyright Policy</Link>
              </li>
              <li className="text-lg  font-Montserrat font-light">
                <Link href="/about">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className=" text-[#fcfcfc] ">
              <li className="text-lg  font-Montserrat font-light">
                Address: 809 Edgewood Place, Ann Arbor MI, 48103
              </li>
              <li className="text-lg  font-Montserrat font-light">
                Email: admin@promotonept.com,
              </li>
              <li className="text-lg  font-Montserrat font-light">
                Phone Number (734) 747-3739
              </li>
            </ul>
            <ul className="flex items-center pt-10 gap-5">
              <li className="w-[30px] shadow_tarif flex justify-center items-center bg-white h-[30px] rounded-full">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={24} color="#7144D4" />
                </a>
              </li>
              <li className="w-[30px] shadow_tarif flex justify-center items-center bg-white h-[30px] rounded-full">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} color="#7144D4" />
                </a>
              </li>
              <li className="w-[30px] shadow_tarif flex justify-center items-center bg-white h-[30px] rounded-full">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} color="#7144D4" />
                </a>
              </li>
              <li className="w-[30px] shadow_tarif flex justify-center items-center bg-white h-[30px] rounded-full">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={24} color="#7144D4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block absolute top-0 ">
        <Image
          src={footerLogo}
          className="max-w-[358px]"
          alt="footer_logo.png"
        />
      </div>
      <div className=" mt-8 w-full lg:w-[90%] ml-auto bg-white h-[2px] opacity-30"></div>
      <span className=" block text-white py-6 text-center text-base font-inter lato">
        Copyright © 2023 Promotone.Inc. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
