import { Footer, Header } from '@/components';
import {
  ProgramHeroSection,
  ProgramHeroInner,
  ProgramHeroTextCtn,
  GridCardsCtn,
  Box,
  BoxTexts,
  ApplyNow,
  ApplyNowInner,
  WhySection,
  WhySectionInner,
  WhyTextCtn,
  WhyImageCtn,
} from './styles';
import Image from 'next/image';
import ic_boost from '../../../../public/svgs/ic_boost.svg';
import ic_fast_track from '../../../../public/svgs/ic_fast_track.svg';
import ic_multiply from '../../../..//public/svgs/ic_multiply.svg';
import why_section_image from '../../../../public/images/why_section_image.png';
import program_hero_banner from '../../../../public/images/program_hero_banner.png';

import Link from 'next/link';

const cardContents = [
  {
    icon: ic_boost,
    title: 'Increase Your Global Influence',
    text: 'Learn how to shape decisions, behaviors & outcomes globally across various industries such as politics, economics, culture & technology.',
  },
  {
    icon: ic_fast_track,
    title: 'Accelerate Your Impact',
    text: 'Harness your potential with an accelerator that hones in on sharpening your skillset and equipping you with strategies for Global Impact',
  },
  {
    icon: ic_multiply,
    title: 'Multiply Your Income',
    text: 'Experience an accelerator designed to provide your with strategies to multiply your income.',
  },
];

const Program = () => {
  return (
    <section
      style={{
        backgroundColor: '#171717',
      }}
    >
      <Header />
      <ProgramHeroSection>
        <Image
          src={program_hero_banner}
          alt="why section image"
          fill
          priority
          placeholder="blur"
        />
        <ProgramHeroInner>
          <ProgramHeroTextCtn>
            <h1>
              Global Lead<span>HER</span>ship Accelerator
            </h1>
            <p>
              Step into your power as a high-impact leader with our
              Global&apos;s LeadHERs Accelerator! In just 6 months, unleash your
              potential with practical training, monthly meetups, and powerful
              partnerships tailored to elevate your Global Influence and drive
              Global Impact. Seize this transformative opportunity & join the
              2024 Cohort.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScqnfq3KobtujLxv0O9_VxMGHsgxSZ6aiqKfadRgBgRDB2Zrw/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              Apply Today!
            </Link>
          </ProgramHeroTextCtn>
        </ProgramHeroInner>
      </ProgramHeroSection>
      <GridCardsCtn>
        {cardContents.map((content, i) => (
          <Box key={i}>
            <Image src={content.icon} alt="globe icon" />
            <BoxTexts>
              <h4>{content.title}</h4>
              <p>{content.text}</p>
            </BoxTexts>
          </Box>
        ))}
      </GridCardsCtn>
      <WhySection>
        <WhySectionInner>
          <WhyTextCtn>
            <h2>Why The Global LeadHERship Accelerator</h2>
            <p>
              Discover how to step into Global Influence, make transformational
              impact and claim your seat at the Global Table.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScqnfq3KobtujLxv0O9_VxMGHsgxSZ6aiqKfadRgBgRDB2Zrw/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              Apply Now
            </Link>
          </WhyTextCtn>
          <WhyImageCtn>
            <Image
              src={why_section_image}
              alt="image of women having a meeting "
              quality={100}
            />
          </WhyImageCtn>
        </WhySectionInner>
      </WhySection>
      <ApplyNow>
        <ApplyNowInner>
          <p>
            Expand your leadership capacity, unleash your leadership potential
            and ignite Global Change. Join a dynamic community of trailblazHERs
            who are reshaping the world.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScqnfq3KobtujLxv0O9_VxMGHsgxSZ6aiqKfadRgBgRDB2Zrw/viewform"
            target="_blank"
            rel="noreferrer noopener"
          >
            Apply Now
          </Link>
        </ApplyNowInner>
      </ApplyNow>
      <Footer />
    </section>
  );
};

export default Program;
