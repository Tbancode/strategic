import { AboutFounder, Footer, Header } from '@/components';
import {
  AboutUsHeroSection,
  OurMission,
  MainImages,
  MissionTextWrapper,
  MissionTextCtn,
  AboutUsCTASection,
  AboutUsCTAInner,
} from './styles';
import Image from 'next/image';
import about_us_img_1 from '../../../public/images/about_us_img_1.png';
import about_us_img_2 from '../../../public/images/about_us_img_2.png';
import Link from 'next/link';

const texts = [
  {
    title: 'Our Mission',
    text: 'Strategic Solutions Global is a Leadership Institute for Emerging, Senior & Executive leaders across Africa & The Diaspora. We equip corporate, tech, business and government leaders with the precise strategies and tactics to enhance their leadership capacity to increase their global influence and impact',
  },
  {
    title: 'Our Vision',
    text: 'To build a coalition of female change agents who collaborate to catalyze significant change across the globe.',
  },
];

const WhoWeAre = () => {
  return (
    <section
      style={{
        backgroundColor: '#171717',
      }}
    >
      <Header />
      <AboutUsHeroSection>
        <p>
          Welcome to Strategic Solutions Global, a beacon of empowerment and a
          catalyst for change in the realm of women&apos;s leadership. Founded
          by Nancy Taiye Aragbaye, a visionary first-generation American with an
          African heritage, our organization is on a mission to empower women
          LeadHers in Africa and diaspora.
        </p>
      </AboutUsHeroSection>
      <OurMission>
        <MainImages>
          <Image
            src={about_us_img_1}
            alt="image of women smiling"
            quality={100}
          />
          <Image
            src={about_us_img_2}
            alt="image of women in a coporate meeting"
            quality={100}
          />
        </MainImages>
        <MissionTextWrapper>
          {texts.map((text, i) => (
            <MissionTextCtn key={i}>
              <h3>{text.title}</h3>
              <p>{text.text}</p>
            </MissionTextCtn>
          ))}
        </MissionTextWrapper>
      </OurMission>
      <AboutFounder />
      <AboutUsCTASection>
        <AboutUsCTAInner>
          <h1>Become a Global Change-Agent</h1>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSerlqk6-W9iLsIrReAZMi2gQKk5c9GUhN9OQfVCWAcRHyxsUA/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Become A Member
          </Link>
        </AboutUsCTAInner>
      </AboutUsCTASection>
      <Footer />
    </section>
  );
};

export default WhoWeAre;
