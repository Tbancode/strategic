"use client";
import Slider from './Slider';
import { TestimonialsWrapper, TestimonialsInner } from './styles';
import { useRef } from 'react';

const Testimonials = () => {
  const triggerRef = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLDivElement>;

  return (
    <TestimonialsWrapper ref={triggerRef}>
      <TestimonialsInner>
        <h2>What People Are Saying</h2>
        <Slider triggerRef={triggerRef} />
      </TestimonialsInner>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
