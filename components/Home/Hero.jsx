import Image from 'next/image';
import React, { useState } from 'react';
import { QrCode } from '../svg/svg';
import { Button } from '@material-tailwind/react';
import QrCodeScanner from '../QrCodeScanner';
import { useRouter } from 'next/router';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showQrCode = () => {
    setIsOpen(pre => !pre);

    router.push('/scan');
  };

  const router = useRouter();

  return (
    <div className="flex gap-16 py-16 overflow-x-hidden container items-center justify-between flex-col lg:flex-row">
      <div
        data-aos="fade-right"
        className="basis-[60%]  space-y-3 md:space-y-5 lg:space-y-14"
      >
        <h1
          data-aos="fade-right"
          className="lg:text-[64px] text-center lg:text-left font-inter font-bold lg:leading-[65px] md:text-[40px] text-[25px]"
        >
          "Empowering Creators, Boosting Businesses:
        </h1>
        <p data-aos="fade-right" className="pb-5 text-center lg:text-left">
          The Matchmaking Platform for Social Media Creators and Startups
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6  items-center">
          <a
            href="/"
            className="flex w-full lg:max-w-[273px] bg-[#000000] text-white py-2 px-4 rounded-lg  gap-4 items-center"
          >
            <div className="flex items-center">
              <svg
                width={42}
                height={51}
                viewBox="0 0 42 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.064 26.921C35.04 22.829 36.894 19.745 40.6379 17.471C38.5439 14.471 35.376 12.821 31.2 12.503C27.246 12.191 22.92 14.807 21.336 14.807C19.662 14.807 15.834 12.611 12.822 12.611C6.60599 12.707 0 17.567 0 27.455C0 30.377 0.533999 33.395 1.602 36.503C3.03 40.595 8.17799 50.621 13.548 50.459C16.356 50.393 18.342 48.467 21.996 48.467C25.542 48.467 27.378 50.459 30.51 50.459C35.928 50.381 40.5839 41.267 41.9399 37.163C34.674 33.737 35.064 27.131 35.064 26.921ZM28.758 8.62105C31.8 5.00906 31.524 1.72106 31.434 0.539062C28.746 0.695062 25.638 2.36906 23.868 4.42706C21.918 6.63505 20.772 9.36505 21.018 12.443C23.922 12.665 26.574 11.171 28.758 8.62105Z"
                  fill="white"
                />
              </svg>
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
          <a
            href=""
            className="flex w-full lg:max-w-[273px] bg-[#000000] text-white py-2 px-4 rounded-lg  gap-4 items-center"
          >
            <div className="flex items-center">
              <svg
                width={50}
                height={51}
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect y="0.5" width={50} height={50} fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use xlinkHref="#image0_12_11" transform="scale(0.02)" />
                  </pattern>
                  <image
                    id="image0_12_11"
                    width={50}
                    height={50}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE2klEQVRoge2XXWxTVQDHf6fb2q51EGDdigooiQQBP8BAJlC9Ax/2wIsf+CQEi0EzY4CIINMwUCNbFiNfhoEmCmpiIMgDgjHrGIIjRoREyoBNFAQJfmxpu93eu+J2jw8MLKzrbtvb4sN+j+ecm///l/t1DgwxxBBp42vb/3Rjc9nHaiOL5Fpst7tPMpKXk3LBW8VVz13OH+PXZnNMD+DLUa+USS4iyDeELX+J94OZFwvG6gYcjgbYpzdxT476mcbU42IIW95L3i1lFwrGNQPzjF5atAA1sok7stzPNKafe0PY8iq9m8vOX5NxSVil9XJWbWChlIgsdjRFSi+wIWx5L3s3l12w3/td39BdQrBDa+R7rYGyLPQzTcpfIkPY8ipLN82MkwGYIQXNWgM71QClFvYzTVqfVEMIW2Xpppnn7ePjZWxSsEDAL9EG1soDOCzqaIq0/w2GELZK78ZZZ+0TD98y5UZQHbUT1BqZn2E/02T0k5MIsdxb5zvt7CeDgPukZJfWSKDrG6ZkkmOGjP/WEiFWeOp8rfYJRxPOS+ba8jihBtgQPsKITPMGwpJthyGEWOZ979EW+6R+d6aPAgFLC2Kc0wIslU3kW5Ebj2X7J4kQK7y1viQyACMlbNANgmqACquywUIR+E/mVHIZpGSigK+jAfZ1BxhvRbblO1qJEK95a31B55SkMn3M64UzaoCNHQcYlkluVrbmEiFWlqz3BR2Tj5hYbhcGS+SP7GmvYqEkve1O1s4YEiFWltbMPul44Nuk6wxi+lGCUucJKdnRvppjf65mVqp5WT0sSYRYVfruYz85HkwsY6DrzbTIGNPjRh+xwZH2KnaF3mCc2aysn/r6ZB7/wTX90E0TBrrWzBmuMi3BZUJK5vcYnP67irWXllM4WE7Ojq9riquVGzIGWhKJeFxIqp1O2gZ7f3J6Dl9TXK0cF1MPakdpNSERz91SsqP9deoGWpBTEace0+585tcRsgU1jct7ELQONJkzEace07Yq/tbhochUsRsfbRwa/KobHOw1mOZZz4cDLciJiFOPafWKv214KDL1xuAeFBMy56TkWc965nprCSZbmHURh94drVf8bcNCkYf7Te5B4WxCmSiCdWGVKSU17DaTY/kuNB6H3h3drvh/Lgp19pe4zl4UnuQQE1EACXwme1hZUscfqWRlTaRQ1bT6Of7zRWF1YInr7EURT/GJnMAWTw3H08nLiohD747Wz1l8riisPmRi+WUBVaO+5FNx7Y6kheUi7i6tq155/jd3V3QwCV3CJuAdD2l9jm/CUhF3p9q5rXzxRVdXdLAz+lc98MpouGBVtmUiJiVOSFhWAma29ylhiYi7U+3cpvgvuVQtoYSEDuBtD2wR0GtF5q1kLBInMTnB9D8CtubBmpEQyTQrGRmJuCNqZHu5//fCxBIBGywdBaczyTBL2iJJJFqBVz2wP7NqqZGWiDuiRrYr/suF0ZskQgJqR8H7Aq5a1M80KYvESUzqGzKAz3thhRf+sraeeVISKQqr4a3l/itxEk0GLCuFk1nolhKmRa5LuKLa/cAlAW8Ww84sdksJU9v4orAari9fdMUV1cYC61SY8H+SABN3ZHhHqGNb+Qvtju7YKRtUjISLuShmKRXHv3gxOGb0R+0w43Z3GWKIITLjXznh1Jca0ngEAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
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
      <div data-aos="fade-left" className=" ">
        <QrCode />
        <div className=" mt-16 ">
          <button onClick={showQrCode} className="btn_primary mx-auto ">
            Scan Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
