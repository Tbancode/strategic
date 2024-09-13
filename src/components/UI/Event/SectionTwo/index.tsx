import Image from 'next/image';
import {
  SectionInner,
  SectionWrapper,
  StatsCtn,
  StatItem,
  RegisterCtn,
  RegisterTextCtn,
} from './styles';
import line_1 from '../../../../../public/images/line_1.png';
import line_2 from '../../../../../public/images/line_2.png';
import line_3 from '../../../../../public/images/line_3.png';
import line_4 from '../../../../../public/images/line_4.png';
import line_5 from '../../../../../public/images/line_5.png';
import ic_external_link from '../../../../../public/svgs/ic_external_link.svg';

import Link from 'next/link';
import Testimonials from '../Testimonials';
import Panelists from '../Panelists';
import { changeData, movementData } from './constants';

const SectionTwo = () => {
  return (
    <SectionWrapper>
      <SectionInner>
        <StatsCtn>
          <Image src={line_1} alt="divider" />
          <StatItem>
            <h2>2</h2> <p>Days</p>
          </StatItem>
          <Image src={line_2} alt="divider" />

          <StatItem>
            <h2>40</h2> <p>Speakers</p>
          </StatItem>
          <Image src={line_3} alt="divider" />

          <StatItem>
            <h2>20+</h2> <p>Countries</p>
          </StatItem>
          <Image src={line_4} alt="divider" />

          <StatItem>
            <h2>10000+</h2> <p>Change-Agents</p>
          </StatItem>
          <Image src={line_5} alt="divider" />
        </StatsCtn>

        <RegisterCtn>
          <RegisterTextCtn>
            <h3>
              Experience two impactful days of intentional connection with the
              largest network of Global LeadHERs.
            </h3>
            <p>
              Igniting leaders, shaping the future -every LeadHER serves as a
              Catalyst to remarkable transformation. Join this Global Movement.
              and together, let&apos;s revolutionize the narrative of women
              leadership by igniting inspiration and fostering impactful change.
            </p>
          </RegisterTextCtn>
          <Link
            href="https://www.eventbrite.com/e/i-am-change-global-empowherment-conference-tickets-804193623777?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register <Image src={ic_external_link} alt="external link icon" />
          </Link>
        </RegisterCtn>
      </SectionInner>
      <Testimonials />
      <Panelists title="I Am Change Panelist" panelists={changeData} />
      <Panelists title="I Am A Movement Panelist" panelists={movementData} />
    </SectionWrapper>
  );
};

export default SectionTwo;
