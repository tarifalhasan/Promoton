import React from 'react';
import { Avatar } from '@material-tailwind/react';

import member1 from '../img/team/1.png';
import member2 from '../img/team/2.png';
import member3 from '../img/team/3.png';
import member4 from '../img/team/4.png';
import member5 from '../img/team/5.png';

import Image from 'next/image';

const Team = () => {
  const Data = [
    {
      name: 'Nathan Kalosa-Kenyon',
      role: 'Co-Founder & CEO',
      img: member1,
    },
    {
      name: 'Jad Merie-Courtenay',
      role: 'Co-Founder ',
      img: member2,
    },
    {
      name: 'Vanik Zakarian',
      role: 'Co-Founder & COO',
      img: member3,
    },
    {
      name: 'Benjamin Wyngaard',
      role: 'Full-Stack Development',
      img: member4,
    },
    {
      name: 'Eashan Mathur',
      role: 'Frontend Development',
      img: member5,
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center   relative before:absolute before:top-[110%] before:transform before:translate-x-[21%]  before:w-[190px] before:h-[5px] before:bg-[#7144D4] before:rounded-md font-Montserrat heading">
        Meet The Team
      </h2>
      <p className="text-center py-11 text-[#263238]">
        The power of the youth - A composition of talent and experience
      </p>

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
        {Data.map((data, i) => (
          <div key={i} className="team h-[370px] grid place-items-center">
            <div className=" space-y-5">
              <Image
                className=" max-w-[145px] mx-auto"
                src={data.img}
                alt={data.name}
              />
              <h2 className="open-sens text-center text-xl font-semibold">
                {data.name}
              </h2>
              <h2 className="open-sens text-center text-xl font-semibold">
                {data.role}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
