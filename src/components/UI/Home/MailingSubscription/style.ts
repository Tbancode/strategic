'use client';
import styled from 'styled-components';

export const MailingWrapper = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UnderlayBg = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: #151515;
  z-index: 99;
`;

export const MailingInner = styled.main`
  width: 55rem;
  border-radius: 0.5rem;
  height: 42.375rem;
  background: var(
    --footer-bg,
    linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, #1a27c9 173.01%)
  );
  backdrop-filter: blur(50px);
  position: relative;
  z-index: 100;
  overflow: hidden;
  display: flex;

  @media (max-width: 768px) {
    height: auto;
    width: 90%;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  right: 2.5rem;
  top: 2.5rem;
  background: transparent;
  color: var(--Grey, #d9d9d9);
  font-family: var(--font-satoshi);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.58625rem; /* 181.286% */
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &::after {
    position: absolute;
    bottom: -5px;
    content: '';
    left: 0;
    height: 1px;
    background: #fff;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
    transform-origin: right;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;

export const LeftImage = styled.div`
  width: 22.3125rem;
  height: 42.375rem;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MailingForm = styled.form`
  padding: 4.06rem 3.75rem;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    gap: 2.25rem;
  }
`;

export const FormHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2;
  color: var(--White, #fff);

  h1 {
    max-width: 22.19031rem;
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    line-height: 99%;
  }

  p {
    max-width: 22.98694rem;
    font-family: var(--font-satoshi);
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      max-width: 15rem;
    }

    p {
      font-size: 1rem;
      line-height: normal;
      max-width: 18rem;
    }
  }
`;

export const MailingFormSegment = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.25rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: var(--White, #fff);
  outline: none;

  /* Satoshi Title 2 */
  font-family: var(--font-satoshi);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.40625rem; /* 140.625% */

  &::placeholder {
    color: var(--White, #fff);

    /* Satoshi Title 2 */
    font-family: var(--font-satoshi);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.40625rem; /* 140.625% */
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  padding: 1.0625rem 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: 1px solid var(--White, #fff);
  background-color: transparent;
  color: var(--White, #fff);
  font-family: var(--font-satoshi);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.58625rem; /* 158.625% */
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.4s ease-in-out, border 0.4s;

  &:hover {
    background: var(--blue, #1a27c9);
    border: 1px solid var(--blue, #1a27c9);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2.0625rem;
  }
`;
