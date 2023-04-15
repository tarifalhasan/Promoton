import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Nevbar';
import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs';
import Services from '@/components/Home/Services';
import HowItWork from '@/components/Home/HowItWork';
import Faq from '@/components/Home/Faq';
import Contact from '@/components/Home/Contact';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Mailchimp from '@/components/Mailchimp';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Services />
      <HowItWork />
      <Faq />
      {/* <Contact /> */}
      <Mailchimp />
    </Layout>
  );
}
