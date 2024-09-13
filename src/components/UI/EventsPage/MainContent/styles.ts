'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
export const MainEventContent = styled.div`
  padding: 5rem 0 10rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
    padding: 3.25rem 0 5rem;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  width: 100%;
  margin-bottom: 3.81rem;
`;

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1.88rem 0 1.88rem;

  h2 {
    color: var(--White, #fff);
    font-family: var(--font-satoshi);
    font-size: 1.9375rem;
    line-height: 120%; /* 2.325rem */
  }
`;

export const Number = styled.div`
  display: flex;
  height: 1.9375rem;
  padding: 0.1875rem 1.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 3.125rem;
  background: var(
    --glass,
    linear-gradient(
      219deg,
      rgba(255, 255, 255, 0.26) -32.35%,
      rgba(255, 255, 255, 0) 111.78%
    )
  );
  color: var(--White, #fff);

  /* Satoshi Title 4 Bold */
  font-family: var(--font-satoshi);
  font-size: 1rem;
  font-weight: 700;
  line-height: 120%; /* 1.2rem */
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.5rem;

  & > svg {
    margin: 1.5rem 0;
  }
`;

export const EventItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
`;

export const EventImage = styled.div`
  width: 13.125rem;
  min-height: 13.125rem;
  position: relative;

  img {
  }
`;

export const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 56.375rem;

  h1 {
    overflow: hidden;
    color: var(--Gold, #d7ac43);
    text-overflow: ellipsis;
    font-family: var(--font-lora);
    font-size: 1.5625rem;
    line-height: 120%; /* 1.875rem */
    margin-bottom: 0.62rem;
  }

  & > p {
    overflow: hidden;
    color: var(--Grey, #d9d9d9);
    text-overflow: ellipsis;
    font-size: 1rem;
    line-height: 1.40625rem;
    margin-bottom: 1.03rem;
  }
`;

export const LocationDateCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.38rem;
`;

export const DateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.53rem;

  p {
    color: var(--Grey, #d9d9d9);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.40625rem; /* 140.625% */
  }
`;

export const TicketCtn = styled.div`
  margin-top: 2.34rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  a {
    color: var(--White, #fff);
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 120%; /* 0.975rem */
    letter-spacing: 0.075rem;
    height: 3rem;
    display: flex;
    width: auto;
    padding: 1.0625rem 2.0625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    text-transform: uppercase;
  }

  a:first-of-type {
    background: var(--blue, #1a27c9);
  }

  a:last-of-type {
    border: 2px solid #d9d9e3;
  }
`;

export const EventLists = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const SelectedOptionItem = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  height: 3rem;
  padding: 1.0625rem 1rem;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  color: var(--White, #fff);
  font-family: var(--font-satoshi);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 120%; /* 0.975rem */

  background: var(
    --glass,
    linear-gradient(
      219deg,
      rgba(255, 255, 255, 0.26) -32.35%,
      rgba(255, 255, 255, 0) 111.78%
    )
  );
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const NoResult = styled.div`
  font-family: var(--font-satoshi);
  color: var(--Grey, #d9d9d9);
  font-size: 2rem;
  line-height: 1.40625rem;
  margin: 1.03rem 0;
`;
