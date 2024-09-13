'use client';
import { styled } from 'styled-components';
import event_megaphone from '../../../public/images/event_megaphone.png';

export const EventsHeroSection = styled.div`
  display: flex;
  align-items: center;
  background: url(${event_megaphone.src}) no-repeat, var(--blue, #1a27c9);
  background-position: right bottom;
  height: 38.875rem;

  @media (max-width: 768px) {
    height: 19.25rem;
    gap: 1.25rem;
    background-size: 40%;
  }
`;

export const EventHeroInner = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 8rem;
    line-height: 120%; /* 9.6rem */
  }

  p {
    max-width: 26.625rem;
    color: var(--Grey, #d9d9d9);
    font-size: 1.25rem;
    line-height: 1.54331rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;

    h1 {
      font-size: 3.0625rem;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.40625rem; /* 140.625% */
    }
  }
`;
