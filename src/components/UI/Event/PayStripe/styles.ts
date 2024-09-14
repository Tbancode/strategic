'use client';
import { styled } from 'styled-components';

export const CTAWrapper = styled.section`
  background: linear-gradient(180deg, #1f1f1f -37.56%, #1a27c9 114.81%);
  padding: 5.44rem 0 5.5rem 0;
  display: flex;
  flex-direction: row;
  /* background: rgba(255, 255, 255, 0.1); */

  &.add_styles {
    /* background: var(--Charcoal, #171717); */
    /* background: rgba(255, 255, 255, 0.1); */
    background: linear-gradient(219.07deg, rgba(0, 8, 193, 0.48) -32.35%, rgba(255, 255, 255, 0) 111.78%);

  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2.5rem 0;
    flex-direction: column;
  }
`;

export const CTAInner = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  /* justify-content: space-between; */
  /* margin-left: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.75rem;


  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const Details = styled.div`
          
    h2{
      font-size: 35px;
      font-family: var(--font-lora);
      color: var(--Gold, #ffbd00);
      margin-bottom: 5px;
  }
  h3{
    font-size: 18px;
    font-family: var(--font-satoshi);
    color: var(--Gold, #ffbd00);
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  h2{
    width: 90%;
    margin-left: 20px;
  }
  h3{
    margin-left: 20px;
    }
`

export const List = styled.ul`
        font-size: 18px;
        line-height: 120%;
        font-family: var(--font-satoshi);
        color: var(--Grey);
        li{
          margin-bottom: 15px;
          list-style: none;
        }
        li:before {
           content: '✓ ';
          }
          @media (max-width: 768px) {
            width: 90%;
            margin: auto;
            display: flex;
            flex-direction: column;
          }
`

export const CTATextCtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-left: 160px;
  margin-bottom: 30px;
  gap: 1.13rem;

  h1 {
    color: var(--White, #fff);
    font-family: var(--font-lora);
    font-size: 3.0625rem;
    font-weight: 700;
    line-height: 120%;
    max-width: 28.5rem;
    
  }

  p {
    max-width: 19.5rem;
    color: var(--White, #fff);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    gap: 0.64rem;
    width: 90%;
    height: 600px;
    margin-left: 30px;
    h1 {
      max-width: 13.1875rem !important;
      font-size: 1.9375rem;
    }

    p {
      max-width: 14.375rem;
      font-size: 1rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 0.88631rem;
  }
`;

export const NameSegment = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.88631rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.69rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.48744rem;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-family: var(--font-satoshi);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 120%; /* 0.975rem */
`;

export const Input = styled.input`
  padding: 0.875rem 0.875rem 1.125rem 0.875rem;
  background: var(--White, #fff);
  border: none;
  color: var(--Charcoal, #171717);
  font-family: var(--font-satoshi);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 120%;
  outline: none;

  @media (max-width: 768px) {
    padding: 0.74544rem 0.62038rem 0.81706rem 0.62038rem;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  padding: 1.0625rem 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background: var(--Charcoal, #171717);
  color: var(--White, #fff);
  font-family: var(--font-satoshi);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.58625rem; /* 158.625% */
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  border: none;
  margin-top: 1.25rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: var(--White, #fff);
    color: var(--Charcoal, #171717);
  }

  &.add_styles {
    background: var(--blue, #1a27c9);
    color: var(--White);

    &:hover {
      background: #4754ff;
    }
  }

  @media (max-width: 768px) {
    padding: 1.0625rem 2.0625rem;
    width: 100%;
    max-width: 100%;
    display: flex;
    margin-top: 0.88rem;
  }
`;
