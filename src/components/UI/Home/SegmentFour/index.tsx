'use client';
import Image from 'next/image';
import {
  SegmentWrapper,
  SegmentInner,
  TopSection,
  EventsContainer,
  EventItem,
  EventImage,
  EventContent,
  LocationDateCtn,
  DateItem,
  SeeAllEvents,
} from './styles';
import ic_calendar from '../../../../../public/svgs/ic_calendar.svg';
import ic_clock from '../../../../../public/svgs/ic_clock.svg';
import { FAQ, StatementTruncate } from '@/components';
import { useIsMobile } from '../../../../../utils/useIsMobile';

const SegmentFour = ({ events }: { events: any }) => {
  const isMobile = useIsMobile();
  return (
    <SegmentWrapper>
      <SegmentInner>
        <TopSection>
          <h1>Stay Connected With Our Events & Webinars</h1>
          <EventsContainer>
            <EventItem href={events[0]?.more_info_link ?? '#'}>
              <EventImage>
                <Image src={events[0]?.event_flyer_url} alt="event image" fill />
              </EventImage>
              <EventContent>
                <h1>
                  <StatementTruncate
                    text={events[0]?.event_title}
                    maxLength={27}
                  />
                </h1>
                <p>
                  <StatementTruncate
                    text={events[0]?.snippet}
                    maxLength={isMobile ? 80 : 108}
                  />
                </p>
                <LocationDateCtn>
                  <DateItem>
                    <Image src={ic_calendar} alt="calendar icon" />
                    <p>{events[0]?.event_full_date}</p>
                  </DateItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle cx="2" cy="2" r="2" fill="#F3F3F3" />
                  </svg>
                  <DateItem>
                    <Image src={ic_clock} alt="clock icon" />
                    <p>{events[0]?.event_full_time}</p>
                  </DateItem>
                </LocationDateCtn>
              </EventContent>
            </EventItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="552"
              height="2"
              viewBox="0 0 552 2"
              fill="none"
            >
              <path opacity="0.1" d="M552 1L1.21593e-05 1" stroke="white" />
            </svg>
            <SeeAllEvents href="/events">
              See all events{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="16"
                viewBox="0 0 33 16"
                fill="none"
              >
                <path
                  d="M24.8824 1.17651L31.7059 8.00004M31.7059 8.00004L24.8824 14.8236M31.7059 8.00004H1"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SeeAllEvents>
          </EventsContainer>
        </TopSection>

        <FAQ />
      </SegmentInner>
    </SegmentWrapper>
  );
};

export default SegmentFour;
