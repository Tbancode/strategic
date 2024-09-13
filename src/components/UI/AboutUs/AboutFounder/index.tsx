import Image from 'next/image';
import {
  FounderWrapper,
  FounderInner,
  FounderImageCtn,
  FounderDetails,
} from './styles';
import founder_image from '../../../../../public/images/founder_image.png';

const AboutFounder = () => {
  return (
    <FounderWrapper>
      <FounderInner>
        <FounderImageCtn>
          <Image src={founder_image} alt="image of the founder" fill quality={100} />
        </FounderImageCtn>
        <FounderDetails>
          <h2>Our Founder</h2>
          <p>
            Meet the driving force behind Strategic Solutions Global - Nancy
            Taiye Aragbaye, is a first-generation American with Nigerian roots,
            bringing over 15 years of invaluable experience in education,
            leadership, and entrepreneurship. As the founder, her mission
            extends beyond conventional leadership development, aiming to
            connect and empower women leaders globally. Nancy&apos;s unique
            perspective, rooted in personal experiences, drives her commitment
            to addressing the distinctive challenges and opportunities faced by
            women in leadership roles.
          </p>
          <p>
            In addition to serving as the USA National Head for Africa&apos;s
            Young Entrepreneurs and contributing to the Advisory Board of the
            Entrepreneurship Village, Nancy is a dynamic global speaker. Her
            versatile speaking profile enables her to empower women, youth, and
            business leaders worldwide, whether through high-quality training or
            impactful keynote addresses. At Strategic Solutions Global,
            empowerment is not just a concept; it&apos;s a big movement. Join
            us to rewrite the narrative of women in leadership - let&apos;s
            connect, collaborate, and catalyze change together!
          </p>
        </FounderDetails>
      </FounderInner>
    </FounderWrapper>
  );
};

export default AboutFounder;
