'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const DetailsWrapper = styled.div`
  & > svg {
    width: 100%;
  }
`;

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1.88rem 0 1.88rem;

  h2 {
    color: var(--White, #fff);
    font-family: var(--font-satoshi);
    font-size: 1.9375rem;
    font-weight: 700;
    line-height: 120%; /* 2.325rem */
    text-transform: capitalize;
  }
`;

export const Number = styled.div`
  display: flex;
  height: 1.9375rem;
  padding: 0.1875rem 1.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 3.125rem;
  background: var(
    --glass,
    linear-gradient(
      219deg,
      rgba(255, 255, 255, 0.26) -32.35%,
      rgba(255, 255, 255, 0) 111.78%
    )
  );
  color: var(--White, #fff);

  /* Satoshi Title 4 Bold */
  font-family: var(--font-satoshi);
  font-size: 1rem;
  font-weight: 700;
  line-height: 120%; /* 1.2rem */
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.5rem;

  & > svg {
    margin: 1.5rem 0;
  }
`;

export const EventItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid #232323;
  padding-bottom: 1rem;
  width: 100%;

  &:first-of-type {
    border-top: none;
  }
`;

export const EventInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 100%;

  padding: 1.25rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 0;
  }
`;

export const EventImage = styled.div`
  width: 13.125rem;
  height: 13.125rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 6.125rem;
    height: 6.125rem;
  }
`;

export const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 56.375rem;

  h1 {
    overflow: hidden;
    color: var(--Gold, #d7ac43);
    text-overflow: ellipsis;
    font-family: var(--font-lora);
    font-size: 1.5625rem;
    line-height: 120%; /* 1.875rem */
    margin-bottom: 0.62rem;
  }

  & > p {
    overflow: hidden;
    color: var(--Grey, #d9d9d9);
    text-overflow: ellipsis;
    font-size: 1rem;
    line-height: 1.40625rem;
    margin-bottom: 1.03rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1rem;
    }

    & > p {
      font-size: 0.8125rem;
      line-height: 120%; /* 0.975rem */
      margin-bottom: 0.5rem;
    }
  }
`;

export const LocationDateCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.38rem;
`;

export const DateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.53rem;

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.40625rem; /* 140.625% */
  }

  @media (max-width: 768px) {
    img {
      width: 0.64813rem;
      height: 0.64813rem;
    }

    p {
      font-size: 0.6875rem;
    }
  }
`;

export const TicketCtn = styled.div`
  margin-top: 2.34rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  a {
    color: var(--White, #fff);
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 120%; /* 0.975rem */
    letter-spacing: 0.075rem;
    height: 3rem;
    display: flex;
    width: auto;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    text-transform: uppercase;
  }

  a:first-of-type {
    background: var(--blue, #1a27c9);

    transition: background 0.3s ease-in-out;

    &:hover {
      background: #4754ff;
    }
  }

  a:nth-of-type(2) {
    border: 2px solid #d9d9e3;

    transition: all 0.3s ease-in-out;

    &:hover {
      background: var(--Grey, #d9d9d9);
      color: var(--Charcoal, #171717);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileButtons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  a {
    color: var(--White, #fff);
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 120%; /* 0.975rem */
    letter-spacing: 0.075rem;
    height: 3rem;
    display: flex;
    width: auto;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    text-transform: uppercase;
  }

  a:first-of-type {
    background: var(--blue, #1a27c9);
  }

  a:nth-of-type(2) {
    border: 2px solid #d9d9e3;
  }

  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;
