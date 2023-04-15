import React from 'react';
import { TaCoin, TaPromote, TaWifi } from '../svg/svg';

const Services = () => {
  const Data = [
    {
      label: 'Connect',
      desc: 'We connect you with a local brand on your campus',
      icon: <TaCoin />,
    },
    {
      label: 'Promote',
      desc: 'Work together and run promotions with local businesses on campus',
      icon: <TaPromote />,
    },
    {
      label: 'Get Paid',
      desc: 'Get Paid and grow the brands you live in your town',
      icon: <TaWifi />,
    },
  ];

  return (
    <section className="bg-[#7144D4] py-16 text-white mb-16">
      <div className="container space-y-5">
        <div className="">
          <h2 className="text-center   relative  font-Montserrat heading">
            Services
          </h2>
          <div className="h-[5px] w-[107px] mx-auto bg-white rounded-md"></div>
        </div>
        <p className="text-white text-center py-5">
          Connect with Brands to monetize your niched audience Match with
          students to target customers effectively utilizing niched student
          audiences
        </p>
        <div className="grid overflow-hidden gap-12  grid-cols-1 lg:grid-cols-3">
          {Data.map((data, index) => (
            <div
              key={index}
              className="bg-[white] space-y-7 rounded-lg py-10 px-5  min-h-[283px] text-black"
            >
              <div className="w-[94px] bg-[#EAE4F7]  grid place-items-center rounded-lg h-[94px]">
                {data.icon}
              </div>

              <h2 className="lg:text-[34px] pt-2 font-inter font-medium leading-[0] ">
                {data.label}
              </h2>
              <span className=" block pt-1 text-base">{data.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
