'use client';
import { styled } from 'styled-components';
import card_border from '../../../../../public/images/card_border.png';
import Image from 'next/image';

export const Wrapper = styled.section`
  padding-bottom: 10.25rem;
`;

export const Inner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    line-height: 120%; /* 3.675rem */
    margin-bottom: 3.12rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    h1 {
      font-size: 1.9375rem;
    }
  }
`;

export const CardContainer = styled.div``;

export const CardInner = styled.div`
  display: flex;
  width: 100%;
  padding: 5.5rem 7.25rem;
  justify-content: space-between;
  gap: 5rem;
  align-items: center;

  border-radius: 1rem;
  border: 1px solid var(--Line-color, #d9d9d9);

  background: linear-gradient(
    260deg,
    rgba(220, 222, 255, 0.09) 12.78%,
    rgba(117, 120, 207, 0) 118.25%
  );

  backdrop-filter: blur(4px);
  border-image-slice: 0 2 0 2;
  border-image-width: 20px 1px 20px 1px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
  border-image-source: url(${card_border.src});

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2.5rem 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.5rem;
  }
`;

export const CardAvatar = styled.div`
  img {
    height: 20.375rem;
    width: 20.375rem;

    object-fit: cover;
    border-radius: 50%;
    filter: grayscale(100%);
  }

  @media (max-width: 768px) {
    img {
      width: 7.8125rem;
      height: 7.8125rem;
    }
  }
`;

export const CardContent = styled.div`
  max-width: 30.75rem;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    color: var(--White, #fff);
    font-size: 1rem;
    line-height: 1.40625rem; /* 140.625% */
  }

  @media (max-width: 768px) {
    gap: 1rem;
    p {
      font-size: 0.8125rem;
      color: var(--White, #fff);
      line-height: 120%; /* 0.975rem */
    }
  }
`;

export const Details = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.31rem;

  h2 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 1.25rem;
    line-height: 120%; /* 1.5rem */
  }

  p {
    color: var(--Gold, #d7ac43);
    font-size: 0.8125rem;
    letter-spacing: 0.01625rem;
  }

  @media (max-width: 768px) {
  }
`;

export const NavButtons = styled.div`
  margin: 0 auto;
  margin-top: 1.81rem;
  display: flex;
  gap: 2.62rem;

  img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 2.62rem;
  }
`;

export const PreviousNav = styled(Image)`
  transform: rotate(180deg);

  &.disabled {
    opacity: 0.2;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const NextNav = styled(Image)`
  &.disabled {
    opacity: 0.2;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
