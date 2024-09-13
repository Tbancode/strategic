'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.section`
  height: 5.9375rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 12;
`;
export const LogoCtn = styled.div`
  @media (max-width: 1080px) {
    width: 95%;
    margin: 0 auto;
    height: 5rem;
    padding: 1.25rem 1rem 1.19256rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderInner = styled.main`
  width: 94.4%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 1080px) {
    position: fixed;
    justify-content: center;
    width: 100%;

    background: transparent;
    transition: background 0.3s ease;

    ${LogoCtn} {
      width: 100%;
      transition: width 0.3s ease;
    }

    &.scrolled {
      border-radius: 50px; // Add a smooth transition: ;
      background: var(
        --Charcoal
      ); // Change this to the desired background color

      ${LogoCtn} {
        width: 95%;
      }
    }
  }
`;

export const Logo = styled(Link)`
  position: relative;
  z-index: 11;
  @media (max-width: 1080px) {
    img {
      width: 5.99556rem;
      height: 2.55744rem;
    }
  }
`;
export const BurgerCtn = styled.div`
  display: none;
  position: relative;
  z-index: 11;

  @media (max-width: 1080px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 1080px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: var(--Charcoal);
    flex-direction: column;
    align-items: flex-start;
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
    transform-origin: left;
    z-index: 10;

    &.active {
      transform: translateX(0%);
    }
  }
`;

export const UL = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.19rem;
  list-style: none;

  li a {
    color: var(--White, #fff);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem; /* 125% */
    display: flex;
    align-items: center;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin: 0 auto;

    padding-top: 6rem;
    gap: 0;

    li {
      width: 100%;
    }

    li a {
      width: 100%;
      color: var(--Grey, #d9d9d9);
      font-size: 1rem;
      font-weight: 400;
      line-height: 120%; /* 1.2rem */
      padding: 1.25rem 0;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);

      &.active {
        font-weight: 700;
      }
    }
  }
`;

export const DropLink = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    height: 50px;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
    top: 40px;
  }

  span {
    color: var(--White, #fff);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem; /* 125% */
    display: flex;
    align-items: center;
    font-family: var(--font-satoshi);
    cursor: pointer;
    margin: 1rem 0;
  }

  div {
    position: absolute;
    display: flex;
    align-items: center;
    min-width: 17.5rem;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
    top: 4.5rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    a {
      padding: 1.5625rem 1.375rem;
      font-family: var(--font-satoshi);
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.25rem;
      gap: 0.625rem;
      background: var(--Charcoal, #171717);
      width: 100%;
      color: var(--White);
      transition: all 0.3s ease-in-out;

      &:hover {
        background: var(--Grey, #d9d9d9);
        color: var(--Charcoal, #171717);
      }
    }
  }

  &:hover {
    div {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;

    &::after {
      display: none;
    }

    span {
      color: var(--Grey, #d9d9d9);
      font-size: 1rem;
      font-weight: 400;
      line-height: 120%; /* 1.2rem */
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 1.25rem 0;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);

      &.active {
        font-weight: 700;
      }
    }

    div {
      position: static;
      width: 100%;
      transform: scaleY(0);
      visibility: hidden;
      opacity: 0;
      height: 0;
      transform-origin: top;
      color: var(--White, #fff);
      font-size: 0.8125rem;
      font-weight: 400;
      line-height: 120%; /* 0.975rem */

      a {
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
        opacity: 0;
        transform-origin: top;
        height: 0;
        background: transparent;
        color: var(--White);
        border-radius: 0;
        border: none;
      }
    }

    &:hover {
      div {
        height: auto;
        transform: scaleY(1);

        a {
          transform: scaleY(1);
          transform-origin: bottom;

          height: auto;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`;

export const RegisterButton = styled(Link)`
  display: flex;
  width: auto;
  height: 2.9375rem;
  padding: 0.4375rem 1.125rem;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--White, #fff);
  color: var(--White, #fff);
  font-size: 1rem;
  font-weight: 500;
  line-height: 0.93rem; /* 93% */
  letter-spacing: 0.075rem;
  text-transform: uppercase;

  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--White, #fff);
    color: var(--Charcoal);
  }

  @media (max-width: 1080px) {
    margin-left: 5%;
  }
`;
