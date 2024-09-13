'use client';
import { styled } from 'styled-components';
import footer_bg from '../../../../public/images/footer_bg.png';

export const FooterWrapper = styled.footer`
  padding: 6.75rem 0 2.82rem 0;
  background: url(${footer_bg.src}) no-repeat, var(--Charcoal);
  background-size: cover;
  position: relative;

  & > img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    object-fit: contain;
    width: 90%;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0;
  }
`;

export const FooterInner = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.94rem;
  width: 95%;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 90%;
    gap: 2.5rem;
  }
`;

export const FooterLogo = styled.div``;

export const FooterTextCtn = styled.div`
  max-width: 31.6975rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.12rem;

  h1 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 2.4375rem;
    font-weight: 700;
    line-height: 120%; /* 2.925rem */
  }

  @media (max-width: 768px) {
    max-width: 100%;
    h1 {
      font-size: 1.9375rem;
    }
  }
`;

export const FooterNavCtn = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  li a {
    color: var(--Grey, #d9d9d9);
    font-size: 1rem;
    line-height: 120%; /* 1.2rem */
  }
`;

export const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.69rem;

  p {
    max-width: 14.0625rem;
    color: var(--Grey, #d9d9d9);
    font-size: 1rem;

    &:last-of-type {
      display: none;
      font-size: 0.8125rem;
    }
  }

  @media (max-width: 768px) {
    p:last-of-type {
      display: block;
      margin-top: 0.81rem;
      max-width: 100%;
    }
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.38rem;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 0.8125rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
