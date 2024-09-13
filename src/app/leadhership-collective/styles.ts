'use client';
import { styled } from 'styled-components';
import card_border from '../../../public/images/card_border.png';
import globe_bg from '../../../public/images/globe_bg.png';
import mobile_leadhership_bg from '../../../public/images/mobile_leadhership_bg.png';
import apply_now_bg from '../../../public/images/apply_now_bg.png';

export const LeadHershipHeroSection = styled.div`
  padding-top: 7.44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: url(${globe_bg.src}) no-repeat; */
  /* background-position: center 30%; */
  position: relative;

  & > img {
    position: absolute;
    z-index: 0;
    width: 100%;
    max-width: 1200px;
    object-fit: cover;
    top: -5%;
  }

  @media (max-width: 768px) {
    padding-top: 4.5rem;
    & > img {
      object-fit: none;
      height: 100%;
      top: -15%;
      width: 100vw;
    }
  }
`;

export const LeadHershipHeroTextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.81rem;
  text-align: center;
  align-items: center;
  max-width: 56.375rem;
  margin: 0 auto;

  h1 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 3.75rem;
    line-height: 4.20819rem; /* 112.218% */

    span {
      color: var(--Gold, #d7ac43);
    }
  }

  p {
    color: var(--White, #fff);
    font-size: 1.5625rem;
    line-height: 2.48125rem; /* 158.8% */
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    width: 95%;
    h1 {
      font-size: 1.9375rem;
      line-height: 120%; /* 2.325rem */
    }

    p {
      font-size: 1rem;
      line-height: 1.40625rem; /* 140.625% */
    }
  }
`;

export const WomenGlobe = styled.div`
  margin: 5.55rem auto;
  max-width: 45.875rem;
  width: 100vw;
  height: 28.46206rem;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 2.5rem auto;
    width: 100vw;
    height: 50vh;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const GridCardsCtn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.25rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    gap: 1.25rem;
  }
`;

export const Box = styled.div`
  display: flex;
  padding: 2.5rem 2.4375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  border-radius: 1.125rem;
  border-image-slice: 0 2 0 2;
  border-image-width: 20px 1px 20px 1px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
  border-image-source: url(${card_border.src});

  background: var(
    --box,
    linear-gradient(
      260deg,
      rgba(220, 222, 255, 0.09) 12.78%,
      rgba(117, 120, 207, 0) 118.25%
    )
  );
  /* Cards/Short Default */
  box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);

  img {
    width: 3.39288rem;
    height: 3.75rem;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.25rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  h4 {
    color: var(--White, #fff);
    font-family: var(--font-satoshi);
    font-size: 1.25rem;
    line-height: 120%; /* 1.5rem */
  }

  p {
    color: var(--White, #fff);
    font-size: 1rem;
    line-height: 1.40625rem; /* 140.625% */
  }

  @media (max-width: 768px) {
    gap: 0.62rem;

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 120%; /* 0.975rem */
    }
  }
`;

export const ApplyNow = styled.div`
  padding: 15.15rem 0 15.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${apply_now_bg.src}) no-repeat;
  background-position: center bottom;

  @media (max-width: 768px) {
    padding-top: 7.125rem;
    padding-bottom: 6.5625rem;
    margin-top: 4.5rem;
  }
`;

export const ApplyNowInner = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    text-align: center;
    font-family: var(--font-lora);
    font-size: 2.4375rem;
    line-height: 120%; /* 2.925rem */
    margin-bottom: 1.25rem;
  }

  p {
    max-width: 57.9375rem;
    color: var(--White, #fff);
    text-align: center;
    font-size: 1.5625rem;
    line-height: 2.48125rem;
    margin-bottom: 2.5rem;
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
    background: transparent;
    transition: background 0.5s ease-in-out;

    &:hover {
      background: #fff;
      color: #171717;
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.65625rem; /* 165.625% */
      margin-bottom: 2rem;
    }

    a {
      height: 3rem;
      font-size: 0.8125rem;
      line-height: 120%; /* 0.975rem */
    }
  }
`;
