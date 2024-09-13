'use client';
import { styled } from 'styled-components';

export const FounderWrapper = styled.section`
  padding: 5.75rem 0 5.81rem;

  @media (max-width: 768px) {
    padding: 4.5rem 0 6.88rem;
  }
`;

export const FounderInner = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FounderImageCtn = styled.div`
  min-width: 20.3125rem;
  height: 31.875rem;
  position: relative;

  img {
    border-radius: 1rem;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    height: 15.625rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
      object-position: 0 0%;
    }
  }
`;

export const FounderDetails = styled.div`
  max-width: 46.9375rem;
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--Gold, #d7ac43);
    font-family: var(--font-lora);
    font-size: 1.9375rem;
    line-height: 120%; /* 2.325rem */
    margin-bottom: 1.25rem;
  }

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1rem;
    line-height: 1.54375rem; /* 154.375% */

    &:first-of-type {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      margin-bottom: 0.75rem;
      font-size: 1.25rem;
    }

    p {
      line-height: 1.375rem; /* 1.2rem */
    }
  }
`;
