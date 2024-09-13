'use client';
import { styled } from 'styled-components';

export const ContactUsHeroSection = styled.div`
  padding: 6.88rem 0 7.5rem;
  display: flex;
  align-items: center;
  background: var(--blue, #1a27c9);

  @media (max-width: 768px) {
    padding: 5rem 0 3.38rem;
  }
`;

export const ContactUsHeroInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 8rem;
    line-height: 120%; /* 9.6rem */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    width: 90%;

    h1 {
      color: var(--White, #fff);
      font-size: 3.0625rem;
    }
  }
`;

export const MoreContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h4 {
    color: var(--White, #fff);
    font-family: var(--font-satoshi);
    font-size: 1.25rem;
    line-height: 120%; /* 1.5rem */
  }

  p {
    max-width: 24.4375rem;
    color: var(--White, #fff);
    font-size: 1rem;
    line-height: 1.40625rem; /* 140.625% */

    span a {
      text-decoration-line: underline;
    }
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8125rem;
    }
  }
`;

export const BecomeAMemberCtn = styled.div`
  padding: 8.94rem 0 9rem;
`;

export const BecomeAMemberBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  background: linear-gradient(180deg, #1f1f1f 7.95%, #1a27c9 191.04%);
  height: 26.8125rem;
  padding-left: 3.75rem;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  overflow: hidden;
`;

export const BoxTextCtn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 26.8125rem;
  align-items: flex-start;

  h2 {
    color: #fff;
    font-family: var(--font-lora);
    font-size: 2.56525rem;
    line-height: 2.73631rem;
    margin-bottom: 0.88rem;
  }

  p {
    max-width: 24.4375rem;
    color: var(--White, #fff);
    font-size: 1rem;
    line-height: 1.40625rem;
    margin-bottom: 1.25rem;
  }

  a {
    display: flex;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    background: var(--blue, #1a27c9);
    color: var(--White, #fff);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.58625rem; /* 158.625% */
    letter-spacing: 0.075rem;
    transition: background 0.5s ease-in-out;

    &:hover {
      background: var(--White, #fff);
      color: var(--blue, #1a27c9);
    }
  }
`;
