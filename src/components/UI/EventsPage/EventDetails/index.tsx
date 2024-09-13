'use client';
import {
  DetailsWrapper,
  Indicator,
  Number,
  EventsContainer,
  EventItem,
  EventInner,
  EventImage,
  EventContent,
  LocationDateCtn,
  DateItem,
  TicketCtn,
  MobileButtons,
} from './styles';
import Image from 'next/image';
import { StatementTruncate } from '@/components';
import ic_calendar from '../../../../../public/svgs/ic_calendar.svg';
import ic_clock from '../../../../../public/svgs/ic_clock.svg';
import Link from 'next/link';
import { Option } from '../../../../../typings';
import { useIsMobile } from '../../../../../utils/useIsMobile';
import { NoResult } from '../MainContent/styles';

const EventDetails = ({
  month,
  data,
  hideIndicator,
}: {
  month?: Option;
  data: any[];
  hideIndicator: boolean;
}) => {
  const isMobile = useIsMobile();

  return (
    <DetailsWrapper>
      {!hideIndicator && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1170"
            height="2"
            viewBox="0 0 1170 2"
            fill="none"
          >
            <path opacity="0.1" d="M1170 1L1.43051e-05 1" stroke="white" />
          </svg>
          <Indicator>
            <h2>{(month as any).value}</h2>
            <Number>{data.length}</Number>
          </Indicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1170"
            height="2"
            viewBox="0 0 1170 2"
            fill="none"
          >
            <path opacity="0.1" d="M1170 1L1.43051e-05 1" stroke="white" />
          </svg>
        </>
      )}
      <EventsContainer>
        {data.length !== 0 ? (
          data.map((d, i) => (
            <EventItem key={i}>
              <EventInner>
                <EventImage>
                  <Image src={d.event_flyer_url} alt="event image" fill />
                </EventImage>
                <EventContent>
                  <h1>
                    <StatementTruncate text={d.event_title} maxLength={400} />
                  </h1>
                  <p>
                    <StatementTruncate
                      text={d.snippet}
                      maxLength={!isMobile ? 240 : 80}
                    />
                  </p>
                  <LocationDateCtn>
                    <DateItem>
                      <Image src={ic_calendar} alt="calendar icon" />
                      <p>{d.event_full_date}</p>
                    </DateItem>

                    {d.event_full_time && (
                      <>
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
                          <p>{d.event_full_time}</p>
                        </DateItem>
                      </>
                    )}
                  </LocationDateCtn>
                  <TicketCtn>
                    <Link href={d.register_url}>
                      {d.event_button_title ?? 'Join the movement'}{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M7.16797 4.00008H4.5013C4.14768 4.00008 3.80854 4.14056 3.55849 4.39061C3.30844 4.64065 3.16797 4.97979 3.16797 5.33341V12.0001C3.16797 12.3537 3.30844 12.6928 3.55849 12.9429C3.80854 13.1929 4.14768 13.3334 4.5013 13.3334H11.168C11.5216 13.3334 11.8607 13.1929 12.1108 12.9429C12.3608 12.6928 12.5013 12.3537 12.5013 12.0001V9.33341M9.83464 2.66675H13.8346M13.8346 2.66675V6.66675M13.8346 2.66675L7.16797 9.33341"
                          stroke="white"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    {d.more_info_link && (
                      <Link href={d.more_info_link}>More Info</Link>
                    )}
                  </TicketCtn>
                </EventContent>
              </EventInner>
              <MobileButtons>
                <Link href={d.register_url}>
                  {d.event_button_title ?? 'Join the movement'}{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M7.16797 4.00008H4.5013C4.14768 4.00008 3.80854 4.14056 3.55849 4.39061C3.30844 4.64065 3.16797 4.97979 3.16797 5.33341V12.0001C3.16797 12.3537 3.30844 12.6928 3.55849 12.9429C3.80854 13.1929 4.14768 13.3334 4.5013 13.3334H11.168C11.5216 13.3334 11.8607 13.1929 12.1108 12.9429C12.3608 12.6928 12.5013 12.3537 12.5013 12.0001V9.33341M9.83464 2.66675H13.8346M13.8346 2.66675V6.66675M13.8346 2.66675L7.16797 9.33341"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                {d.more_info_link && (
                  <Link href={d.more_info_link}>More Info</Link>
                )}
              </MobileButtons>
            </EventItem>
          ))
        ) : (
          <NoResult>No events in {month?.label}</NoResult>
        )}
      </EventsContainer>
    </DetailsWrapper>
  );
};

export default EventDetails;
