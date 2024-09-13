'use client';
import { styled } from 'styled-components';

export const SpeakersWrapper = styled.section`
  background: var(--Charcoal);
  &.shift__down {
    margin-bottom: 10rem;
  }
`;

export const SpeakersInner = styled.main`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    padding-top: 0;
    padding-bottom: 7.06rem;
  }
`;

export const SpeakersCtn = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(min(15.01244rem, 100%), 1fr)); */
  grid-template-columns: repeat(4, 1fr);
  gap: 3.44rem 3.55rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.4375rem 2.5825rem;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-family: var(--font-lora);
  font-size: 3.0625rem;
  font-weight: 700;
  line-height: 120%; /* 3.675rem */
  margin-bottom: 3.75rem;

  @media (max-width: 768px) {
    font-size: 1.9375rem;
    margin-bottom: 3.08rem;
  }
`;

export const SpeakerCtn = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &:nth-of-type(n + 7) {
      display: none;
    }

    &.active {
      &:nth-of-type(n + 7) {
        display: block;
      }
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 70%;
  width: 120%;
  left: -10%;
  z-index: 3;
  height: 28rem;

  background: linear-gradient(
    180deg,
    rgba(23, 23, 23, 0) -11.5%,
    #171717 48.92%
  );

  filter: blur(28.5px);

  @media (max-width: 768px) {
    top: 60%;
    height: 20.29738rem;

    background: linear-gradient(
      180deg,
      rgba(23, 23, 23, 0) -11.5%,
      #171717 48.92%
    );

    filter: blur(20.65985107421875px);
  }
`;

export const SpeakerInner = styled.div`
  max-width: 15.01244rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.38rem;

  @media (max-width: 768px) {
    gap: 1rem;
    img {
      height: 10.88263rem;
    }
  }
`;

export const AvatarCtn = styled.div`
  position: relative;
  min-height: 15.01244rem;
  width: 100%;

  img {
    height: 100%;
    object-fit: contain;
    mix-blend-mode: luminosity;
  }

  @media (max-width: 768px) {
    min-height: 10.88263rem;
  }
`;

export const SpeakerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 1.5625rem;
    font-weight: 700;
    line-height: 120%; /* 1.875rem */
  }

  p {
    color: var(--Gold, #d7ac43);
    font-family: Satoshi;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.72494rem;
    }
  }
`;

export const SeeMoreBtn = styled.button`
  display: flex;
  width: 13.125rem;
  padding: 1.0625rem 2.0625rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #d9d9e3;
  color: #d9d9e3;
  font-family: var(--font-satoshi);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.58625rem; /* 169.2% */
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  top: 85%;
  z-index: 7;
  cursor: pointer;

  &.shift__down {
    top: 100%;
  }

  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--Charcoal);
    background-color: #d9d9e3;
  }

  @media (max-width: 768px) {
    width: 9.51438rem;
    padding: 0.77019rem 1.49513rem;
    border: 1.45px solid #d9d9e3;
    font-size: 0.67963rem;
    line-height: 1.14988rem; /* 169.2% */
    letter-spacing: 0.05438rem;
    top: 70%;
  }
`;
