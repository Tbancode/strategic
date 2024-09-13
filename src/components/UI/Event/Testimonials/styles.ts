'use client';
import { styled } from 'styled-components';

export const TestimonialsWrapper = styled.div`
  padding: 9.75rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 7.89rem 0 4.5rem;
  }
`;

export const TestimonialsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    color: #fff;
    font-family: var(--font-lora);
    font-size: 1.9375rem;
    font-weight: 700;
    line-height: 120%; /* 2.325rem */
    margin-bottom: 0.75rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5625rem;
    }
  }
`;
