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
      question: 'What is PromoTone and how does it work?',
      answare:
        'PromoTone is a platform that connects creators on social media with brands andstartups to create promotions for their products and services. It allows both parties tocreate custom offers helping brands and startups find affordable advertising optionswhile connecting with their target audience. PromoTone matches brands and startups with creators based on their selected categories of interest and geography.',
    },
    {
      question: 'Who can join PromoTone as a creator?',
      answare:
        'Creators with an established following on social media platforms can join PromoTone to establish partnerships with brands and startups to monetize their audience reach.',
    },
    {
      question: 'How do businesses and startups benefit from using PromoTone?',
      answare:
        'Businesses and startups benefit from PromoTone by gaining access to cost-effective advertising through smaller creators with relevant audiences. This allows for more organic reach and authentic advertisements, which can lead to higher conversion rates and better brand engagement.',
    },
    {
      question: 'How are creators and businesses matched on PromoTone?',
      answare:
        "Creators and businesses are matched on PromoTone based on their selectedcategories of interest and geography ensuring that both parties are relevant to eachother's niches and audiences.",
    },
    {
      question:
        'How much do creators earn on PromoTone, and what fees are involved?',
      answare:
        'Creators can set their own prices for promotions and earn 100% of their commissioned earnings. PromoTone profits from a 10% transaction fee on the promotion offer, which is paid by the brand or startup.',
    },
    {
      question:
        'How do you ensure the safety and security of transactions on the platform?',
      answare:
        'PromoTone uses a custom Stripe API that holds transaction money until both parties confirm the promotion. This allows for safe refunds if the deal is not confirmed by both parties within a set period of time.',
    },
    {
      question: 'What is the target audience for PromoTone?',
      answare:
        'The target audience for PromoTone includes social media creators aged 16-24 with an established following along with brands and startups building their creator marketing reach. ',
    },
    {
      question:
        'How does PromoTone differ from traditional talent agencies and other creator marketing platforms?',
      answare:
        'PromoTone is a self-serve, hands-off platform that matches brands and creators, as opposed to being a marketing agency. Both parties can collaborate and have full creative control over their promotions. Brands and startups have more applicable advertising options.',
    },
    {
      question:
        'How do you plan to grow and acquire new users, both creators and businesses?',
      answare:
        'PromoTone plans to establish brand awareness on major college campuses, targeting creators aged 16-24, and connecting with brands and startups. PromoTone will have campus representatives at various universities and leverage social media creators to promote the platform.',
    },
    {
      question:
        '.How is PromoTone organized and managed? Who makes up the team behind the platform?',
      answare:
        'PromoTone LLC has three owners: Jad Merie, Nathan Kalosa-Kenyon and Vanik Zakarian. The company consists of two departments: business development and product development. The business development team makes final decisions, implements marketing strategies, and manages day-to-day operations. The development team focuses on the functionality and production of the platform',
    },
    {
      question: 'Can international creators and businesses join PromoTone?',
      answare:
        'At the moment PromoTone is focused on acquiring a customer base in the United States and expanding internationally as our platform grows.',
    },
  ];

  return (
    <section className="bg-[#F3F5F6] py-16 mb-16">
      <div className="container grid gap-10  ">
        <div>
          <div>
            <h2 className="heading pb-10">Frequently Asked Questions</h2>

            <div className="h-[3px] mb-2 w-full bg-[#D7DEF0]" />
          </div>
          {faqData.map((data, i) => (
            <Accordion key={i} open={open === i + 1} animate={customAnimation}>
              <AccordionHeader
                className=" !text-base md:!text-lg !text-black !font-inter !font-bold"
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
