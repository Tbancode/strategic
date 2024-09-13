import { HomeHeroSection } from '@/components';
import { Wrapper, Inner, Quote, BecomeAMember } from './styles';
import Link from 'next/link';

const SectionOne = () => {
  return (
    <Wrapper>
      <HomeHeroSection />
      <Inner>
        <Quote>
          <h3>
            There is no limit to what we, <span>as women</span> can accomplish.
          </h3>

          <p>- Michelle Obama</p>
        </Quote>

        <BecomeAMember>
          <p>
            <span>Strategic Solutions Global</span> is an institute for
            leadership development commited to empowering and fostering the
            growth of women, guiding them to become influential Global LeadHERs
            and catalyst for change
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSerlqk6-W9iLsIrReAZMi2gQKk5c9GUhN9OQfVCWAcRHyxsUA/viewform"
            target="_blank"
            rel="noreferrer noopener"
          >
            Become a member
          </Link>
        </BecomeAMember>
      </Inner>
    </Wrapper>
  );
};

export default SectionOne;
