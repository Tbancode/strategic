'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import segment_four_bg from '../../../../../public/images/segment_four_bg.png';

export const SegmentWrapper = styled.section`
  background: url(${segment_four_bg.src}) no-repeat;
  background-position: center center;
  padding-bottom: 8.79rem;
`;

export const SegmentInner = styled.main`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 13.06rem;

  @media (max-width: 768px) {
    width: 90%;
    gap: 6.12rem;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  & > h1 {
    max-width: 25.4375rem;
    color: #fff;
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    line-height: 120%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    & > h1 {
      font-size: 1.9375rem;
      max-width: 21.8125rem;
    }
  }
`;

export const EventsContainer = styled.div`
  max-width: 37rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > svg {
    margin: 1.5rem 0;
  }
`;

export const EventItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const EventImage = styled.div`
  width: 8.4375rem;
  height: 8.4375rem;
  position: relative;
  img {
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
    gap: 0.39rem;
    img {
      width: 0.64813rem;
      height: 0.64813rem;
    }
    p {
      font-size: 0.6875rem;
    }
  }
`;

export const SeeAllEvents = styled(Link)`
  display: inline-flex;
  height: 3.75rem;
  padding: 1.0625rem 1rem 1.0625rem 0rem;
  align-items: center;
  gap: 0.625rem;
  margin-top: 2.19rem;
  color: var(--Grey, #d9d9d9);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.58625rem; /* 169.2% */
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  position: relative;
  transition: letter-spacing 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:after {
    position: absolute;
    bottom: 0px;
    left: 0;
    content: '';
    height: 1px;
    width: 90%;
    background: var(--Grey, #d9d9d9);
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
  }

  &:hover {
    letter-spacing: 0.2rem;
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0rem;
    height: 3.75rem;
    font-size: 0.8125rem;
  }
`;
