'use client';
import { Footer, Header } from '@/components';
import Image from 'next/image';
import ic_event_location from '../../../../../public/svgs/ic_event_location.svg';
import ic_event_calendar from '../../../../../public/svgs/ic_event_calendar.svg';
import ic_simple_icon from '../../../../../public/svgs/ic_simple_icon.svg';
import flow_1 from '../../../../../public/svgs/what_you_get_flow_1.svg';
import flow_2 from '../../../../../public/svgs/what_you_get_flow_2.svg';
import what_you_get_mobile from '../../../../../public/svgs/what_you_get_mobile_2.svg';
//first change
import CountdownTimer from './countdown';
import TheGuest from './guest_speakers';
import MapPage from '../global-entrepreneurship-festival/why_attend';
import Perks from '../../../../../public/svgs/Perks.svg';
import Itinerary from '../../../../../public/svgs/Itinerary.svg';
import Itinerarymobile from '../../../../../public/svgs/Itinerarymobile.svg';
import mobileperks from '../../../../../public/svgs/mobileperks.svg';
import ImageSelectionComponent from '../global-entrepreneurship-festival/call';
import select from '../../../../../public/svgs/select.svg';
import Stripe from '@/components/UI/Event/Stripe';

import {
  PageWrapper,
  PageHeroSection,
  EventInfoBox,
  PageInner,
  BookASeat,
  AboutThisEvent,
  Panelist,
  ImageWrapper,
  OrderOfEvents,
  OrderOfEventsInner,
  EventsWrapper,
  EventBox,
  SpecialGuestsCtn,
  GuestSpeakers,
  OurStanceSection,
  OurStanceInner,
  WhatYouGetSection,
  MealSection,
  WhatYouGetMobile,
  Comment,
  LinkBtn,
  VIP,
  Perk,
  Immersion,
  Ticket,
  TicketCard,
  Card,
  PayTicket,
  Schedule
} from './styles';

import {
  order_of_events,
  speakers,
  special_guests,
} from '../../../../../constants/eventData';

import SlideCtnWrapper from '@/components/UI/Event/Panelists/Slider/SlideCtnWrapper';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

//Working on timer
const targetDate = "2024-11-11T00:00:00";



const GlobalEntrepreneurshipFestival = () => {
  const [openContent, setOpenContent] = useState(false);


  // const handleCardClick = (price: string) => {  // Explicitly typing 'price' as a string
  //   localStorage.setItem('selectedPrice', price);  // Store the price in localStorage
  //   console.log(`Price saved: ${price}`);
  // };
  const handleCardClick = ( price: string, title: string, cardContent: string[], subtitle: string) => {
    localStorage.setItem('selectedPrice', price);  // Store the price in localStorage
    localStorage.setItem('selectedContent', JSON.stringify(cardContent));  // Store the content in localStorage
    localStorage.setItem('selectedCardTitle', title);
    localStorage.setItem('selectedCardSubtitle', subtitle)
    console.log(`Price saved: ${price}, Content saved: ${cardContent}`);
  };

  // const handleCardClick = (price: string, title: string, cardContent: string[], subtitle: string) => {
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('selectedPrice', price); // Store the price in localStorage
  //     localStorage.setItem('selectedContent', JSON.stringify(cardContent)); // Store the content in localStorage
  //     localStorage.setItem('selectedCardTitle', title);
  //     localStorage.setItem('selectedCardSubtitle', subtitle);
  //     console.log(`Price saved: ${price}, Content saved: ${cardContent}`);
  //   }
  // };
  

  const Select = (
    <Image
      src={select}
      alt="Description"
      width={9.9}
      height={8.17}
      priority
    />
  );  

 const Pay = (<PayTicket><a href="global-entrepreneurship-festival/book-a-seat">GET TICKET</a></PayTicket>) 

  return (
    <PageWrapper>
      <Header />
      <PageHeroSection>
        <h1>
          Global <span>Entrepreneurship</span> Festival
        </h1>
        <p>
          Vent with big names from different sector here for Entrepreneurs, Leaders, YOU.
        </p>
        <EventInfoBox>
          <Image src={ic_event_location} alt="location icon" />
          <p>Entrepreneurship Village, Akure, Nigeria</p>
        </EventInfoBox>
        <EventInfoBox>
          <Image src={ic_event_calendar} alt="calendar icon" />
          <p>November, 11th - 13th 2024</p>
        </EventInfoBox>
        {/* Timer */}
        <CountdownTimer targetDate={targetDate} /> 
        <BookASeat href="#Ticket">
        {/* global-entrepreneurship-festival/book-a-seat */}
        Join the experience{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V14M14 4H20M20 4V10M20 4L10 14"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BookASeat>
      </PageHeroSection>

      <PageInner>
        <AboutThisEvent>
          
          <div>
            {/* <Image src={ic_simple_icon} alt="simple icon" /> */}
            <h3>Join a Global Gathering of Visionaries</h3>
          </div>
          <p>
          This November, Nigeria will host the Global Entrepreneurship Festival, a premier event where global leaders, entrepreneurs, creatives, and investors converge to create, innovate, and inspire. It&apos;s a unique opportunity to immerse yourself in a dynamic environment of high-value networking and collaboration, all set against the vibrant backdrop of Nigerian culture and hospitality.
          </p>
          <Image
               src="/images/aboutevent_image.png"
               alt="Description"
               width={892.99}
               height={496.93}
              //  priority
               />
        </AboutThisEvent>
      </PageInner>
            
      <VIP>
          <h1>Exclusive VIP Experience with Strategic Solutions Global</h1>
          <h3>Travel as a VIP guest with Strategic Solutions Global and enjoy a curated blend of Nigerian culture, tourism, and exclusive access to high-value networking events.</h3>

        <Panelist>
        <ImageWrapper>
        <Image
          src="/images/PanelistImg1.png"
          alt="Description"
          width= {286.67}
          height= {321}
          priority
        />
      </ImageWrapper>

      <ImageWrapper>
        <Image
          src="/images/PanelistImg2.png"
          alt="Description"
          style={{ borderRadius: '12px' }}
          width= {286.67}
         height= {321}
         priority
        />
      </ImageWrapper>

      <ImageWrapper>
        <Image
          src="/images/PanelistImg3.png"
          alt="Description"
          style={{ borderRadius: '12px' }}
          width= {286.67}
          height= {321}
          priority
        />
      </ImageWrapper>
         </Panelist>
         </VIP> 
              <Perk> 
               <div className='web'>
               <h2>VIP Guest Perks</h2>
               <Image
               src={Perks}
               alt="Description"
               width={902}
               height={749.73}
               priority
               className='web'
               />
               </div>
               <div className='mobile'>
               <Image
               src={mobileperks}
               alt="formobile"
               width={390}
               height={2170.45}
               priority
               />
               </div>
               </Perk>
               
               <MapPage />

        <Comment>The Global Entrepreneurship Festival has over 43 speakers and special guests invited to this event in Nigeria. Here are a few of the esteemed speakers you will meet during the Global Entrepreneurship Festival.</Comment>
      <SpecialGuestsCtn>
        <header>
          <h1>SPECIAL GUESTS</h1>
       
        </header>
        <div>
          {special_guests.map((guest, i) => (
            <SlideCtnWrapper
              key={i}
              src={guest.image}
              name={guest.name}
              flex={guest.flex}
            />
          ))}
        </div>
      </SpecialGuestsCtn>

   
      <TheGuest />
         <LinkBtn><a href="https://www.instagram.com/globalentrepreneurshipfestival/" target="_blank" >Learn more about GEF</a></LinkBtn>
 
               
               <Immersion>
                <h1>Cultural Immersion Itinerary</h1>
               <div className='Iweb' style={{marginTop: '100px'}}>
               <Image
               src={Itinerary}
               alt="Description"
               width={671}
               height={1092.93}
               priority
               />
               </div>
               <div className='Imobile' style={{marginTop: '100px'}}>
               <Image
               src={Itinerarymobile}
               alt="Description"
               width={431.82}
               height={663}
               priority
               />
               </div>
               </Immersion>
         
            <Ticket id='Ticket'>
                <h1>TICKET</h1>
                <h2>All VIP Guest are encouraged to fly Delta or United Airlines</h2>
              <TicketCard> 
               <Card >
                   <h2 >VIP Experience</h2>
                   <h4>(No Standard Airfare Included)</h4>
                   <h3 style={{marginTop:'20px'}}>$5,200</h3>
                   <p>{Select} {''}Personal Government Protocol Officer</p>
                   <p>{Select} 24/7 GEF Concierge Services</p>
                   <p>{Select} Armed Security</p>
                   <p>{Select} Private Transportation</p>
                   <p>{Select} 5 Star Accommodations</p>
                   <p>{Select} Complimentary Meals</p>
                   <p>{Select} Exclusive Tourism Activities in Lagos</p>
                   <p>{Select} VIP Nightlife Access</p>
                   <p>{Select} Private Networking Events & <br />{' '}High-Net-Worth Dinners</p>
                   <p>{Select} VIP Lounge Access</p>
                     
                     <PayTicket ><a href="global-entrepreneurship-festival/book-a-seat" onClick={() => handleCardClick('$5','VIP Platinum Experience', [
      "Personal Government Protocol Officer",
      "24/7 GEF Concierge Services",
      "Armed Security",
      "Private Transportation",
      "5 Star Accommodations",
       "Complimentary Meals",
      "Exclusive Tourism Activities in Lagos",
      "VIP Nightlife Access",
      "Private Networking Events High-Net-Worth Dinners",
      "VIP Lounge Access",], '(No Standard Airfare Included)')}> GET TICKET</a></PayTicket>
                     {/* <Link href={`/global-entrepreneurship-festival/book-a-seat?amount=${selectedAmount}`}></Link> */}
               </Card>
               <Card >
                   <h2>VIP Platinum Experience</h2>
                   <h4>(Standard Airfare Included)</h4>
                    <h3 style={{marginTop: '20px'}}>$7,000</h3>
                   <p>{Select} Personal Government Protocol Officer</p>
                   <p>{Select} 24/7 GEF Concierge Services</p>
                   <p>{Select} Armed Security</p>
                   <p>{Select} Private Transportation</p>
                   <p>{Select} 5 Star Accommodations</p>
                   <p>{Select} Complimentary Meals</p>
                   <p>{Select} Exclusive Tourism Activities in Lagos</p>
                   <p>{Select} VIP Nightlife Access</p>
                   <p>{Select} Private Networking Events & <br />{' '}High-Net-Worth Dinners</p>
                   <p>{Select} VIP Lounge Access</p>
                    <PayTicket ><a href="global-entrepreneurship-festival/book-a-seat" onClick={() => handleCardClick('$7,000','VIP Platinum Experience', [
      "Personal Government Protocol Officer",
      "24/7 GEF Concierge Services",
      "Armed Security",
      "Private Transportation",
      "5 Star Accommodations",
       "Complimentary Meals",
      "Exclusive Tourism Activities in Lagos",
      "VIP Nightlife Access",
      "Private Networking Events High-Net-Worth Dinners",
      "VIP Lounge Access",
    ], '(Standard Airfare Included)')}> GET TICKET</a></PayTicket>        
                    </Card>
                    
               <Card style={{background: 'linear-gradient(180deg, rgba(232, 160, 53, 0.41) -44.05%, rgba(192, 146, 78, 0) 93.75%)'}}>
                   <h2>VIP Platinum Experience</h2>
                   <h4>(No Airfare Included)</h4>
                   <h3 style={{marginTop: '20px'}}>$6,800</h3>
                   <p>{Select} VIP Experience Perks</p>
                   <p>{Select} 2 Custom Tailor Made Outfits</p>
                   <p>{Select} Access Wholesale Outsourcing <br /> Investment Opportunity</p>
                   <p>{Select} Hair & Beauty Care</p>
                   <p>{Select} ⁠Private Spa/Wellness Package</p>
                   <p>{Select} 5 Star Accommodations</p>
                   <p style={{marginBottom: '140px'}}>{Select} Exclusive Tourism Activities in Lagos</p>
                   {/* {Pay} */}
                   <PayTicket ><a href="global-entrepreneurship-festival/book-a-seat" onClick={() => handleCardClick('$6,800','VIP Platinum Experience', [
      "VIP Experience Perks",
      "2 Custom Tailor Made Outfits",
      "Access Wholesale Outsourcing Investment Opportunity",
      "Hair & Beauty Care",
      "⁠Private Spa/Wellness Package",
      " 5 Star Accommodations",
      "Exclusive Tourism Activities in Lagos"], '(No Airfare Included)')}>GET TICKET</a></PayTicket>
               </Card>
               <Card style={{background: 'linear-gradient(180deg, rgba(232, 160, 53, 0.41) -44.05%, rgba(192, 146, 78, 0) 93.75%)'}}>
                   <h2>VIP Platinum Experience</h2>
                   <h4>(Standard Airfare Included)</h4>
                   <h3 style={{marginTop: '20px'}}>$8,700</h3>
                   <p>{Select} VIP Experience Perks</p>
                   <p>{Select} 2 Custom Tailor Made Outfits</p>
                   <p>{Select} Access Wholesale Outsourcing <br /> Investment Opportunity</p>
                   <p>{Select} Hair & Beauty Care</p>
                   <p>{Select} ⁠Private Spa/Wellness Package</p>
                   <p>{Select} 5 Star Accommodations</p>
                   <p style={{marginBottom: '140px'}}>{Select} Exclusive Tourism Activities in Lagos</p>
                   <PayTicket ><a href="global-entrepreneurship-festival/book-a-seat" onClick={() => handleCardClick('$8,700','VIP Platinum Experience', [
    "VIP Experience Perks",
    "2 Custom Tailor Made Outfits",
    "Access Wholesale Outsourcing Investment Opportunity",
    "Hair & Beauty Care",
    "⁠Private Spa/Wellness Package",
    " 5 Star Accommodations",
    "Exclusive Tourism Activities in Lagos"], '(Standard Airfare Included)')} >GET TICKET</a></PayTicket>
               </Card>
               
              </TicketCard>
            </Ticket>
              <Schedule>
                <div>
                  <h3>Schedule a call with our personalized booking agents</h3>
                  <h4>Don’t miss this chance to be part of a transformative event that blends business, culture and adventure. Schedule your 1:1 today and join us for a one-of-a-kind experience at the Global Entrepreneurship Festival!</h4>
                </div>
                
              </Schedule>
              <ImageSelectionComponent />
              {/* <Stripe amount={selectedAmount} /> */}
           <Footer />
    </PageWrapper>
  );
};

export default GlobalEntrepreneurshipFestival;


