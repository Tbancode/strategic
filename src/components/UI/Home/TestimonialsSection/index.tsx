'use client';
import {
  Wrapper,
  Inner,
  CardContainer,
  CardInner,
  CardAvatar,
  CardContent,
  StarContainer,
  Texts,
  Details,
  NavButtons,
  PreviousNav,
  NextNav,
} from './styles';
import Image, { StaticImageData } from 'next/image';
import testimony_image_1 from '../../../../../public/images/testimony_image_1.png';
import testimony_image_2 from '../../../../../public/images/testimony_image_2.png';
import testimony_image_3 from '../../../../../public/images/testimony_image_3.png';
import ic_star from '../../../../../public/svgs/ic_star.svg';
import ic_forward_nav from '../../../../../public/svgs/ic_forward_nav.svg';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type TestimonialsProps = {
  avatar: StaticImageData;
  texts: string[];
  name: string;
  title: string;
};

const testimonials = [
  {
    avatar: testimony_image_1,
    texts: [
      'And girl ever since your event in atl, I was so inspired by the black excellence… I told myself “I got more work to do this year”  I’m locked in now way more than before. I appreciate you Nancy & the Strategic Solutions Team!I really do!',
    ],
    name: 'Ciera Taylor',
    title: 'Mortgage Lender & Real Estate Investor',
  },
  {
    avatar: testimony_image_2,
    texts: [
      'If I become the President of Nigeria, it will because I attended the 2023 LeadHERship Retreat.',
    ],
    name: 'Abosede George-Ogan',
    title: 'Founder of WILAN Global',
  },
  {
    avatar: testimony_image_3,
    texts: [
      'My time Strategic Solutions Global has been immeasurable thus far! In Nancy, I’ve found an executive coach who took the time to get to know me both professionally and personally, with a goal to ensure my spirit is moving in its fullest power, leading me to new heights of success.',
      'My Executive coach provides a non-judgment zone where it’s ok to be wrong, and it’s ok to be stubborn… but it’s not okay to reject change and growth. I’m constantly being supported and encouraged to be BETTER than I was yesterday and striving to become my best self tomorrow. Im so grateful for the coaching I’ve received from Nancy, as I’m already becoming a stronger strategic leader and people manager. Thank you, Nancy and Strategic Solutions Global!',
    ],
    name: 'Daleina Cain',
    title: 'Director of People Operations',
  },
] as TestimonialsProps[];

const TestimonialCard = ({ t }: { t: TestimonialsProps }) => (
  <motion.div
    key={t.name} // Use a unique identifier for each testimonial
    initial={{ opacity: 0 }} // Start invisible
    animate={{ opacity: 1 }} // Animate to full opacity on mount
    exit={{
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }} // Animate to invisible on unmount (optional)
  >
    <CardContainer>
      <CardInner>
        <CardAvatar>
          <Image
            src={t.avatar}
            alt="testimonial avatar"
            quality={100}
            priority={true}
          />
        </CardAvatar>
        <CardContent>
          <StarContainer>
            {Array.from({ length: 5 }).map((_, i) => (
              <Image src={ic_star} alt="blank" key={i} />
            ))}
          </StarContainer>
          <Texts>
            {t.texts.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </Texts>
          <Details>
            <h2>{t.name}</h2>
            <p>{t.title}</p>
          </Details>
        </CardContent>
      </CardInner>
    </CardContainer>
  </motion.div>
);

const TestimonialSection = () => {
  const [num, setNum] = useState(0);

  const previous = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      // If at the first testimonial, wrap around to the last one
      setNum(testimonials.length - 1);
    }
  };

  const next = () => {
    if (num < testimonials.length - 1) {
      setNum(num + 1);
    } else {
      // If at the last testimonial, wrap around to the first one
      setNum(0);
    }
  };

  return (
    <Wrapper>
      <Inner>
        <h1>Testimonials</h1>

        <AnimatePresence mode="wait">
          {testimonials.map(
            (t, i) => num === i && <TestimonialCard key={i} t={t} />
          )}
        </AnimatePresence>
        <NavButtons>
          <PreviousNav
            className={num === 0 ? 'disabled' : ''}
            onClick={previous}
            src={ic_forward_nav}
            alt="nav icon"
          />
          <NextNav
            className={num === testimonials.length - 1 ? 'disabled' : ''}
            onClick={next}
            src={ic_forward_nav}
            alt="nav icon"
          />
        </NavButtons>
      </Inner>
    </Wrapper>
  );
};

export default TestimonialSection;
