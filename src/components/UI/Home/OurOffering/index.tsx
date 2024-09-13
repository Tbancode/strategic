'use client';
import Image from 'next/image';
import {
  OfferingWrapper,
  OfferingInner,
  OfferingsCtn,
  Offering,
  ContentCtn,
  OfferingBanner,
  BlurUnderlay,
} from './styles';
import ic_empowerment from '../../../../../public/svgs/ic_empowerment.svg';
import ic_personalized from '../../../../../public/svgs/ic_personalized.svg';
import ic_celebrating from '../../../../../public/svgs/ic_celebrating.svg';
import ic_networking from '../../../../../public/svgs/ic_networking.svg';
import ic_intergenerational from '../../../../../public/svgs/ic_intergenerational.svg';
import ic_exclusive from '../../../../../public/svgs/ic_exclusive.svg';
import offering_banner from '../../../../../public/images/offering_banner.png';
import mobile_offering_banner from '../../../../../public/images/mobile_offering_banner.png';
import { useIsMobile } from '../../../../../utils/useIsMobile';

const offerings = [
  {
    icon: ic_empowerment,
    text: 'Development & Catalyst Masterminds',
  },
  {
    icon: ic_personalized,
    text: 'Personalized Leadership Growth',
  },
  {
    icon: ic_celebrating,
    text: 'Celebrating Leadership Excellence',
  },
  {
    icon: ic_networking,
    text: 'Global Networking Hub',
  },
  {
    icon: ic_intergenerational,
    text: 'Intergenerational Mentorship',
  },
  {
    icon: ic_exclusive,
    text: 'Exclusive Executive Coaching',
  },
];

const OurOffering = () => {
  const isMobile = useIsMobile();
  return (
    <OfferingWrapper>
      <OfferingInner>
        <OfferingsCtn>
          <h1>Our Offerings</h1>
          <ContentCtn>
            {offerings.map((offering, i) => (
              <Offering key={i}>
                <Image src={offering.icon} alt="oferring indicator" />
                <p>{offering.text}</p>
              </Offering>
            ))}
          </ContentCtn>
        </OfferingsCtn>
        <OfferingBanner>
          <Image
            src={isMobile ? mobile_offering_banner : offering_banner}
            alt="image of a lady sitting"
            quality={100}
            // placeholder="blur"
          />

          <BlurUnderlay />
        </OfferingBanner>
      </OfferingInner>
    </OfferingWrapper>
  );
};

export default OurOffering;
