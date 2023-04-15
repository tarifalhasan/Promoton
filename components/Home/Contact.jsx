import React, { useState } from 'react';
import axios from 'axios';
const Contact = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async event => {
    event.preventDefault();
    console.log(email, subject, message);
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email, subject, message }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="container px-0 lg:px-16 flex justify-center  mb-16  rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="  flex flex-col py-4 px-3 md:px-10 bg-[#F3F5F6]  lg:max-w-[914px]  w-full md:py-8 mt-8 md:mt-0"
      >
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
            value={email}
            name="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="subject" className="leading-7 text-sm text-[#16161D]">
            Subject*
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Enter the subjext"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-[#16161D]">
            Message*
          </label>
          <input
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            name="message"
            placeholder="Message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={''}
          />
        </div>
        <div className="lg:flex justify-end">
          <button className="btn_primary min-w-[120px] py-2 text-base lg:min-w-[180px]">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
