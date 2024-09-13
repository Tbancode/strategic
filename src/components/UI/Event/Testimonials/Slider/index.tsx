'use client';
import Image from 'next/image';
import ic_blue_circle from '../../../../../../public/svgs/ic_blue_circle.svg';

import {
  ItemTextCtn,
  Name,
  SlideCtn,
  SliderInner,
  SliderWrapper,
} from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from 'react';
import { reviews } from './constants';

const Slider = ({
  triggerRef,
}: {
  triggerRef: React.MutableRefObject<HTMLDivElement>;
}) => {
  const sliderRef = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLDivElement>;
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderWidth = slider.offsetWidth;

    const updateScrollAmount = () => {
      setScrollAmount(-(sliderWidth - window.innerWidth));
    };

    updateScrollAmount();

    const tween = gsap.to(slider, {
      x: scrollAmount,
      duration: 3,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top -5%',
      end: () => `+=${scrollAmount * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    window.addEventListener('resize', updateScrollAmount);

    return () => {
      window.removeEventListener('resize', updateScrollAmount);
    };
  }, [scrollAmount, triggerRef]);

  return (
    <SliderWrapper ref={triggerRef}>
      <SliderInner ref={sliderRef}>
        {reviews.map((r, i) => (
          <SlideItem key={i} {...r} />
        ))}
      </SliderInner>
    </SliderWrapper>
  );
};

export default Slider;

const SlideItem = ({ review, person }: { review: string; person: string }) => {
  return (
    <SlideCtn>
      <Image src={ic_blue_circle} alt="blue circle" />
      <ItemTextCtn>
        <p>{review}</p>
        <Name>
          <h3>{person} </h3>
          <p>Change-agent</p>
        </Name>
      </ItemTextCtn>
    </SlideCtn>
  );
};
