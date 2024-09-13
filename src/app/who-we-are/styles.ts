'use client';
import { styled } from 'styled-components';
import about_us_banner from '../../../public/images/about_us_banner.png';
import cta_bg from '../../../public/images/cta_bg.png';
import about_us_bg from '../../../public/svgs/about_us_bg.svg';

export const AboutUsHeroSection = styled.section`
  background: url(${about_us_banner.src}) no-repeat;
  background-size: cover;
  height: 38.875rem;
  display: flex;
  align-items: center;

  p {
    max-width: 70.8125rem;
    color: var(--White, #fff);
    text-align: center;
    font-size: 1.9375rem;
    line-height: 149%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: 31.5rem;
    p {
      width: 95%;
      margin: 0 auto;
      font-size: 1.25rem;
      line-height: 2.29375rem; /* 183.5% */
    }
  }
`;

export const OurMission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
  background: url(${about_us_bg.src}) no-repeat;
  background-position: bottom center;

  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const MainImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  align-items: center;
  max-width: 56.25rem;
  margin: -10% auto 0;

  img {
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 95%;
    gap: 0.5rem;

    img {
      height: 13.75rem;
      border-radius: 0.43331rem;
    }
  }
`;

export const MissionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 7.16rem;
  gap: 11.78rem;

  @media (max-width: 768px) {
    margin-top: 4.5rem;
    gap: 5.62rem;
  }
`;

export const MissionTextCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 52.8125rem;
  margin: 0 auto;
  gap: 1.31rem;

  h3 {
    color: var(--Gold, #d7ac43);
    font-family: var(--font-lora);
    font-size: 1.9375rem;
    font-weight: 700;
    line-height: 120%; /* 2.325rem */
  }

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 2rem;
    line-height: normal;
  }

  @media (max-width: 768px) {
    width: 95%;
    gap: 0.75rem;
    p {
      font-size: 1rem;
      line-height: 120%; /* 1.2rem */
    }
  }
`;

export const AboutUsCTASection = styled.div`
  background: url(${cta_bg.src}) no-repeat;
  background-size: cover;
  height: 21.1875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 19.625rem;
  }
`;

export const AboutUsCTAInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h1 {
    color: #fff;
    text-align: center;
    font-family: var(--font-lora);
    font-size: 2.56525rem;
    line-height: 2.73631rem; /* 106.667% */
  }

  a {
    display: flex;
    max-width: 24.375rem;
    width: 100%;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    background: var(--Charcoal, #171717);
    color: var(--White, #fff);
    font-size: 1rem;

    font-weight: 500;
    line-height: 1.58625rem; /* 158.625% */
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    transition: background 0.5s ease-in-out;

    &:hover {
      background: var(--White, #fff);
      color: #171717;
    }
  }

  @media (max-width: 768px) {
    gap: 2.5rem;
    h1 {
      max-width: 22.5625rem;
      font-size: 1.9375rem;
      line-height: 120%;
    }

    a {
      width: auto;
    }
  }
`;
