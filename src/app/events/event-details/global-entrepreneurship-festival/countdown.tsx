import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface CountdownTimerProps {
  targetDate: string; // Define targetDate as a string
}

const ParentContainer = styled.div`
  display: flex;
  font-family: var(--font-satoshi);
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
`;

const CountdownContainer = styled.div`
  width: 670px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 391px;
    width: 90%;
    height: 83.43px;
  }
   
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  
`;

const TimeValue = styled.div`
  font-size: 50px;
  font-weight: 500;
  line-height: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }

`;

const TimeLabel = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 5px;
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Colon = styled.span`
  font-family: 'Satoshi', sans-serif;
  font-size: 50px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: 1.2px;
  text-align: center;
  width: 30px; /* Fixed width of 30px */
  height: 60px; /* Fixed height of 60px */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px; 
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;


const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      // Always return an object with the same structure
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        // Default value when time has run out
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <ParentContainer>
      <CountdownContainer>
        <TimeUnit>
          <TimeValue>{timeLeft.days} </TimeValue>
          <TimeLabel>Days</TimeLabel>
        </TimeUnit>
        <Colon>:</Colon>
        <TimeUnit>
          <TimeValue>{timeLeft.hours}</TimeValue>
          <TimeLabel>Hours</TimeLabel>
        </TimeUnit>
        <Colon>:</Colon>
        <TimeUnit>
          <TimeValue>{timeLeft.minutes}</TimeValue>
          <TimeLabel>Minutes</TimeLabel>
        </TimeUnit>
        <Colon>:</Colon>
        <TimeUnit>
          <TimeValue>{timeLeft.seconds}</TimeValue>
          <TimeLabel>Seconds</TimeLabel>
        </TimeUnit>
      </CountdownContainer>
    </ParentContainer>
  );
};

export default CountdownTimer;
