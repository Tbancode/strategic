'use client';
import styled from 'styled-components';
import event_hero_bg from '../../../../../public/svgs/details_hero_bg.svg';
import meal_accomodation from '../../../../../public/svgs/meal_accomodation_bg.svg';
import event_details_inner_bg from '../../../../../public/images/event_details_inner_bg.png';
import our_stance_bg from '../../../../../public/images/our_stance_bg.png';
import Link from 'next/link';

export const PageWrapper = styled.div``;

export const PageHeroSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 0;
  background: url(${event_hero_bg.src}) no-repeat;
  text-align: center;
  color: var(--White);
  background-size: cover;
  background-position: bottom center;

  h1 {
    max-width: 61.125rem;
    font-family: var(--font-lora);
    font-size: 3.8125rem;
    line-height: 120%; /* 4.575rem */
    text-transform: uppercase;
    margin-bottom: 1.5rem;

    span {
      color: var(--Gold, #ffbd00);
    }
  }

  & > p {
    max-width: 25.375rem;
    font-family: var(--font-lora);
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 0 3rem;
    h1 {
      font-size: 1.9375rem;
      margin: 1.25rem;
      width: 90%;
    }

    & > p {
      font-size: 1rem;
      line-height: 120%; /* 1.2rem */
      max-width: 24.375rem;
      margin-bottom: 2rem;
      width: 90%;
    }
  }
`;

export const EventInfoBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 476px;
  padding: 1.875rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.75rem;
  background: var(
    --lin,
    linear-gradient(
      219deg,
      rgba(0, 8, 193, 0.5) -32.35%,
      rgba(255, 255, 255, 0) 111.78%
    )
  );

  p {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 120%; /* 1.5rem */
  }

  &:first-of-type {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 768px) {
    max-width: 23.125rem;
    padding: 1.25rem 0rem;
    width: 95%;

    p {
      font-size: 1rem;
    }
  }
`;

export const PageInner = styled.div`
  padding: 6.25rem 0 0;
  background: radial-gradient(47.05% 50% at 50% 50%, rgba(26, 39, 201, 0.34) 0%, rgba(26, 39, 201, 0) 100%);
  background-position: bottom;
  height: 1161px;
  background-repeat: no-repeat; /* Prevent repeating */
  /* animation: gradientAnimation 10s ease infinite; */


  @media (max-width: 768px) {
    padding-top: 4rem;
    background: none;
  }
`;

export const BookASeat = styled(Link)`
  display: flex;
  text-transform: uppercase;
  width: 100%;
  max-width: 22.5rem;
  padding: 1.0625rem 3.9375rem;
  justify-content: center;
  align-items: center;
  background: var(--blue, #1a27c9);
  gap: 0.63rem;
  margin-top: 3.75rem;
  font-size: 1rem;
  line-height: 1.58625rem; /* 158.625% */
  letter-spacing: 0.075rem;
  font-weight: 500;

  transition: background 0.3s ease-in-out;

  &:hover {
    background: #4754ff;
  }

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    width: 90%;
    max-width: 16.375rem;
    padding: 1.0625rem 2.0625rem;
    font-size: 12px;
  }
`;

export const AboutThisEvent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1130px;
  margin: 0 auto;
  justify-content: center;
  gap: 1.25rem;
  align-items: center;
  margin-bottom: 6.25rem;
  /* background: radial-gradient(47.05% 50% at 50% 50%, rgba(26, 39, 201, 0.34) 0%, rgba(26, 39, 201, 0) 100%); */


  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    h3 {
      color: var(--Gold, #ffbd00);
      font-family: var(--font-lora);
      text-align: center;
      font-weight: 700;
      font-size: 2rem;
      line-height: 120%; /* 1.875rem */
    }
  }

  p {
    max-width: 54.125rem;
    color: var(--White);
    font-weight: 400;
    font-family: var(--font-satoshi);
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.25rem 0;
    width: 90%;

      h3 {
        font-size: 1rem;
      }
    

    p {
      font-size: 1rem;
      gap: 1.25rem;
      max-width: 100%;
    }
    img{
      width: 389.95px;
      height: 217px;



    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 2.5rem;
    flex-direction: column;
    width: 90%;

    p {
      max-width: 100%;
    }
  }
`;

export const Comment = styled.div`
   text-align: center;
   width: 769.43px;
   margin: 77px auto;
   height: 90px;
   color: #ffffff;
   font-size: 24px;
   font-family: var(--font-satoshi);
   @media (max-width: 768px) {
    margin-top: 150px;
    font-size: 16px;
    line-height: 30px;
    width:  98%;
    height:  120px;


  }
`

export const OrderOfEvents = styled.div`
  margin: 6.25rem 0;
  background: url(${event_details_inner_bg.src}) no-repeat;
  background-position: center top 10%;

  &.hide_bg {
    background: none;
  }

  @media (max-width: 768px) {
    background: none;
    margin: 3.75rem 0;
  }
`;

export const OrderOfEventsInner = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      color: var(--Gold, #ffbd00);
      font-family: var(--font-lora);
      font-size: 1.9375rem;
      line-height: 120%; /* 2.325rem */
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    p {
      color: #fff;
      font-size: 1.25rem;
      line-height: 1.54331rem; /* 123.467% */
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 3.75rem auto;
    gap: 2rem;

    & > div:first-of-type {
      gap: 1.25rem;

      h1 {
        font-size: 1.25rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.40625rem; /* 140.625% */
      }
    }

    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
  }
`;

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`;

export const EventBox = styled.div`
  display: flex;
  padding: 0 0 1.75rem;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  font-family: var(--font-satoshi);
  color: var(--White, #fff);
  border-bottom: 0.01875rem solid var(--Grey, #d9d9d9);

  &:last-of-type {
    border-bottom: none;
  }

  h3 {
    width: 21.5625rem;
    font-size: 1.5625rem;
    font-weight: 700;
    line-height: 2.48125rem;
    flex-shrink: 0;
  }

  p {
    max-width: 46.5625rem;
    font-size: 1rem;
    line-height: 1.40625rem;
  }

  @media (max-width: 768px) {
    padding: 0 0 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    h3 {
      font-size: 1rem;
      line-height: 120%;
    }

    p {
      font-size: 0.8125rem;
      line-height: 120%; /* 0.975rem */
    }
  }
`;

export const SpecialGuestsCtn = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 471.72px;
  margin: 217px auto 6.25rem;
  justify-content: center;
  align-content: center;
  
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  

  header {
    display: flex;
    flex-direction: column;
    align-content: center;
    /* align-items: flex-start; */
    justify-content: center;
    gap: 2rem;

    h1 {
      color: var(--Gold, #ffbd00);
      font-family: var(--font-lora);
      font-size: 1.9375rem;
      text-align: center;
      line-height: 120%; /* 2.325rem */
    }

    p {
      color: var(--White);
      font-family: var(--font-satoshi);
      font-size: 1.25rem;
      line-height: 1.54331rem; /* 123.467% */
    }
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3.375rem;
  }

  @media (max-width: 768px) {
    margin-top: 150px;
    margin-bottom: 1.98rem;
    width: 100%;

    header {
      width: 90%;
      margin: 0 auto;

      gap: 1.25rem;
      h1 {
        font-size: 1.25rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.40625rem; /* 140.625% */
      }
    }

    & > div {
      display: inline-flex;
      overflow-x: auto;
      gap: 2.5rem;
      padding: 0 1.25rem;

      &::-webkit-scrollbar {
        display: none !important;
      }

      & > div {
        flex-shrink: 0;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 1.98rem;
    width: 100%;

    header {
      width: 90%;
      margin: 0 auto;

      gap: 1.25rem;
    }

    & > div {
      display: inline-flex;
      overflow-x: auto;
      gap: 2.5rem;
      padding: 0 3rem;

      &::-webkit-scrollbar {
        display: none !important;
      }

      & > div {
        flex-shrink: 0;
      }
    }
  }
`;

export const LinkBtn = styled.button`
        font-weight: 500;
        font-size: 15px;
        font-family: var(--font-satoshi);
        text-transform: uppercase;
        background: transparent;
        border-color: #ffffff;
        color: #ffffff;
        fill: none;
        display: block;
        border: 2px solid #D9D9E3;
        width: 322px;
        height: 60px;
        margin: 98.99px auto;
        padding: 17px 33px;
        cursor: pointer;
        a{
          text-decoration: none;
        }
        @media (max-width: 768px) {
        width: 262px;
        height: 60px;
        font-size: 15px;
        margin-top: 30px;
        }
` 


export const PayTicket = styled.button`
        font-weight: 500;
        font-size: 15px;
        font-family: var(--font-satoshi);
        background: transparent;
        border-color: #ffffff;
        border-radius: 8px;
        color: #ffffff;
        fill: none;
        display: block;
        border: 1px solid #D9D9E3;
        width: 213px;
        height: 57px;
        margin: 50px auto;
        padding: 17px 33px;
        cursor: pointer;
        a{
          text-decoration: none;
        }
        @media (max-width: 768px) {
          width: 90%;
          font-size: 13.26px;
          line-height: 24.39px;
          
        }
`
export const VIP = styled.div`
       width: 902px;
       height: 800.48px;
       margin: -100px auto auto auto;
       display: flex;
       flex-direction: column;
       align-content: center;
       align-items: center;
       img{
        width: 286.67px;
        height: 321px;
        border-radius: '12px';
       }

       h1{
        font-size: 32px;
        margin-bottom: 37px;
        width: 523.01px;
        height: 76px;
        text-align: center;
        font-family: var(--font-lora);
        font-weight: 700;
        color: var(--Gold, #ffbd00);
       }

       h3{
        font-size: 20px;
        line-height: 30px;
        width: 523.01px;
        height: 90px;
        color: #FFFFFF;
        text-align: center;
        font-family: var(--font-satoshi);
        font-weight: 400;
        margin-bottom: 100px;
       }
       
       
       @media (max-width: 768px) {
       margin-top: -350px;
       width: 390px;
       height: 700.45px;
       img{
        width: 244.94px;
        height: 274.28px;
       }
       h1{
        font-size: 20px;
        line-height: 24px;
        width: 374px;
        height: 48px;
       
       }

       h3{
        font-size: 16px;
        line-height: 30px;
        width: 388px;
        height: 68px;
        margin-bottom: 100px;
       }
      }

`
export const Perk = styled.div`
         background: radial-gradient(47.05% 50% at 50% 50%, rgba(26, 39, 201, 0.34) 0%, rgba(26, 39, 201, 0) 100%);
         .web{
          margin: auto auto 300px auto;
         width: 902px;
         height: 824px;
         justify-content: center;
         h2{
        font-size: 25px;
        line-height: 30px;
        width: 426.42px;
        height: 30px;
        color: var(--Gold, #ffbd00);
        text-align: center;
        font-family: var(--font-lora);
        font-weight: 400;
        margin: auto auto 50px auto;
        /* margin-bottom: 60px; */
       }
      }
      .mobile{
        display: none;
      }
      @media (max-width: 768px) {
        .web{
          display: none;
        }
        .mobile{
          display: inline-flex;
          margin: auto auto 150px auto;
          width: 100%;
          justify-content: center;
        }
      }

`

export const Panelist = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  width: 900px;
  height: 321px;
  

  @media (max-width: 768px) {
    overflow-x: auto;
    gap: 5px;
    padding: 5px;
    width: 100%;
     // Ensure the panel takes the full width on mobile

    &::-webkit-scrollbar {
      display: none !important; // Hide the scrollbar
    }
  }
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 286.67px; // Ensure the width matches the image size
  height: 321px;
  border-radius: 12px;
  

  @media (max-width: 768px) {
    scroll-snap-align: start;
    width: 244.94px;
    height: 274.28px;
    margin: 7px;


  }
`;


export const Immersion = styled.div`
       width: 700px;
       height: 1200.48px;
       margin: auto;
       display: flex;
       flex-direction: column;
       align-content: center;
       align-items: center;
       justify-content: center;
       h1{
        font-size: 32px;
        margin-bottom: 5px;
        margin-top: 193.19px;
        width: 458px;
        line-height: 38.4px;
        height: 38px;
        text-align: center;
        font-family: var(--font-lora);
        font-weight: 700;
        color: var(--Gold, #ffbd00);
       }
       .Imobile{
        display: none;
       }
       @media (max-width: 768px) {
         width: 431.82px;
         height: 663px;
         h1{
          font-size: 20px;
          line-height: 24px;
          height: 24px;
          margin-top: 100px;
          margin-bottom: -50px;
         }
         .Iweb{
          display: none;
         }
         .Imobile{
          display: inline-block;
         }

  }
`

export const Ticket = styled.div`
        width: 1358px;
        height: 684px;
        margin: 300.11px auto 200px auto;
        justify-content: center;
        align-items: center;
        align-content: center;
        background: radial-gradient(47.05% 50% at 50% 50%, rgba(26, 39, 201, 0.34) 0%, rgba(26, 39, 201, 0) 100%);

        h1{
          font-family: var(--font-lora);
          font-weight: 700;
          font-size: 32px;
          color: var(--Gold, #ffbd00);
          text-align: center;
          line-height: 38.4px;
          margin-top: 60px;
          margin-bottom: 59px;

        }
        h2{
          font-family: var(--font-satoshi);
          font-weight: 400;
          font-size: 20px;
          color: #FFFFFF;
          text-align: center;
          line-height: 30px;
          margin-top: 60px;
          margin-bottom: 59px;
        }
        @media (max-width: 768px) {
          width: 95%;
          height: 3400px;
          margin: 150px auto;
          h1{
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 30px;
          }
          h2{
            width: 223px;
            height: 42px;
            font-size: 16px;
            margin: auto;
            text-align: center;
            font-weight: 400;
            line-height: 20.8px;
          }
        }
`



export const TicketCard = styled.div`
          width: 1358px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          /* padding: 28px; */
          @media (max-width: 768px) {
          width: 98%;
          height: 3264px;
          flex-direction: column;
          align-items: flex-start;
          margin: auto;
;
          
        }
`
export const Card = styled.div`
        width: 316px;
        height: 613px;
        border-radius: 16px;
        /* margin-right: 28px; */
        background: linear-gradient(219.07deg, rgba(0, 8, 193, 0.48) -32.35%, rgba(255, 255, 255, 0) 111.78%);
       h2{
          font-family: var(--font-lora);
          font-size: 20px;
          font-weight: 700;
          line-height: 24px;
          text-align: left;
          color: #ffffff;
          margin: 30px  0px 0px 25px ;

       }
       h4{
        font-family: var(--font-satoshi);
        font-size: 14px;
        font-weight: 400;
        line-height: 16.8px;
        text-align: left;
        margin-left: 25px;
        /* margin-top: 4px; */
        color: #ffffff;

       }
       & > h3{
        margin: 30px 25px;
        font-family: var(--font-satoshi);
        font-size: 36px;
        font-weight: 700;
        line-height: 48.6px;
        text-align: left;
        color: var(--Gold, #ffbd00);

       }
       p{
        display: flex;
        align-items: center;
        margin-left: 25px;
        color: #ffffff;
        margin-bottom: 14px;
        font-size: 14px;
        padding-left: 10px;
        gap: 10px;
        font-family: var(--font-satoshi);
       }
       @media (max-width: 768px) {
        width: 90%;
        height: 700px;
        margin: auto auto 50px auto;
       
        h2{
          font-size: 20px;
          width: 260px;
          height: 24px;
          text-align: left;
          margin: 40px auto 0px 40px;
          line-height: 33.2px;
        }
        h4{
          font-size: 18px;
          width: 280px;
          height: 24px;
          text-align: left;
          margin-left: 40px;
          margin-top: 8px;
          margin-bottom: 30px;
          line-height: 24px;
        }
        h3{
          font-size: 36px;
          width: 139px;
          height: 29px;
          text-align: left;
          margin-left: 45px;
          margin-bottom: 30px;
          /* margin: 5px auto 25px auto; */
          line-height: 24px;
        }
        p{
          font-size: 14px;
          width: 287px;
          height: 19px;
          text-align: left;
          /* margin: 25px auto auto auto; */
          line-height: 19.2px;
        }
       }

`
export const Schedule = styled.div`
         width: 1077px;
         margin: 300px auto auto auto;
         div{
          width: 986px;
          height: 151px;
          color: #ffffff;
          margin: auto;
          
        h3{
           font-size: 39px;
           font-weight: 700;
           line-height: 46.8px;
           text-align: center;
           font-family: var(--font-lora);
           margin-bottom: 20px;
        }
        h4{
          width: 681.04px;
          margin: auto;
          height: 84px;
          font-family: var(--font-satoshi);
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          text-align: center;

        }
    }
    @media (max-width: 768px) {
      margin-top: 100px;
      width: 100%;
      div{
        width: 95%;
        height: 162px;
        h3{
          font-size: 20px;
          width: 332px;
          height: 48px;
          line-height: 24px;
          margin: auto auto 30px auto;
        }
        h4{
          font-size: 16px;
          width: 98%;
          height: 84px;
          line-height: 21px;
          margin: auto;
        }
    }
  }
`

export const GuestSpeakers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
  align-items: center;

  & > h2 {
    color: var(--Gold, #ffbd00);
    font-family: var(--font-lora);
    font-size: 1.9375rem;
    text-align: center;
    line-height: 120%; /* 2.325rem */
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3.375rem;
  }

  @media (max-width: 768px) {
    width: 100%;

    & > h2 {
      width: 90%;
      margin: 0 auto;
      font-size: 1.25rem;
    }

    & > div {
      display: inline-flex;
      overflow-x: auto;
      gap: 2.5rem;
      padding: 0 1.25rem;

      &::-webkit-scrollbar {
        display: none !important;
      }

      & > div {
        flex-shrink: 0;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;

    & > h2 {
      width: 90%;
      margin: 0 auto;
    }

    & > div {
      display: inline-flex;
      overflow-x: auto;
      gap: 2.5rem;
      padding: 0 3em;

      &::-webkit-scrollbar {
        display: none !important;
      }

      & > div {
        flex-shrink: 0;
      }
    }
  }
`;

export const OurStanceSection = styled.section`
  background: url(${our_stance_bg.src}) no-repeat;
  padding: 5.56rem 0 5.16rem;
  background-size: cover;
  background-position: bottom center;

  @media (max-width: 768px) {
    padding: 2.5rem 0;
  }
`;

export const OurStanceInner = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;

  header {
    width: 100%;
    h1 {
      font-family: var(--font-lora);
      font-size: 2.4375rem;
      line-height: 120%;
    }
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--White);
  }

  p {
    font-family: var(--font-satoshi);
    font-size: 1.5625rem;
    line-height: 2.48125rem; /* 158.8% */
  }

  a {
    display: flex;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    border: 2px solid #d9d9e3;
    color: #d9d9e3;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.58625rem; /* 169.2% */
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    transition:
      background 0.2s ease-in-out,
      color 0.4s ease-in-out;

    &:hover {
      background: #d9d9e3;
      color: var(--Charcoal);
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    gap: 1.5rem;

    header {
      h1 {
        font-size: 1.25rem;
      }
      padding-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.65625rem; /* 165.625% */
    }

    a {
      height: 3rem;
      font-size: 0.8125rem;
      line-height: 120%; /* 0.975rem */
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
  }
`;

export const WhatYouGetSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.25rem 0;
  gap: 5rem;
  align-items: center;

  h1 {
    margin-bottom: 4.19rem;
    width: 80%;
    margin: 0 auto;
    max-width: 1200px;
    color: var(--White, #fff);
    font-size: 1.9375rem;
    line-height: 120%; /* 2.325rem */
    text-transform: uppercase;
  }

  div {
    img {
      object-fit: contain;
    }
  }

  div:first-of-type {
    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    padding: 3.75rem 0;
    gap: 1.25rem;
    h1 {
      color: var(--Gold, #ffbd00);
      font-size: 1.25rem;
      width: 90%;
    }

    div {
      display: none;
    }
  }

  @media (min-width: 769px) and (max-width: 820px) {
    h1 {
      width: 90%;
    }
    div {
      display: none;
    }
  }
`;

export const MealSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.75rem;
  background:
    url(${meal_accomodation.src}) no-repeat,
    var(--Charcoal);
  background-position: bottom center;
  background-size: contain;
  height: 22.9375rem;

  h1 {
    color: #fff;
    text-align: center;
    font-size: 2.4375rem;
    line-height: 120%; /* 2.925rem */
  }

  a {
    display: flex;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    border: 2px solid #d9d9e3;
    color: #d9d9e3;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.58625rem; /* 169.2% */
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    transition:
      background 0.2s ease-in-out,
      color 0.4s ease-in-out;

    &:hover {
      background: #d9d9e3;
      color: var(--Charcoal);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 1.75rem;
    height: 12.75rem;
    background-size: cover;

    h1 {
      font-size: 1.25rem;
    }

    a {
      height: 3rem;
      font-size: 0.8125rem;
      line-height: 120%; /* 0.975rem */
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background-size: cover;
  }
`;

export const WhatYouGetMobile = styled.div`
  display: none;
  width: 100% !important;
  img {
    height: auto;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 820px) {
    display: flex !important;
  }
`;
