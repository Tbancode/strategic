import { Footer, Header, MainContent } from '@/components';
import { EventsHeroSection, EventHeroInner } from './styles';
import { client } from '../../../sanity/lib/client';
import { eventsQuery } from '../../../utils/queries';
import { EventsProps } from '../../../typings';
export const revalidate = 120;

const Events = async () => {
  const events = (await client.fetch(eventsQuery)) as EventsProps[];
  return (
    <section
      style={{
        backgroundColor: '#171717',
      }}
    >
      <Header />
      <EventsHeroSection>
        <EventHeroInner>
          <h1>Events</h1>

          <p>
            Stay updated on the latest and upcoming events from our community.
          </p>
        </EventHeroInner>
      </EventsHeroSection>
      <MainContent events={events} />
      <Footer />
    </section>
  );
};

export default Events;
