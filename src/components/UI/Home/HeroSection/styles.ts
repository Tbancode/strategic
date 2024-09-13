'use client';
import { styled } from 'styled-components';

export const HeroSectionWrapper = styled.section`
  width: 100%;
  position: relative;

  /* background: radial-gradient(
    47.05% 50% at 50% 50%,
    rgba(26, 39, 201, 0.34) 0%,
    rgba(26, 39, 201, 0) 100%
  ); */

  /* background-position-x: 40vw;
  background-position-y: -10vw;
  background-repeat: no-repeat; */
  & > img {
    position: absolute;
    top: 0;
    right: 0;
    object-fit: cover;
    z-index: 0;

    &:last-of-type {
      display: none;
    }
  }

  @media (max-width: 768px) {
    /* background-position-x: 0;
    background-position-y: 0;
    background-size: cover;
    background: none; */

    & > img {
      top: -5rem;
      right: -50%;
      object-fit: cover;
      transform: translateX(-50%);
      z-index: 0;
      width: 100%;

      &:first-of-type {
        display: none;
      }

      &:last-of-type {
        display: block;
      }
    }
  }
`;

export const HeroSectionInner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto 3.19rem;
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.38rem;
  max-width: 39.9375rem;
  margin-top: 6.56rem;

  /* div { */
  h1 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 3.75rem;
    line-height: 3.75rem; /* 100% */
    display: flex;
    flex-direction: column;
  }

  /* } */

  @media (max-width: 768px) {
    margin-top: 5.12rem;
    gap: 2.75rem;

    h1 {
      font-size: 2.4375rem;
      line-height: 120%; /* 2.925rem */
      text-align: center;
    }
  }
`;

export const HeroButtonsCtn = styled.div`
  display: inline-flex;
  gap: 1.25rem;

  a {
    display: flex;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    background: var(--blue, #1a27c9);
    color: var(--White, #fff);
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.58625rem; /* 158.625% */
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    transition: background 0.3s ease-in-out;

    &:last-of-type {
      border: 2px solid #d9d9e3;
      background: transparent;
    }

    &:hover {
      background: #4754ff;
      &:last-of-type {
        border: 2px solid #fff;
        background: #fff;
        color: var(--Charcoal);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    a {
      min-width: 16.375rem;
    }
  }
`;

export const HeroBanner = styled.div`
  margin-top: 7.62rem;
  position: relative;
  z-index: 1;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 4.5rem;
    img {
      height: 13.75rem;
      border-radius: 0.75rem;
      border: 1px solid rgba(26, 39, 201, 0.43);
    }
  }
`;
