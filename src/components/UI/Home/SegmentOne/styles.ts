'use client';
import { styled } from 'styled-components';
import one_inner_bg from '../../../../../public/svgs/one_inner_bg.svg';

export const Wrapper = styled.section`
  background: url(${one_inner_bg.src}) no-repeat;
  background-position: center 100%;
  height: 100%;
  padding-bottom: 18.5rem;

  @media (max-width: 768px) {
    padding-bottom: 6.38rem;
  }
`;

export const Inner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 8.25rem;
  display: flex;
  flex-direction: column;
  gap: 11.5rem;

  @media (max-width: 768px) {
    padding-top: 4.5rem;
    width: 90%;
    gap: 4.5rem;
  }
`;

export const Quote = styled.div`
  max-width: 36.8125rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;

  h3 {
    color: var(--Grey, #d9d9d9);
    text-align: center;
    font-family: var(--font-satoshi);
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.875rem;

    span {
      color: var(--Gold, #d7ac43);
    }
  }

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1.5rem;
    line-height: 3.25rem; /* 216.667% */
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5625rem;
      line-height: 120%; /* 1.875rem */
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const BecomeAMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 49.0625rem;
  gap: 2.62rem;
  align-items: flex-start;

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 2rem;

    span {
      font-weight: 700;
    }
  }

  a {
    display: inline-flex;
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
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #4754ff;
    }
  }

  @media (max-width: 768px) {
    gap: 2.5rem;

    p {
      font-size: 1.5625rem;
    }
  }
`;
