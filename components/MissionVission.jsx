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
          Lorem ipsum dolor sit amet consectetur. Egestas cursus vulputate
          vulputate consequat ornare imperdiet. Interdum proin tortor nisl
          hendrerit bibendum nulla. Sodales malesuada pulvinar praesent lectus
          eu odio bibendum. Neque arcu egestas et commodo a maecenas in nec
          elit.
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
          Lorem ipsum dolor sit amet consectetur. Egestas cursus vulputate
          vulputate consequat ornare imperdiet. Interdum proin tortor nisl
          hendrerit bibendum nulla. Sodales malesuada pulvinar praesent lectus
          eu odio bibendum. Neque arcu egestas et commodo a maecenas in nec
          elit.
        </p>
      </div>
    </div>
  );
};

export default MissionVission;
