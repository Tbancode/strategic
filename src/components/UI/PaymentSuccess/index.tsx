'use client';
import styled, { keyframes } from 'styled-components';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Footer, Header } from '@/components';
import Link from 'next/link';

const PaymentSuccess = ({ amount }: { amount: string }) => {
  const { width, height } = useWindowSize();

  return(
    <Container>
      <Header />
      <Confetti width={width} height={height} />
      <MessageContainer>
        <Title>Payment Successful!</Title>
        <Amount>You have successfully paid ${amount}</Amount>
        <Button href="/">Go to Home</Button>
      </MessageContainer>
      <Footer />
    </Container>
  );
};

export default PaymentSuccess;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  background-color: var(--Charcoal);
  position: relative;

  canvas {
    width: 100vw;
  }
`;

const MessageContainer = styled.div`
  background-color: var(--White);
  padding: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  max-width: 50%;
  margin: 2rem auto;
`;

const Title = styled.h1`
  color: var(--Gold);
  font-family: var(--font-satoshi);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Amount = styled.p`
  color: var(--Charcoal);
  font-family: var(--font-satoshi);
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--blue);
  color: var(--White);
  font-family: var(--font-satoshi);
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--Gold);
  }
`;
