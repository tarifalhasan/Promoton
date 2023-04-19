import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="bg-[#7144D4] relative   overflow-hidden  pt-16">
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

        <div className="   grid gap-9  md:grid-cols-2 xl:grid-cols-4">
          <div className="hidden xl:block">
            <h2></h2>
          </div>
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
      <div className="absolute right-0 pr-10 pb-28 md:pb-20 bottom-0">
        <button onClick={scrollToTop}>
          <svg
            width={76}
            height={69}
            viewBox="0 0 76 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={38}
              cy={20}
              r="18.5"
              fill="#FDFDFD"
              stroke="#7144D4"
              strokeWidth={3}
            />
            <path
              d="M38.0004 25.6004V14.4004"
              stroke="#7144D4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.4004 20.0004L38.0004 14.4004L43.6004 20.0004"
              stroke="#7144D4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.232 64V54.13H5.18C6.22533 54.13 7.03267 54.354 7.602 54.802C8.17133 55.25 8.456 55.8847 8.456 56.706C8.456 57.322 8.26933 57.8353 7.896 58.246C7.532 58.6567 7.02333 58.9273 6.37 59.058V58.862C7.098 58.946 7.66733 59.198 8.078 59.618C8.498 60.0287 8.708 60.584 8.708 61.284C8.708 62.1613 8.414 62.8333 7.826 63.3C7.24733 63.7667 6.426 64 5.362 64H1.232ZM2.366 63.062H5.25C5.95933 63.062 6.51933 62.9267 6.93 62.656C7.35 62.376 7.56 61.914 7.56 61.27C7.56 60.6167 7.35 60.1547 6.93 59.884C6.51933 59.604 5.95933 59.464 5.25 59.464H2.366V63.062ZM2.366 58.54H5.012C5.77733 58.54 6.35133 58.3907 6.734 58.092C7.11667 57.7933 7.308 57.364 7.308 56.804C7.308 56.2253 7.11667 55.7913 6.734 55.502C6.35133 55.2033 5.77733 55.054 5.012 55.054H2.366V58.54ZM13.5056 64.126C12.8803 64.126 12.3343 63.9813 11.8676 63.692C11.401 63.3933 11.037 62.9733 10.7756 62.432C10.5236 61.8907 10.3976 61.242 10.3976 60.486C10.3976 59.7207 10.5236 59.0673 10.7756 58.526C11.037 57.9847 11.401 57.5693 11.8676 57.28C12.3343 56.9907 12.8803 56.846 13.5056 56.846C14.1403 56.846 14.6863 57.0093 15.1436 57.336C15.6103 57.6533 15.9183 58.0873 16.0676 58.638H15.8996L16.0536 56.972H17.1456C17.1176 57.2427 17.0896 57.518 17.0616 57.798C17.043 58.0687 17.0336 58.3347 17.0336 58.596V64H15.8996V62.348H16.0536C15.9043 62.8987 15.5963 63.3327 15.1296 63.65C14.663 63.9673 14.1216 64.126 13.5056 64.126ZM13.7296 63.202C14.4016 63.202 14.9336 62.9733 15.3256 62.516C15.7176 62.0493 15.9136 61.3727 15.9136 60.486C15.9136 59.59 15.7176 58.9133 15.3256 58.456C14.9336 57.9893 14.4016 57.756 13.7296 57.756C13.067 57.756 12.535 57.9893 12.1336 58.456C11.7416 58.9133 11.5456 59.59 11.5456 60.486C11.5456 61.3727 11.7416 62.0493 12.1336 62.516C12.535 62.9733 13.067 63.202 13.7296 63.202ZM22.3902 64.126C21.6995 64.126 21.0975 63.9767 20.5842 63.678C20.0802 63.3793 19.6882 62.9547 19.4082 62.404C19.1375 61.8533 19.0022 61.2 19.0022 60.444C19.0022 59.6787 19.1422 59.03 19.4222 58.498C19.7022 57.9567 20.0942 57.546 20.5982 57.266C21.1115 56.986 21.7088 56.846 22.3902 56.846C22.8382 56.846 23.2722 56.9253 23.6922 57.084C24.1215 57.2427 24.4762 57.4667 24.7562 57.756L24.3502 58.568C24.0702 58.2973 23.7622 58.0967 23.4262 57.966C23.0995 57.8353 22.7775 57.77 22.4602 57.77C21.7322 57.77 21.1675 57.9987 20.7662 58.456C20.3648 58.9133 20.1642 59.5807 20.1642 60.458C20.1642 61.326 20.3648 61.998 20.7662 62.474C21.1675 62.95 21.7322 63.188 22.4602 63.188C22.7682 63.188 23.0855 63.1273 23.4122 63.006C23.7482 62.8847 24.0608 62.684 24.3502 62.404L24.7562 63.202C24.4668 63.5007 24.1075 63.7293 23.6782 63.888C23.2488 64.0467 22.8195 64.126 22.3902 64.126ZM26.5778 64V53.696H27.7118V60.094H27.7398L31.0018 56.972H32.4298L28.5798 60.64L28.6078 60.066L32.7938 64H31.3238L27.7398 60.696H27.7118V64H26.5778ZM40.3453 64.126C39.6546 64.126 39.1273 63.93 38.7633 63.538C38.3993 63.1367 38.2173 62.5347 38.2173 61.732V57.854H36.8453V56.972H38.2173V55.054L39.3513 54.732V56.972H41.3673V57.854H39.3513V61.606C39.3513 62.166 39.4446 62.5673 39.6313 62.81C39.8273 63.0433 40.1166 63.16 40.4993 63.16C40.6766 63.16 40.8353 63.146 40.9753 63.118C41.1153 63.0807 41.2413 63.0387 41.3533 62.992V63.944C41.2226 64 41.0639 64.042 40.8773 64.07C40.6999 64.1073 40.5226 64.126 40.3453 64.126ZM45.7734 64.126C45.1014 64.126 44.5134 63.9813 44.0094 63.692C43.5148 63.3933 43.1321 62.9733 42.8614 62.432C42.5908 61.8813 42.4554 61.2327 42.4554 60.486C42.4554 59.73 42.5908 59.0813 42.8614 58.54C43.1321 57.9987 43.5148 57.5833 44.0094 57.294C44.5134 56.9953 45.1014 56.846 45.7734 56.846C46.4548 56.846 47.0428 56.9953 47.5374 57.294C48.0414 57.5833 48.4288 57.9987 48.6994 58.54C48.9794 59.0813 49.1194 59.73 49.1194 60.486C49.1194 61.2327 48.9794 61.8813 48.6994 62.432C48.4288 62.9733 48.0414 63.3933 47.5374 63.692C47.0428 63.9813 46.4548 64.126 45.7734 64.126ZM45.7734 63.202C46.4454 63.202 46.9774 62.9733 47.3694 62.516C47.7614 62.0493 47.9574 61.3727 47.9574 60.486C47.9574 59.59 47.7568 58.9133 47.3554 58.456C46.9634 57.9893 46.4361 57.756 45.7734 57.756C45.1108 57.756 44.5834 57.9893 44.1914 58.456C43.7994 58.9133 43.6034 59.59 43.6034 60.486C43.6034 61.3727 43.7994 62.0493 44.1914 62.516C44.5834 62.9733 45.1108 63.202 45.7734 63.202ZM57.4499 64.126C56.7592 64.126 56.2319 63.93 55.8679 63.538C55.5039 63.1367 55.3219 62.5347 55.3219 61.732V57.854H53.9499V56.972H55.3219V55.054L56.4559 54.732V56.972H58.4719V57.854H56.4559V61.606C56.4559 62.166 56.5492 62.5673 56.7359 62.81C56.9319 63.0433 57.2212 63.16 57.6039 63.16C57.7812 63.16 57.9399 63.146 58.0799 63.118C58.2199 63.0807 58.3459 63.0387 58.4579 62.992V63.944C58.3272 64 58.1685 64.042 57.9819 64.07C57.8045 64.1073 57.6272 64.126 57.4499 64.126ZM62.878 64.126C62.206 64.126 61.618 63.9813 61.114 63.692C60.6194 63.3933 60.2367 62.9733 59.966 62.432C59.6954 61.8813 59.56 61.2327 59.56 60.486C59.56 59.73 59.6954 59.0813 59.966 58.54C60.2367 57.9987 60.6194 57.5833 61.114 57.294C61.618 56.9953 62.206 56.846 62.878 56.846C63.5594 56.846 64.1474 56.9953 64.642 57.294C65.146 57.5833 65.5334 57.9987 65.804 58.54C66.084 59.0813 66.224 59.73 66.224 60.486C66.224 61.2327 66.084 61.8813 65.804 62.432C65.5334 62.9733 65.146 63.3933 64.642 63.692C64.1474 63.9813 63.5594 64.126 62.878 64.126ZM62.878 63.202C63.55 63.202 64.082 62.9733 64.474 62.516C64.866 62.0493 65.062 61.3727 65.062 60.486C65.062 59.59 64.8614 58.9133 64.46 58.456C64.068 57.9893 63.5407 57.756 62.878 57.756C62.2154 57.756 61.688 57.9893 61.296 58.456C60.904 58.9133 60.708 59.59 60.708 60.486C60.708 61.3727 60.904 62.0493 61.296 62.516C61.688 62.9733 62.2154 63.202 62.878 63.202ZM68.2021 67.024V58.596C68.2021 58.3347 68.1881 58.0687 68.1601 57.798C68.1414 57.518 68.1181 57.2427 68.0901 56.972H69.1821L69.3361 58.638H69.1681C69.3174 58.0873 69.6208 57.6533 70.0781 57.336C70.5354 57.0093 71.0814 56.846 71.7161 56.846C72.3508 56.846 72.8968 56.9907 73.3541 57.28C73.8208 57.5693 74.1848 57.9847 74.4461 58.526C74.7074 59.0673 74.8381 59.7207 74.8381 60.486C74.8381 61.242 74.7074 61.8907 74.4461 62.432C74.1941 62.9733 73.8348 63.3933 73.3681 63.692C72.9014 63.9813 72.3508 64.126 71.7161 64.126C71.0908 64.126 70.5494 63.9673 70.0921 63.65C69.6348 63.3327 69.3314 62.8987 69.1821 62.348H69.3361V67.024H68.2021ZM71.4921 63.202C72.1641 63.202 72.6961 62.9733 73.0881 62.516C73.4894 62.0493 73.6901 61.3727 73.6901 60.486C73.6901 59.59 73.4894 58.9133 73.0881 58.456C72.6961 57.9893 72.1641 57.756 71.4921 57.756C70.8294 57.756 70.2974 57.9893 69.8961 58.456C69.5041 58.9133 69.3081 59.59 69.3081 60.486C69.3081 61.3727 69.5041 62.0493 69.8961 62.516C70.2974 62.9733 70.8294 63.202 71.4921 63.202Z"
              fill="#FDFDFD"
            />
          </svg>
        </button>
      </div>
      <div className=" mt-8 w-full lg:w-[90%] ml-auto bg-white h-[2px] opacity-30"></div>
      <span className=" block text-white py-6 text-center text-base font-inter lato">
        Copyright © 2023 Promotone.Inc. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
