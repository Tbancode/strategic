'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  height: 55.625rem;
  background: linear-gradient(180deg, #1f1f1f -37.56%, #1a27c9 114.81%);

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Inner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5.69rem 0 9.56rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10rem;

  @media (max-width: 768px) {
    width: 90%;
    gap: 3.75rem;
    padding: 3.75rem 0;
  }
`;

export const ItemImageCtn = styled.div`
  display: flex;
  gap: 1.38rem;
  margin-top: -350px;
  right: 0;

  div {
    height: 31.875rem;
    overflow: hidden;
    border-radius: 1rem;

    img {
      border-radius: 1rem;
      object-fit: cover;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 17rem;
    margin-top: 0;

    div {
      height: 17rem;
      border-radius: 0.75rem;
      width: 100%;
      img {
        object-fit: cover;
        border-radius: 0.75rem;
        height: 100%;
        object-position: 0% 40%;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    width: 24.0625rem;
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    line-height: 120%;
  }

  p {
    width: 24.0625rem;
    color: var(--White, #fff);
    font-size: 1.25rem;
    line-height: 1.54331rem;
  }

  @media (max-width: 768px) {
    h2 {
      max-width: 15.625rem;
      font-size: 1.9375rem;
      width: 100%;
    }

    p {
      font-size: 1rem;
      line-height: 1.40625rem; /* 140.625% */
      width: 100%;
    }
  }
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:first-of-type {
    gap: 4.63rem;
  }
  &:last-of-type {
    gap: 7.12rem;
    align-items: center;
  }

  &:first-of-type ${ItemImageCtn} {
    max-width: 42.94rem;

    img {
      width: 100%;
    }
  }

  &:first-of-type ${ItemImageCtn} div:last-of-type {
    margin-top: 10%;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &:last-of-type ${ItemImageCtn} {
    margin-top: 0;
    margin-bottom: -100px;
    border-radius: 1rem;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  &:first-of-type ${TextCtn} {
  }

  &:last-of-type ${TextCtn} {
    margin-left: auto;
    h2,
    p {
      width: 100%;
    }

    h2 {
      max-width: 100%;
    }

    p {
      max-width: 34.75rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 2.5rem !important;

    &:last-of-type ${ItemImageCtn} {
      margin: 0;
      width: 100%;
    }

    &:last-of-type ${TextCtn} {
      margin-left: 0;

      h2 {
        max-width: 14.75rem;
      }
    }

    &:last-of-type {
      flex-direction: column;
    }
  }
`;
