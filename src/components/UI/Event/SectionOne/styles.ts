'use client';
import { styled } from 'styled-components';
import glow_background from '../../../../../public/svgs/glow_background.svg';
import mobile_glow_background from '../../../../../public/svgs/mobile_glow_background.svg';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8.94rem;
  padding-bottom: 9.75rem;
  background: url(${glow_background.src}) no-repeat, var(--Charcoal, #171717);
  background-position: 50% 70%;

  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    padding-top: 5.12rem;
    padding-bottom: 5.19rem;
    background: url(${mobile_glow_background.src}) no-repeat,
      var(--Charcoal, #171717);
    background-position: 50% 75%;
    background-size: 100%;
  }
`;

export const SectionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p:first-of-type {
    margin: 18.5rem auto 0;
  }

  & > p:last-of-type {
    margin-bottom: 14.88rem;
  }
  @media (max-width: 768px) {
    & > p:first-of-type {
      margin-top: 10.25rem;
      margin-bottom: 1.5rem;
    }
    & > p:last-of-type {
      margin-bottom: 9.88rem;
    }
  }
`;

export const BriefText = styled.p`
  max-width: 61.4375rem;
  color: var(--Grey, #d9d9d9);
  text-align: center;
  font-size: 1.5625rem;
  font-weight: 400;
  line-height: 2.48125rem;

  @media (max-width: 768px) {
    max-width: 24.3125rem;
    font-size: 1.25rem;
    line-height: 1.875rem; /* 150% */
    width: 90%;
  }
`;
