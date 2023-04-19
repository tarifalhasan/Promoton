import Layout from '@/components/Layout';
import MissionVission from '@/components/MissionVission';
import Team from '@/components/Team';
import { AboutPageImage, MissionIcon, VisionIcon } from '@/components/svg/svg';
import Image from 'next/image';

const AbouUs = () => (
  <Layout>
    <div className="container  py-16 space-y-28">
      <div>
        <div className="flex justify-center">
          <AboutPageImage className={'max-w-[600px]'} />
        </div>
        <div className=" space-y-5">
          <div className=" pb-10">
            <h2 className="text-center   before: before:rounded-md font-Montserrat heading">
              What Is PromoTone?
            </h2>
            <div className=" max-w-[240px] lg:max-w-[308px] w-full mx-auto h-[5px] bg-[#7144D4] "></div>
          </div>
          <div className=" space-y-8">
            <p>
              Welcome to Promotone! We are an innovative platform that connects
              talented social media creators with small businesses and startups
              looking to market their products to the right audience. Our goal
              is to foster meaningful partnerships between creators and
              businesses, driving growth and success for both parties.
            </p>
            <p>
              We understand that finding the perfect match can be a challenge.
              That's why we've developed a smart algorithm that matches creators
              and businesses based on their common interests and geography. This
              ensures that each collaboration is a perfect fit and generates the
              maximum impact.
            </p>
            <p>
              At PromoTone, we believe in the power of community and
              collaboration. By working together, creators and businesses can
              unlock new opportunities and reach new heights. Join us on this
              exciting journey and experience the magic of successful
              partnerships!
            </p>
          </div>
        </div>
      </div>
      {/* mission vission */}
      <MissionVission />
      <Team />
    </div>
  </Layout>
);

export default AbouUs;
