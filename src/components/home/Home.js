import React from 'react';
import { Helmet } from 'react-helmet-async'; // <-- 1. IMPORT HELMET
import HeroSection from './herosection';
import FeaturesSection from './scfeatures';
import SuperCoachesSection from './supercoaches';
import CoachCarousel from './coachcarousel';
import ConsultCoveSection from './consultcove';
import ConsultingAreasCarousel from './consultingareas';
import TestimonialsTicker from './testimonials';

const Home = () => {
  return (
    <>
      {/* 2. ADD SEO TAGS FOR THIS PAGE */}
      <Helmet>
        <title>Your Website's Home Page Title</title>
        <meta name="description" content="ConsultCraft Inc. is a global technology company offering innovative web and mobile platforms—SportsCove© and ConsultCove©—to connect professionals, athletes, and experts in sports, business, and education across India, the U.S., and worldwide." />
      </Helmet>

      <HeroSection />
      <FeaturesSection />
      <SuperCoachesSection />
      <CoachCarousel />
      <ConsultCoveSection />
      <ConsultingAreasCarousel />
      <TestimonialsTicker />
    </>
  );
};

export default Home;