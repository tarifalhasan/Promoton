import React from 'react';

const Contact = () => {
  return (
    <div className="container px-0 lg:px-16 flex justify-center  mb-16  rounded-lg">
      <div className="  flex flex-col py-4 px-10 bg-[#F3F5F6]  lg:max-w-[914px]  w-full md:py-8 mt-8 md:mt-0">
        <h2 className=" mb-5 text-center  text-xl font-bold font-inter text-[#263238]">
          Send us a messageand we’ll get back to you shortly.
        </h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-[#16161D]">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-[#16161D]">
            Subject*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter the subjext"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-[#16161D]">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={''}
          />
        </div>
        <div className="lg:flex justify-end">
          <button className="btn_primary lg:min-w-[180px]">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
