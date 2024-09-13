'use client';
import { styled } from 'styled-components';

export const PanelistsWrapper = styled.div`
  padding: 2rem 0;
  padding-bottom: 5.62rem;

  &:last-of-type {
    padding-bottom: 0;
  }
`;

export const PanelistsInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.header`
  width: 85%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 3.44rem;

  h2 {
    color: #fff;
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    font-weight: 700;
    line-height: 120%; /* 3.675rem */
  }

  img {
    position: absolute;
    left: 55%;
    top: 50%;
    width: 37rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    width: 95%;

    h2 {
      font-size: 1.9375rem;
    }

    img {
      top: 50px;
      left: 5%;
      width: 25.625rem;
    }
  }
`;
``