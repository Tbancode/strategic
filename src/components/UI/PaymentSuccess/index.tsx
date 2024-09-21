'use client';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Footer, Header } from '@/components';
import Link from 'next/link';

const PaymentSuccess = () => {
  const { width, height } = useWindowSize();
  const [amount, setAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasSentData, setHasSentData] = useState<boolean>(false);

 
  useEffect(() => {
    const fetchAmountAndSendData = async () => {
      try {
        if (typeof window !== 'undefined') {
          // Fetch stored price and other data from localStorage
          const storedPrice = localStorage.getItem('selectedPrice');
          const storedData = localStorage.getItem('paymentFormData');

          const parsedAmount = storedPrice
            ? parseFloat(storedPrice.replace(/[^0-9.-]+/g, ''))
            : null;

          if (parsedAmount !== null) {
            setAmount(parsedAmount);
          } else {
            setError('No valid price found.');
          }

          if (storedData) {
            const formData = JSON.parse(storedData);

            // Send data to Google Sheets
            const formPayload = new FormData();
            formPayload.append('Name', formData.name);
            formPayload.append('Email', formData.email);
            formPayload.append('Phone', formData.phone);
            formPayload.append('Amount', parsedAmount?.toString() || '');
            // https://script.google.com/macros/s/AKfycbxLK4MT95n8ff16lzEJLl5524Yt1IqeJj2g367A3qOS7WdyM7YdekRZbDtgU2KpOIzaXA/exec
            try {
              const response = await fetch(
                'https://script.google.com/macros/s/AKfycbxLK4MT95n8ff16lzEJLl5524Yt1IqeJj2g367A3qOS7WdyM7YdekRZbDtgU2KpOIzaXA/exec',
                {
                  method: 'POST',
                  body: formPayload,
                }
              );

              const responseText = await response.text();
              console.log('Response from Google Sheets:', responseText);

              if (response.ok) {
                console.log('Data sent successfully to Google Sheets!');
                // Set flag to indicate data was successfully sent
                localStorage.setItem('isDataSent', 'true');
              } else {
                console.error('Failed to send data to Google Sheets');
              }
            } catch (error) {
              console.error('Error while sending data:', error);
            }
          } else {
            setError('No form data found.');
          }
        }
      } catch (err) {
        setError('Error retrieving price from localStorage.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAmountAndSendData();
  }, []);


 
  
  
  
  

  return(
    <Container>
      <Header />
      <Confetti width={width} height={height} />
      <MessageContainer>
        <Title>Payment Successful!</Title>
        <Amount>You have successfully paid ${amount}</Amount>
        <Button href="/events/event-details/global-entrepreneurship-festival">Go to Home</Button>
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
  margin: 12rem auto;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Title = styled.h1`
  color: var(--Gold);
  font-family: var(--font-satoshi);
  font-size: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    max-width: 96%;
    font-size: 1.2rem;
  }
`;

const Amount = styled.p`
  color: var(--Charcoal);
  font-family: var(--font-satoshi);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    max-width: 97%;
    font-size: 1rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--Charcoal);
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
  @media (max-width: 768px) {
    font-size: 0%.8rem;
  }
`;
