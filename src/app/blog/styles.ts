'use client';
import styled from 'styled-components';
import join_linkedin_bg from '../../../public/images/join_linkedin_bg.png';
import underlay_logo from '../../../public/images/underlay_logo.png';

export const OurBlogsSection = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 6.25rem;
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem;

  header {
    margin-bottom: 3rem;

    h3 {
      color: var(--White, #fff);
      font-family: var(--font-lora);
      font-size: 2.4375rem;
      line-height: 120%; /* 2.925rem */
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding-bottom: 2.5rem;
    margin-top: 2.5rem;
    header {
      h3 {
        font-size: 1.25rem;
      }
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;

    header {
      margin-bottom: 3rem;

      h3 {
        color: var(--White, #fff);
        font-family: var(--font-lora);
        font-size: 2.4375rem;
        line-height: 120%; /* 2.925rem */
      }
    }
  }
`;

export const BlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.88rem 2rem;
  padding-bottom: 3rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;

export const SeeMoreBtn = styled.button`
  cursor: pointer;
  margin: 4rem auto 0;
  display: flex;
  width: 13.125rem;
  height: 3.75rem;
  padding: 1.0625rem 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: 2px solid #d9d9e3;
  background: transparent;
  color: #d9d9e3;
  font-family: var(--font-satoshi);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.58625rem; /* 169.2% */
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #d9d9e3;
    color: var(--Charcoal);
  }

  @media (max-width: 768px) {
    margin-top: -0.5rem;
    width: 9.51438rem;
    height: 2.72794rem;
    padding: 0.77019rem 1.49513rem;
    font-size: 0.67963rem;
    line-height: 1.14988rem; /* 169.2% */
    letter-spacing: 0.05438rem;
  }
`;

export const NoBlogPosts = styled.div`
  color: var(--White);

  font-family: var(--font-satoshi);
  font-size: 1.5rem;
  line-height: 120%;
`;

export const JoinLinkedInSection = styled.div`
  height: 30.625rem;
  display: grid;
  place-items: center;
  background: url(${join_linkedin_bg.src}) no-repeat,
    url(${underlay_logo.src}) no-repeat, var(--Charcoal);
  background-size: cover, contain;

  background-position: center bottom, right bottom;
  overflow-y: hidden;

  @media (max-width: 768px) {
    height: 100%;
    padding: 4.34rem 0;

    background-size: cover, 100%;
  }
`;

export const JoinLinkedInInner = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3.75rem;

  & > a {
    display: none;
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
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
      background: #d9d9e3;
      color: var(--Charcoal);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    flex: 1;
    max-width: 25.4375rem;
    h1 {
      color: var(--White);
      font-family: var(--font-lora);
      font-size: 2.4375rem;
      line-height: 120%;
    }

    a {
      display: flex;
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
      transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

      &:hover {
        background: #d9d9e3;
        color: var(--Charcoal);
      }
    }
  }

  p {
    flex: 1;

    max-width: 40.0625rem;
    color: var(--White, #fff);
    font-family: var(--font-satoshi);
    font-size: 1.5625rem;
    line-height: 2.48125rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;

    & > a {
      display: flex;
      margin-top: 1.25rem;
      height: 2.72794rem;
      padding: 0.77019rem 1.49513rem;
      font-size: 0.67963rem;
      line-height: 1.14988rem; /* 169.2% */
      letter-spacing: 0.05438rem;
    }

    div {
      h1 {
        font-size: 1.25rem;
      }

      a {
        display: none;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      line-height: 1.65625rem;
    }
  }
`;
