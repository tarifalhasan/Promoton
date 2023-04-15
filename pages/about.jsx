import Layout from '@/components/Layout';
import MissionVission from '@/components/MissionVission';
import Team from '@/components/Team';
import { AboutPageImage, MissionIcon, VisionIcon } from '@/components/svg/svg';

const AbouUs = () => (
  <Layout>
    <div className="container py-16 space-y-28">
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
          <div className=" space-y-2">
            <p>
              PromoTone matches brands with students that have an following
              amounting 1000+ on social media
            </p>
            <p>
              We are running promotions with students on campus to promote local
              and national brands while monetizing students
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
