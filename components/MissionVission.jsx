import React from 'react';
import { MissionIcon, VisionIcon } from '@/components/svg/svg';
const MissionVission = () => {
  return (
    <div className=" grid lg:grid-cols-2 gap-14">
      <div className="bg-[#FFFFFF] group/item hover:bg-[#7144D4] shadow_tarif_card min-h-[454px] space-y-10 text-black p-8 rounded-lg">
        <div className="grid place-items-center">
          <div className="w-[80px] h-[80px] group-icon group-hover/item:bg-white  grid place-items-center group/icon hover: bg-[#7144D4] rounded-md">
            <div className=" w-12 h-12 bg-[#7144D4]">
              <MissionIcon />
            </div>
          </div>
        </div>
        <h2 className=" text-4xl text-center group-hover/item:text-white font-Montserrat font-bold">
          Our Mission
        </h2>
        <p className="text-black text-center lg:text-left group-hover/item:text-white ">
          Our mission is to revolutionize the way creators and small businesses
          collaborate, by providing a seamless, intuitive platform that fosters
          meaningful connections and drives mutual growth.
        </p>
      </div>
      <div className="bg-[#FFFFFF] group/item hover:bg-[#7144D4] shadow_tarif_card min-h-[454px] space-y-10 text-black p-8 rounded-lg">
        <div className="grid place-items-center">
          <div className="w-[80px] h-[80px] group-icon group-hover/item:bg-white  grid place-items-center group/icon hover: bg-[#7144D4] rounded-md">
            <div className=" w-12 h-12 bg-[#7144D4]">
              <VisionIcon />
            </div>
          </div>
        </div>
        <h2 className=" text-4xl text-center group-hover/item:text-white font-Montserrat font-bold">
          Our Vision
        </h2>
        <p className="text-black text-center lg:text-left group-hover/item:text-white ">
          We envision a world where social media creators along with small
          businesses and startups come together to create a thriving marketing
          ecosystem, fueling innovation, creativity, and success on a global
          scale.
        </p>
      </div>
    </div>
  );
};

export default MissionVission;
