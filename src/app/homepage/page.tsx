import {
  CTASection,
  Footer,
  HomeSectionOne,
  HomeSectionTwo,
  HomeSectionThree,
  HomeSectionFour,
} from '@/components';
import { Main } from '../(home)/styles';

const HomePage = () => {
  return (
    <Main>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      {/* <HomeSectionFour /> */}
     {/* <CTASection /> */}
      <Footer />
    </Main>
  );
};

export default HomePage;
