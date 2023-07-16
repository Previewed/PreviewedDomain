'use client';

import styled from 'styled-components';
import {
  Cta,
  FeaturesBlocks,
  Footer,
  Header,
  HeroHome,
  PricingTables,
  Process,
  Tabs,
  TestimonialsBlocks,
} from '@previewed-inc/ui';
import './styles.css';
import React, { useEffect } from 'react';
import Aos from 'aos';

const StyledPage = styled.div``;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    });
  });
  return (
    <StyledPage>
      <Header />
      <HeroHome />
      <Tabs />
      <Process />
      <PricingTables />
      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />
      <Footer />
    </StyledPage>
  );
}
