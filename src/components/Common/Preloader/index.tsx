import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
`;

const Counter = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.to(preloaderRef.current, { scaleX: 1.1, scaleY: 1.1, duration: 0.5 })
      .to(
        preloaderRef.current,
        { scaleX: 0, scaleY: 0, opacity: 0, duration: 0.5 },
        '+=1'
      )
      .to(counterRef.current, { opacity: 1, duration: 0.5, stagger: 0.1 });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
        }
        return prevProgress < 100 ? prevProgress + 1 : prevProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <PreloaderContainer ref={preloaderRef}>
      <Counter ref={counterRef}>{progress}%</Counter>
    </PreloaderContainer>
  );
};

export default Preloader;
