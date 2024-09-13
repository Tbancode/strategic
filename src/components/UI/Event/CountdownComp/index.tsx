'use client';
// CountdownTimer.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { CountdownWrapper, CountdownInner, TimerCtn, TimeItem } from './styles';
import ic_time_divider from '../../../../../public/svgs/ic_time_divider.svg';
import { useTimer } from 'react-timer-hook';
interface TimeFormat {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// interface CountdownTimerProps {
//   initialTime: number; // Initial time in seconds
// }

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState<number | null>(null);

  useEffect(() => {
    if (time !== null && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime && prevTime > 0) {
            const now = new Date();
            const targetDate = new Date('2024-03-15T23:59:59');
            if (now >= targetDate) {
              // Stop the timer when the target date has been reached
              clearInterval(timer);
              return 0;
            }
            return prevTime - 1;
          } else {
            clearInterval(timer); // Clear the interval when time reaches 0
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (): TimeFormat => {
    const targetDate = new Date('2024-03-15T23:59:59');
    const now = new Date();
    let difference = targetDate.getTime() - now.getTime();

    // Ensure difference is not negative
    difference = difference < 0 ? 0 : difference;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  return (
    <>
      <TimeItem>
        {formatTime().days} <p>days</p>
      </TimeItem>
      <Image src={ic_time_divider} alt="time divider" />

      <TimeItem>
        {formatTime().hours} <p>hours</p>
      </TimeItem>
      <Image src={ic_time_divider} alt="time divider" />

      <TimeItem>
        {formatTime().minutes} <p>minutes</p>
      </TimeItem>
      <Image src={ic_time_divider} alt="time divider" />

      <TimeItem>
        {formatTime().seconds} <p>seconds</p>
      </TimeItem>
    </>
  );
};

const CountdownComp = () => {
  return (
    <CountdownWrapper>
      <CountdownInner>
        <h3>Countdown to Event</h3>
        <TimerCtn>
          <CountdownTimer />
        </TimerCtn>
      </CountdownInner>
    </CountdownWrapper>
  );
};

export default CountdownComp;
