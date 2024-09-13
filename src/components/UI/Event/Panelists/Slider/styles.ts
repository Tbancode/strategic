'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import card_bg from '../../../../../../public/images/card_bg.png';
import card_border from '../../../../../../public/images/card_border.png';

export const SliderWrapper = styled(motion.div)`
  overflow-x: hidden;
  cursor: grab;
`;

export const SliderInner = styled(motion.div)`
  display: inline-flex;
  gap: 3.38rem;
  padding-left: 20rem;
  padding-right: 5rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
    padding-left: 3rem;
    padding-right: 5rem;
  }
`;

export const SlideCtn = styled(motion.div)`
  pointer-events: none;
  max-width: 325px;
  width: 100%;
  height: 31.875rem;
  position: relative;
  border-radius: 1.5rem;
  border-image-slice: 0 2 0 2;
  border-image-width: 20px 1px 20px 1px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
  border-image-source: url(${card_border.src});
  padding: 0.07rem;
  z-index: 1;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 15.41363rem;
    height: 24.1875rem;
  }
`;

export const PanelistInfo = styled.div`
  position: absolute;
  background: url(${card_bg.src}) no-repeat;
  background-size: cover;
  bottom: 0px;
  width: 99.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 0 0 1.5rem 1.5rem;
  padding: 2.0625rem 0 2.0625rem 2.25rem;
  height: 7.2796rem;

  h2 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 1.5625rem;
    font-weight: 700;
    line-height: 120%; /* 1.875rem */
  }

  p {
    max-width: 13rem;
    color: var(--Gold, #d7ac43);
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.56506rem 0 1.56506rem 1.70738rem;
    gap: 0.06988rem;
    height: 5.7rem;

    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.8125rem;
      max-width: 100%;
    }
  }
`;

export const ItemTextCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.88rem;
  text-align: left;

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1rem;
    line-height: 120%;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  h3 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 120%; /* 1.5rem */
  }

  p {
    color: var(--Gold, #d7ac43);
    font-size: 0.8125rem;
    line-height: 120%; /* 0.975rem */
    letter-spacing: 0.01625rem;
  }
`;
