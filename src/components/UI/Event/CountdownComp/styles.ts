'use client';
import { styled } from 'styled-components';

export const CountdownWrapper = styled.div``;

export const CountdownInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.94rem;

  h3 {
    color: #fff;
    text-align: center;
    font-family: var(--font-lora);
    font-size: 1.9375rem;
    font-weight: 700;
    line-height: 120%;
  }

  @media (max-width: 768px) {
    gap: 1.12rem;
    h3 {
      font-size: 1.5625rem;
    }
  }
`;

export const TimerCtn = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  img {
    margin: 0 2rem;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 5.5rem;
    img {
      margin: 0 1rem;
    }
  }
`;

export const TimeItem = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;
  text-align: center;
  font-family: var(--font-satoshi);
  font-size: 8rem;
  font-weight: 500;
  line-height: 120%;

  p {
    color: var(--Gold, #d7ac43);
    font-size: 1.9375rem;
    font-weight: 400;
    line-height: 120%;
  }

  @media (max-width: 768px) {
    font-size: 3.0625rem;

    p {
      font-size: 0.93513rem;
    }
  }
`;
