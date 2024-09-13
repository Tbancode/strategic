'use client';
import { styled } from 'styled-components';
import card_border from '../../../../public/images/card_border.png';
import apply_now_bg from '../../../../public/images/apply_now_bg.png';

export const ProgramHeroSection = styled.section`
  display: flex;
  align-items: center;
  height: 38.875rem;
  margin-bottom: 6.75rem;
  position: relative;

  img {
    object-fit: cover;
  }
  @media (max-width: 768px) {
    height: 32.125rem;
    margin-bottom: 3.75rem;
  }
`;

export const ProgramHeroInner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ProgramHeroTextCtn = styled.div`
  display: flex;
  max-width: 42.0625rem;
  padding: 2.5rem;
  flex-direction: column;
  gap: 1.875rem;
  align-items: flex-start;

  background: linear-gradient(
    225deg,
    #0008c1 -36.15%,
    rgba(0, 8, 193, 0.78) 111.08%
  );

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
    color: #fff;
    font-size: 1.25rem;
    line-height: 1.54331rem; /* 123.467% */ /* 158.8% */
  }

  a {
    display: flex;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    background: var(--White, #fff);
    color: var(--black, #000);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.58625rem; /* 158.625% */
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: var(--black, #000);
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    max-width: 24.375rem;
    padding: 2.5rem 1.25rem;
    gap: 1.5rem;
    text-align: center;
    align-items: center;

    h1 {
      max-width: 21.875rem;
      font-size: 1.9375rem;
      line-height: 120%;
    }

    p {
      font-size: 1rem;
      line-height: 1.40625rem; /* 140.625% */
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
    padding: 7.125rem 0 6.5625rem;
  }
`;

export const ApplyNowInner = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  p {
    max-width: 54.4375rem;
    color: var(--White, #fff);
    text-align: center;
    font-size: 2.4375rem;
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
    gap: 2rem;

    p {
      font-size: 1rem;
      line-height: 1.65625rem; /* 165.625% */
      max-width: 23.75rem;
    }

    a {
      font-size: 0.8125rem;
      line-height: 120%; /* 0.975rem */
      letter-spacing: 0.075rem;
    }
  }
`;

export const WhySection = styled.section`
  position: relative;
  margin-top: 7.62rem;
  height: 37.875rem;

  @media (max-width: 768px) {
    height: auto;
    margin: 4.5rem 0;
  }
`;

export const WhySectionInner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
  }
`;

export const WhyTextCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    max-width: 33.6875rem;
    color: var(--Gold, #d7ac43);
    font-family: var(--font-lora);
    font-size: 2.4375rem;
    line-height: 120%; /* 2.925rem */
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 37.6875rem;
    color: #fff;
    font-size: 1.5625rem;
    line-height: 2.48125rem;
    margin-bottom: 1.88rem;
  }

  a {
    display: flex;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    background: var(--blue, #1a27c9);
    color: var(--White, #fff);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.58625rem; /* 158.625% */
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: transparent;
      border: 1px solid var(--White, #fff);
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5625rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.40625rem; /* 140.625% */
    }
  }
`;

export const WhyImageCtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  max-width: 41.875rem;
  max-height: 37.875rem;
  width: 40vw;
  height: 100%;

  img {
    object-fit: contain;
  }

  @media (max-width: 768px) {
    position: static;
    height: 22.375rem;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.75rem;
      border-image-slice: 0 2 0 2;
      border-image-width: 20px 2px 20px 2px;
      border-image-outset: 0px 0px 0px 0px;
      border-image-repeat: stretch stretch;
      border-image-source: url(${card_border.src});
    }
  }
`;
