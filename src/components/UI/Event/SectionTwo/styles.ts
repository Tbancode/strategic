'use client';
import { styled } from 'styled-components';
import glow_bg_2 from '../../../../../public/images/glow_bg_2.png';

export const SectionWrapper = styled.section`
  background: url(${glow_bg_2.src}) no-repeat, var(--Charcoal, #171717);
  padding: 0 0 8.06rem;
  background-position: 50% 30%;
  @media (max-width: 768px) {
    padding-bottom: 4.89rem;
  }
`;

export const SectionInner = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const StatsCtn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 34.6875rem;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.38rem;
  margin: 1.25rem 0;

  h2 {
    color: #fff;
    text-align: right;
    font-family: var(--font-satoshi);
    font-size: 3.8125rem;
    font-weight: 700;
    line-height: 120%; /* 4.575rem */
  }

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1.5625rem;
    line-height: 2.48125rem; /* 158.8% */
  }

  @media (max-width: 768px) {
    margin: 1.69rem 0;
    gap: 1.88rem;

    h2 {
      font-size: 3.0625rem;
    }

    p {
      font-size: 1.5625rem;
    }
  }
`;

export const RegisterCtn = styled.div`
  max-width: 27.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;

  a {
    display: flex;
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
    width: 100%;
    a {
      max-width: 13.125rem;
      width: 100%;
    }
  }
`;

export const RegisterTextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h3 {
    color: var(--Grey, #d9d9d9);
    font-family: var(--font-lora);
    font-size: 1.5625rem;
    font-weight: 700;
    line-height: 120%; /* 1.875rem */
    span {
      color: var(--Gold, #d7ac43);
    }
  }

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1rem;
    line-height: 1.40375rem; /* 140.374% */
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.9375rem;
    }

    p {
      line-height: 1.5rem;
    }
  }
`;
