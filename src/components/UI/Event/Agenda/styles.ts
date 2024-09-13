'use client';
import { styled } from 'styled-components';
import ic_scroll_thumb from '../../../../../public/images/scroll_thumb.png';

export const AgendaWrapper = styled.div`
  position: relative;
  z-index: 10;
  padding-bottom: 4.81rem;

  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const AgendaInner = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const AgendaGradient = styled.div`
  width: 100%;
  height: 10.625rem;
  flex-shrink: 0;

  background: linear-gradient(
    180deg,
    rgba(23, 23, 23, 0) -31.47%,
    #171717 90.29%
  );
  position: absolute;
  bottom: 0;
  max-width: 39rem;
  left: 0;
  width: 100%;
  pointer-events: none;

  @media (max-width: 768px) {
    max-width: 19rem;
  }
`;

export const EventCtn = styled.div`
  max-width: 41.875rem;
  margin-left: auto;
  width: 100%;
  gap: 3.75rem;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    color: #fff;
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    font-weight: 700;
    line-height: 120%; /* 3.675rem */
  }

  @media (max-width: 768px) {
    gap: 2.5rem;
    h2 {
      font-size: 1.9375rem;
    }

    & > img {
      bottom: -1px;
      max-width: 18rem;
      left: -1px;
    }
  }
`;

export const SectionWrapper = styled.div``;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > svg {
    width: 100%;
  }
`;

export const Dates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > svg {
    padding: 0.775rem 0;
    cursor: pointer;
    height: 100%;
    transform: scaleX(1);
    transition: transform 0.5s ease-in-out;
    transform-origin: left;
  }

  &:hover {
    svg {
      transform: scaleX(1.4);
    }
  }

  cursor: pointer;

  p {
    color: var(--Gold, #d7ac43);
    font-size: 1.25rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 28.375rem;
  overflow-y: auto;
  gap: 2.25rem;
  padding: 2.25rem 0 5rem;

  &::-webkit-scrollbar {
    width: 40px; /* Set the width of the scrollbar */
  }

  /* Define the style for the scrollbar thumb */
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Make the default background color transparent */
    background-image: url(${ic_scroll_thumb.src}); /* Set the path to your image */
    background-size: contain; /* Adjust the background size as needed */
    background-repeat: no-repeat;
    background-position: center center; /* Set the border radius for a rounded appearance */
  }

  /* Define the style for the scrollbar track */
  &::-webkit-scrollbar-track {
    background-color: transparent; /* Set the background color for the scrollbar track */
    border-radius: 6px;
    width: 40px; /* Set the border radius to match the thumb */
  }

  /* &::-webkit-scrollbar {
    width: 5px;
    &-thumb {
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background: var(--Grey);

      position: relative;
      content: url(${ic_scroll_thumb.src});

      &:after {
        position: absolute;
      }
    }
  } */
`;

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    color: #fff;
    font-family: var(--font-lora);
    font-size: 1.5625rem;
    font-weight: 700;
    line-height: 120%; /* 1.875rem */
  }

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1.25rem;
    display: flex;
    gap: 0.62rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 0.62rem;
    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
