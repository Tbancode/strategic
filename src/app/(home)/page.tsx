// import {
//   CTASection,
//   Footer,
//   SectionOne,
//   SectionTwo,
//   SectionThree,
// } from '@/components';

// import { Main } from './styles';
// import { client } from '../../../sanity/lib/client';
// import { speakersQuery } from '../../../utils/queries';
// import { SpeakersProps } from '../../../typings';
// export const revalidate = 60;

// export default async function Home() {
//   const speakers = await client.fetch(speakersQuery) as SpeakersProps[];
//   return (
//     <Main>
//       <SectionOne />
//       <SectionTwo />
//       <SectionThree speakers={speakers} />
//       <CTASection />
//       <Footer />
//     </Main>
//   );
// }

import {
  CTASection,
  Footer,
  HomeSectionOne,
  HomeSectionTwo,
  HomeSectionThree,
  HomeSectionFour,
} from '@/components';
import { Main } from '../(home)/styles';
import { client } from '../../../sanity/lib/client';
import { eventsQuery } from '../../../utils/queries';
import { EventsProps } from '../../../typings';
import MailingSubscription from '@/components/UI/Home/MailingSubscription';
export const revalidate = 120;

const Home = async () => {
  const events = (await client.fetch(eventsQuery)) as EventsProps[];
  return (
    <Main>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour events={events} />
      <CTASection
        title="Amplify Your Impact"
        subtitle="Get updates for future events from Strategic Solutions Global"
        isHomepage={true}
        buttonText="Submit"
      />
      <Footer />
      <MailingSubscription />
    </Main>
  );
};

export default Home;
