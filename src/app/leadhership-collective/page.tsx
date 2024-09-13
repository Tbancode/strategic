import { Footer, Header } from '@/components';
import {
  LeadHershipHeroSection,
  LeadHershipHeroTextCtn,
  WomenGlobe,
  GridCardsCtn,
  Box,
  BoxTexts,
  ApplyNow,
  ApplyNowInner,
} from './styles';
import globe_bg from '../../../public/images/globe_bg.png';

import Image from 'next/image';
import women_globe from '../../../public/images/women_globe.png';
import ic_globe from '../../../public/svgs/offering_indicator.svg';
import Link from 'next/link';

const cardContents = [
  {
    title: 'Make Meaningful Connections',
    text: 'At Strategic Solutions Global,  we foster connections that transcend borders, empowering LeadHERs to build lasting relationships and unlock limitless opportunities.',
  },
  {
    title: 'Knowledge Sharing',
    text: 'Discover the power of collective wisdom at Strategic Solutions Global, where LeadHERs come together to share insights, expertise, and innovative ideas that drive transformative change.',
  },
  {
    title: 'Collaborate for Impact',
    text: 'Join forces with fellow LeadHERs to leverage our collective strengths and create sustainable impact that transcends borders and transforms communities.',
  },
];

const LeadhershipCollective = () => {
  return (
    <section
      style={{
        backgroundColor: '#171717',
      }}
    >
      <Header />
      <LeadHershipHeroSection>
        <Image src={globe_bg} alt="globe bg" />
        <LeadHershipHeroTextCtn>
          <h1>
            Lead<span>HER</span>ship Collective
          </h1>
          <p>
            Step into the Lead<span>HER</span>ship Collective - a unique
            community of High-impact women. Join our exclusive{' '}
            <b>LinkedIn Group</b> where you can make authentic connections,
            share ideas and forge intentional collaborations. Apply today, to
            Connect, Collaborate and Catalyze Change.
          </p>
        </LeadHershipHeroTextCtn>
        <WomenGlobe>
          <Image src={women_globe} alt="a globe of women" fill />
        </WomenGlobe>
        <GridCardsCtn>
          {cardContents.map((content, i) => (
            <Box key={i}>
              <Image src={ic_globe} alt="globe icon" />
              <BoxTexts>
                <h4>{content.title}</h4>
                <p>{content.text}</p>
              </BoxTexts>
            </Box>
          ))}
        </GridCardsCtn>
      </LeadHershipHeroSection>
      <ApplyNow>
        <ApplyNowInner>
          <h1>Join Our Exclusive Linkedin Community</h1>
          <p>
            Are you ready to join our dynamic community? Apply now and become a
            member of Strategic Solutions Global, where Emerging, Senior, and
            Executive LeadHERs across Africa & The Diaspora connect, support and
            empower each other, while gaining the strategic tools for global
            influence and impact.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSerlqk6-W9iLsIrReAZMi2gQKk5c9GUhN9OQfVCWAcRHyxsUA/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Become a member
          </Link>
        </ApplyNowInner>
      </ApplyNow>
      <Footer />
    </section>
  );
};

export default LeadhershipCollective;
