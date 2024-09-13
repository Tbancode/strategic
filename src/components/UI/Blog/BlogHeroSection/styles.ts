'use client';
import styled from 'styled-components';

export const BlogHeroWrapper = styled.div`
  height: 33.25rem;
  display: flex;
  align-items: center;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
  }

  svg {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    height: 20.4375rem;

    svg {
      width: 0.9375rem;
      height: 0.5rem;
      bottom: 1rem;
    }
  }
`;

export const BlogHeroInner = styled.div`
  position: relative;
  z-index: 10;

  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--White);

  h1 {
    max-width: 34.5625rem;
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    line-height: 120%;
  }

  p {
    max-width: 29.75rem;
    font-family: var(--font-satoshi);
    font-size: 1.25rem;
    line-height: 120%;
  }

  @media (max-width: 768px) {
    width: 90%;
    h1 {
      font-size: 1.9375rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
