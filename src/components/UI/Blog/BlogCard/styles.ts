'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const BlogCardCtn = styled.div`
  width: 100%;

  h1 {
    max-width: 33.6875rem;
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 1.5625rem;
    line-height: 120%;
    margin: 2rem 0 1.25rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
      margin: 1.25rem 0 0.75rem;
    }
  }
`;

export const BlogImageCtn = styled.div`
  position: relative;
  height: 21rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media (max-width: 768px) {
    height: 10.75rem;
  }

    @media (min-width: 769px) and (max-width: 1024px) {
      height: 15rem;
    }
`;

export const BlogInfoCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem 0rem;
    gap: 1.25rem;
    align-items: flex-start;
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const AuthorImage = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 3.125rem;
  overflow: hidden;
  position: relative;
  //background-blend-mode: luminosity;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   // filter: grayscale(100%);
  }
`;

export const AuthorName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  font-family: var(--font-satoshi);

  h4 {
    font-size: 1rem;
    line-height: 120%;
    color: var(--White, #fff);
  }

  p {
    color: var(--White, #fff);
    font-size: 1rem;
    line-height: 120%; /* 1.2rem */
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 0.8125rem;
    }

    p {
      font-size: 0.8125rem;
    }
  }
`;

export const ReadMoreBtn = styled(Link)`
  display: flex;
  padding: 1rem 1.25rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: var(--blue, #1a27c9);
  color: var(--White, #fff);
  font-family: var(--font-satoshi);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 120%; /* 1.125rem */

  transition: background 0.3s ease-in-out;

  &:hover {
    background: #4754ff;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
