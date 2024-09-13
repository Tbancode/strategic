import { Header } from '@/components';
import CountdownComp from '../CountdownComp';
import HeroSection from '../HeroSection';
import { SectionWrapper, SectionInner, BriefText } from './styles';

const SectionOne = () => {
  return (
    <>
      <Header />
      <SectionWrapper>
        <SectionInner>
          <HeroSection />
          <BriefText>
            Prepare for a transformative journey of empowHERment at the I Am
            Change Conference.
          </BriefText>
          <BriefText>
            Crafted by Strategic Solutions Global, this program aims to redefine
            LeadHERship, celebrate ChangemakHERs, and foster a meaningful
            network for PioneeHERs in progress.
          </BriefText>
          <CountdownComp />
        </SectionInner>
      </SectionWrapper>
    </>
  );
};

export default SectionOne;
