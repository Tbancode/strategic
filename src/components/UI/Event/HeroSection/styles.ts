'use client';
import { styled } from 'styled-components';

export const HeroWrapper = styled.div`
`;

export const HeroTextCtn = styled.div`
  max-width: 58.1875rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;

  h1 {
    color: var(--White, #fff);
    text-align: center;
    font-family: var(--font-lora);
    font-size: 3.75rem;
    font-weight: 700;
    line-height: 4.20819rem;

    span {
      color: var(--Gold, #d7ac43);
    }
  }

  p {
    color: var(--Grey, #d9d9d9);
    text-align: center;
    font-size: 1.5625rem;
    line-height: 120%;

    span {
      color: var(--Gold, #d7ac43);
    }
  }

  @media (max-width: 768px) {
    max-width: 24.3125rem;
    width: 95%;
    h1 {
      font-size: 2.25rem;
      line-height: 120%;
    }

    p {
      font-size: 1.5625rem;
    }
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin: 3.94rem auto 4rem;
  max-width: 27.5rem;
  width: 100%;

  a {
    display: flex;
    width: 100%;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    color: var(--White, #fff);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.58625rem; /* 158.625% */
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    gap: 0.625rem;
    background: var(--blue, #1a27c9);
    transition: background 0.3s ease-in-out;

    &:hover {
      background: transparent;
      border: 1px solid var(--blue);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2.75rem;
    margin-bottom: 3rem;

    max-width: 16.375rem;
    width: 100%;

    a {
      width: 100%;
    }
  }
`;

export const Date = styled.div`
  color: #fff;
  text-align: center;
  font-family: var(--font-satoshi);
  font-size: 1.9375rem;
  font-weight: 700;
  line-height: 120%; /* 2.325rem */

  @media (max-width: 768px) {
    font-size: 1.9375rem;
    width: 95%;
    margin: 0 auto;
  }
`;

export const ArrowDownCtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.31rem;

  img:last-of-type {
    position: absolute;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
