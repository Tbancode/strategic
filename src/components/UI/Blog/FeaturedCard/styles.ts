'use client';
import styled from 'styled-components';

export const FeaturedCardCtn = styled.div`
  margin-top: 6.25rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin: 2.5rem 0;
  }
`;

export const FeaturedCardInner = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const MainImageCtn = styled.div`
  width: 100%;
  height: 21.25rem;
  display: flex;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > div {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: inline-flex;
    padding: 0.875rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 1.75rem;
    background: var(--blue, #1a27c9);

    color: var(--White);

    font-family: var(--font-satoshi);
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 900;
    letter-spacing: 0.06875rem;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    height: 10.75rem;

    & > div {
      top: 0.75rem;
      right: 0.75rem;
      font-size: 0.6875rem;
      padding: 0;
      width: 5.49838rem;
      height: 2.24rem;
    }
  }
`;

export const TextCtn = styled.div`
  max-width: 31.6875rem;

  a {
    color: var(--White);
    font-family: var(--font-lora);
    font-size: 1.9375rem;
    line-height: 120%;
    font-weight: 700;
    transition: color 0.2s ease;

    &:hover {
      color: var(--Gold);
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;
