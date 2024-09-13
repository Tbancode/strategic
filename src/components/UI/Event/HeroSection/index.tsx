import Image from 'next/image';
import Link from 'next/link';
import ic_external_link from '../../../../../public/svgs/ic_external_link.svg';

import { HeroTextCtn, CTAButtons, Date } from './styles';

const HeroSection = () => {
  return (
    <>
      <HeroTextCtn>
        <h1>
          I am Change Global Empow<span>HER</span>ment Conference 2.0
        </h1>
        <p>
          Igniting Lead<span>HER</span>s, Transforming Lead<span>HER</span>
          ship
        </p>
      </HeroTextCtn>
      <CTAButtons>
        <Link
          href="https://www.eventbrite.com/e/i-am-change-global-empowherment-conference-tickets-804193623777?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register <Image src={ic_external_link} alt="external link icon" />
        </Link>
      </CTAButtons>
      <Date>March 16th - 17th, 2024 | Virtual Conference</Date>
    </>
  );
};

export default HeroSection;
