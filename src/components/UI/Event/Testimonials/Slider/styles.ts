'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import card_border from '../../../../../../public/images/card_border.png';

export const SliderWrapper = styled(motion.div)`
  overflow-x: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  

  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
`;

export const SliderInner = styled(motion.div)`
  display: inline-flex;
  padding: 3rem 3rem 3rem 0;
  align-items: flex-start;
  gap: 2.5rem;
  padding-left: 30rem;
  padding-right: 10rem;

  @media (max-width: 768px) {
    gap: 1.88rem;
    padding: 3rem 3rem 0 0;
  }
`;

export const SlideCtn = styled(motion.div)`
  pointer-events: none;
  width: 25.8125rem;
  border-image-slice: 0 2 0 2;
  border-image-width: 20px 1px 20px 1px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
  border-image-source: url(${card_border.src});
  flex-shrink: 0;
  padding: 2.5rem;
  border-radius: 1rem;
  position: relative;

  background: linear-gradient(
    260deg,
    rgba(220, 222, 255, 0.09) 12.78%,
    rgba(117, 120, 207, 0) 118.25%
  );
  z-index: 1;

  img {
    position: absolute;
    top: -10px;
    left: -10px;
  }

  @media (max-width: 768px) {
    width: 23.4375rem;
    padding: 1.71831rem;
    gap: 0.90213rem;
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

  @media (max-width: 768px) {
    gap: 1rem;
    p {
      line-height: 130%; /* 1.3rem */
    }
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
