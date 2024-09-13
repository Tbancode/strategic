'use client';
import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --font-satoshi: 'Satoshi', sans-serif;
    --font-lora: 'Lora', serif;
    --Grey: #d9d9d9;
    --White: #fff;
    --Gold: #d7ac43;
    --blue: #1a27c9;
    --Charcoal: #171717;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background: var(--Charcoal);

    @media (max-width: 768px) {
    }
    &::-webkit-scrollbar {
      width: 5px;

      &-thumb {
        background: var(--White);
        width: 100%;
        border-radius: 5px;
      }

      &-track {
        background: var(--Charcoal);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: var(--font-satoshi);
  }

  p {
    font-family: var(--font-satoshi);
    font-weight: 400;
    line-height: 120%; /* 1.2rem */
  }

  .go3958317564 {
    font-family: var(--font-satoshi);
  }
`;
