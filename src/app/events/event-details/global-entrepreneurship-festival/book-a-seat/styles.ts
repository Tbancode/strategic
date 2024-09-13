'use client';
import styled from 'styled-components';
import seat_hero_bg from '../../../../../../public/svgs/seat_hero_bg.svg';

export const BookASeatWrapper = styled.section``;

export const BookASeatHeroSection = styled.div`
  background: url(${seat_hero_bg.src}) no-repeat;
  background-position: bottom center;
  background-size: contain;

  header {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3.75rem 0;

    h1 {
      font-family: var(--font-lora);
      color: var(--White);
      font-size: 3.8125rem;
      line-height: 120%; /* 4.575rem */
      text-transform: uppercase;
    }
  }

  @media (max-width: 768px) {
    background-size: cover;

    header {
      width: 90%;
      padding: 1.25rem 0 2.5rem;
      h1 {
        font-size: 1.9375rem;
      }
    }
  }
`;
