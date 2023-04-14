import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import sldeImg from '/public/fagSide.png';
const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const faqData = [
    {
      question: 'Where can I watch?',
      answare:
        'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ',
    },
    {
      question: 'Mauris id nibh eu fermentum mattis purus?',
      answare:
        'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ',
    },
    {
      question: 'Eros imperdiet rhoncus?',
      answare:
        'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ',
    },
    {
      question: 'Fames imperdiet quam fermentum?',
      answare:
        'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ',
    },
    {
      question: 'Varius vitae, convallis amet lacus sit aliquet nibh?',
      answare:
        'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ',
    },
    {
      question: 'Tortor nisl pellentesque sit quis orci dolor?',
      answare:
        'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ',
    },
    {
      question: 'Vestibulum mauris mauris elementum ?',
      answare:
        'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ',
    },
  ];

  return (
    <section className="bg-[#F3F5F6] py-16 mb-16">
      <div className="container grid gap-10  lg:grid-cols-2">
        <div>
          <Image className=" mx-auto block" src={sldeImg} alt="sldeImg" />
        </div>
        <div>
          <div>
            <h2 className="heading pb-10">Frequently Asked Questions</h2>

            <div className="h-[3px] mb-2 w-full bg-[#D7DEF0]" />
          </div>
          {faqData.map((data, i) => (
            <Accordion open={open === i + 1} animate={customAnimation}>
              <AccordionHeader
                className="!text-lg !text-black !font-inter !font-bold"
                onClick={() => handleOpen(i + 1)}
              >
                {data.question}
              </AccordionHeader>
              <AccordionBody className="!text-base !font-inter">
                {data.answare}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>

      <button className="btn_primary block mx-auto mt-10">More FAQ</button>
    </section>
  );
};

export default Faq;
