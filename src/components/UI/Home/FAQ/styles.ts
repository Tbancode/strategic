'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import card_border from '../../../../../public/images/card_border.png';

export const FAQWrapper = styled.section``;

export const FAQInner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FAQHeader = styled.div`
  text-align: center;

  h1 {
    color: #fff;
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    line-height: 120%; /* 3.675rem */
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.9375rem;
    }
  }
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const AccordionItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1.25rem 2.4375rem;
  align-items: flex-start;
  width: 100%;

  border-radius: 1.125rem;
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

  &.open {
    border-image-slice: 0 2 0 2;
    border-image-width: 20px 2px 20px 2px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-image-source: url(${card_border.src});
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem 0;
    border-radius: 0.75rem;
   
  }
`;

export const Question = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--White, #fff);
  font-family: var(--font-satoshi);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 120%; /* 1.5rem */
  width: 100%;

  img {
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;
  }

  &.open {
    img {
      transform: rotate(90deg);
    }
  }
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
    align-items: flex-start;

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Answer = styled(motion.div)`
  max-width: 44.706rem;
  color: var(--Grey, #d9d9d9);
  font-family: var(--font-satoshi);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.54331rem;

  @media (max-width: 768px) {
    font-size: 0.84206rem;
    line-height: 120%; /* 1.01044rem */
    padding-bottom: 1.25rem;
  }
`;
