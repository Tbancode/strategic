'use client';
import { PayStripe, Footer, Header } from '@/components';
import { BookASeatWrapper, BookASeatHeroSection } from './styles';
import Stripe from '@/components/UI/Event/Stripe';
import { useState } from 'react';

const BookASeat = () => {
  return (
    <BookASeatWrapper>
      <Header />
      <BookASeatHeroSection>
        <header>
          <h1>BOOK EXPERIENCE</h1>
        </header>
      </BookASeatHeroSection>
      
      <PayStripe
        title="Book A Seat Today!"
        subtitle="Secure your spot at the Global Entrepreneurship Festival 2024!"
        isHomepage={false}
        buttonText="BOOK A SEAT"
        isDark={true}
        maxWidth="24.625rem"
      />
      <Footer />
    </BookASeatWrapper>
  );
};

export default BookASeat;
