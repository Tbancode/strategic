'use client';
import { Header } from '@/components';
import Link from 'next/link';
import {
  HeroSectionWrapper,
  HeroSectionInner,
  HeroContent,
  HeroButtonsCtn,
  HeroBanner,
} from './styles';
import Image from 'next/image';
import mobile_hero_banner from '../../../../../public/svgs/mobile_hero_banner.svg';
import hero_banner from '../../../../../public/images/hero_banner.png';
import home_hero_bg from '../../../../../public/svgs/hero_bg.svg';
import WordFlipper from '@/components/Common/WordFlipper';
import { useIsMobile } from '../../../../../utils/useIsMobile';

const HeroSection = () => {
  const words = ['Influential', 'Powerful', 'Business', 'Elite', 'High-Impact'];
  const mainText = ['A Global Network', 'Women across Africa', ''];
  return (
    <HeroSectionWrapper>
      <Header />
      <Image src={home_hero_bg} alt="background" priority quality={100} />
      <Image src={mobile_hero_banner} alt="background" priority quality={100} />
      <HeroSectionInner>
        <HeroContent>
          <h1>
            A Global Network{' '}
            <span>
              of <WordFlipper words={words} flipInterval={3000} />
            </span>{' '}
            Women across Africa and The Diaspora
          </h1>
          <HeroButtonsCtn>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSerlqk6-W9iLsIrReAZMi2gQKk5c9GUhN9OQfVCWAcRHyxsUA/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              Become a member
            </Link>
            <Link href="/who-we-are">Who we are</Link>
          </HeroButtonsCtn>
        </HeroContent>

        <HeroBanner>
          <Image
            src={hero_banner}
            alt="hero banner"
            // placeholder="blur"
            priority={true}
          />
        </HeroBanner>
      </HeroSectionInner>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
