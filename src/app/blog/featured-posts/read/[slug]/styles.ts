'use client';
import styled, { keyframes } from 'styled-components';
import blog_details_bg from '../../../../../../public/svgs/blog_details_bg.svg';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const PostDetailsWrapper = styled.section`
  background: url(${blog_details_bg.src}) no-repeat, #171717;
  background-position: top center;
  background-size: contain;
  animation: ${fadeIn} 0.5s ease-in;
`;

export const DetailsHeadingSection = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 2.4375rem;
    line-height: 120%;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 2.44rem auto;
    gap: 1.25rem;

    h1 {
      font-size: 1.5625rem;
    }
  }
`;

export const BlogBannerCtn = styled.div`
  height: 28.1875rem;
  position: relative;
  margin-top: 0.5rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 12.5rem;
  }
`;

export const ArticleSection = styled.div`
  font-family: var(--font-satoshi);
  color: var(--White, #fff);

  p {
    width: 72%;
    max-width: 1200px;
    margin: 0 auto;
    color: var(--Grey, #d9d9d9);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.8125rem; /* 145% */
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;

    strong {
      color: var(--White, #fff);
      font-size: 1.9375rem;
      font-weight: 500;
      line-height: 150%; /* 2.90625rem */
      margin: 0;
    }
  }

  h1,
  h2 {
    width: 72%;
    max-width: 1200px;
    margin: 0 auto;

    font-size: 1.9375rem;
    line-height: 120%; /* 2.325rem */
  }

  h3,
  h4 {
    width: 72%;
    max-width: 1200px;
    margin: 0 auto;
    font-size: 1.5625rem;
    line-height: 2.48125rem; /* 158.8% */
  }

  ul {
    width: 68%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    li {
      font-size: 1.25rem;
      line-height: 120%; /* 1.5rem */
      strong {
        font-weight: 700;
      }
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.8125rem;
      width: 80%;
      line-height: 150%;
      font-weight: 400;

      strong {
        font-size: 1rem;
        line-height: 150%;
      }
    }

    h1,
    h2 {
      width: 80%;
      font-size: 1.25rem;
    }

    h3,
    h4 {
      width: 80%;
      font-size: 1rem;
      line-height: 120%; /* 1.5rem */
    }

    ul {
      width: 72%;
      gap: 1rem;

      li {
        font-size: 0.8125rem;
        line-height: 150%;
      }
    }
  }
`;

export const QuoteSection = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 21.125rem;
  border-radius: 0.5rem;
  background: #73afba;
  margin: 3.75rem auto 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  opacity: 0.8961;
  background: var(--blue, #1a27c9);

  div {
    display: flex;
    max-width: 47.76813rem;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    color: var(--White);
    font-family: var(--font-satoshi);
    text-align: center;

    h3 {
      font-size: 0.75rem;
      font-style: italic;
      font-weight: 900;
      letter-spacing: 0.06875rem;
      text-transform: uppercase;
    }

    & > p {
      font-size: 1.9375rem;
      font-weight: 700;
      line-height: 120%; /* 2.325rem */
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 10.4375rem;
    margin-bottom: 3.13rem;

    div {
      h3 {
      }

      & > p {
        max-width: 19.625rem;
        font-size: 1rem;
      }
    }
  }
`;

export const RecommendationSection = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 6.25rem;

  h1 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 2.4375rem;
    line-height: 120%; /* 2.925rem */
  }

  @media (max-width: 768px) {
    width: 90%;
    padding-bottom: 3.13rem;
    gap: 1.5rem;

    h1 {
      font-size: 1.25rem;
    }
  }
`;

export const RecommendationListCtn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
  }
`;

export const RecommendationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    width: 100%;
    height: 21rem;
    border-radius: 0.5rem;
    position: relative;

    img {
      object-fit: cover;
    }
  }

  a {
    color: var(--White);
    font-family: var(--font-lora);
    font-size: 1.5625rem;
    line-height: 120%;
    font-weight: 700;
    transition: color 0.2s ease;

    &:hover {
      color: var(--Gold);
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    gap: 1.25rem;

    div {
      height: 10.75rem;
    }

    a {
      font-size: 1.25rem;
    }
  }
`;
