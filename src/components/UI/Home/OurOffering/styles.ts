'use client';
import { styled } from 'styled-components';
import our_offering_bg from '../../../../../public/images/our_offering_bg.png';
import card_border from '../../../../../public/images/card_border.png';

export const OfferingWrapper = styled.section`
  padding: 11.44rem 0 10.19rem;
  background: url(${our_offering_bg.src}) no-repeat;
  background-position: top right;
  background-size: contain;

  @media (max-width: 768px) {
    padding: 4.5rem 0;
    background-size: cover;
    background-position: 60% 20%;
  }
`;

export const OfferingInner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column-reverse;
    gap: 4.06rem;
    align-items: flex-start;
  }
`;

export const OfferingsCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.38rem;

  h1 {
    color: #fff;
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    line-height: 120%; /* 3.675rem */
  }

  @media (max-width: 786px) {
    gap: 1.5rem;
    h1 {
      font-size: 1.9375rem;
    }
  }
`;
export const ContentCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.06rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`;

export const Offering = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1.25rem;
    line-height: 1.54331rem; /* 123.467% */
  }

  @media (max-width: 768px) {
    img {
      width: 2rem;
      height: 2rem;
    }
    gap: 0.75rem;
    p {
      font-size: 1rem;
      line-height: 120%; /* 0.975rem */
    }
  }
`;

export const OfferingBanner = styled.div`
  position: relative;

  img:first-child {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;

      &:first-child {
        min-height: 15.625rem;
        border-radius: 0.75rem;
      }
    }
  }
`;

export const BlurUnderlay = styled.div`
  position: absolute;
  left: 25%;
  z-index: 1;
  top: 8%;
  max-width: 25.8125rem;
  width: 100%;
  height: 38.0625rem;
  padding: 2.5rem;
  border-radius: 1rem;
  border-image-slice: 0 2 0 2;
  border-image-width: 20px 1px 20px 0px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
  border-image-source: url(${card_border.src});
  background: linear-gradient(
    260deg,
    rgba(220, 222, 255, 0.09) 12.78%,
    rgba(117, 120, 207, 0) 118.25%
  );

  backdrop-filter: blur(9px);

  @media (max-width: 768px) {
    max-width: 23.125rem;
    height: 14.375rem;
    top: 20%;
    left: 15%;

    border-radius: 0.75rem;
  }
`;
