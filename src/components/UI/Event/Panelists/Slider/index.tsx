'use client';
import Image from 'next/image';

import { SlideCtn, SliderInner, SliderWrapper, PanelistInfo } from './styles';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SlideCtnWrapper from './SlideCtnWrapper';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Slider = ({
  panelists,
  triggerRef,
  isStretched,
}: {
  panelists: any[];
  triggerRef: React.MutableRefObject<HTMLDivElement>;
  isStretched?: boolean;
}) => {
  const sliderRef = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLDivElement>;
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const updateScrollAmount = () => {
      const sliderWidth = slider.offsetWidth;
      setScrollAmount(-(sliderWidth - window.innerWidth));
    };

    const tween = gsap.to(slider, {
      x: scrollAmount,
      duration: 3,
      ease: 'none',
      invalidateOnRefresh: true,
    });

    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top 2%',
      end: () => `+=${scrollAmount * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    updateScrollAmount(); // Initial calculation

    window.addEventListener('resize', () => {
      updateScrollAmount();
      ScrollTrigger.refresh(); // Refresh ScrollTrigger with the new scrollAmount
    });

    return () => {
      window.removeEventListener('resize', updateScrollAmount);
    };
  }, [scrollAmount, triggerRef]);

  return (
    <SliderWrapper>
      <SliderInner ref={sliderRef}>
        {panelists.map((panelist, i) => (
          <SlideCtnWrapper
            key={i}
            src={panelist.image}
            name={panelist.name}
            flex={panelist.flex}
            isStretched={isStretched}
          />
        ))}
      </SliderInner>
    </SliderWrapper>
  );
};

export default Slider;
