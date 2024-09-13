'use client';
import { useEffect, useRef } from 'react';
import drag_indicator from '../../../../public/images/drag_indicator.png';
import useMousePosition from '../../../../utils/useMousePosition';
import { gsap } from 'gsap';
import Image from 'next/image';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { sliderAtom } from '../../../../atom/sliderAtom';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const states = useRecoilValue(sliderAtom);

  useEffect(() => {
    const cursorElement = cursorRef.current;

    // Define the animation timeline
    const tl = gsap.timeline({ paused: true });
    tl.to(cursorElement, {
      duration: 1,
      top: `${y - 36}px`,
      left: `${x - 36}px`,
      ease: 'back.out(1.7)',
    });

    // Play the animation
    tl.play();
  }, [x, y]);
  return (
    states.isHovered && (
      <DragIndicator ref={cursorRef}>
        <Image src={drag_indicator} alt="drag_indicator" />
      </DragIndicator>
    )
  );
};

export default CustomCursor;

const DragIndicator = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 50%;
  z-index: 5;

  @media (max-width: 768px) {
    display: none;
  }
`;
