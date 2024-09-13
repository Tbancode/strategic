"use client";
import {
  SectionWrapper,
  SectionHeader,
  Dates,
  SectionContent,
  Event,
} from './styles';
import { Dispatch, SetStateAction } from 'react';
import { eventsTwo } from './constants';

export const AgendaSectionTwo = ({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<number>>;
}) => (
  <SectionWrapper>
    <SectionHeader>
      <Dates onClick={() => setSection(0)}>
        <p>Day 2 - Sunday, March 17th, 2024</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="10"
          viewBox="0 0 22 10"
          fill="none"
        >
          <path
            d="M5.83333 1.66663L1.5 4.99996M1.5 4.99996L5.83333 8.33329M1.5 4.99996H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Dates>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="670"
        height="2"
        viewBox="0 0 670 2"
        fill="none"
      >
        <path
          d="M670 1L-1.90735e-06 0.999971"
          stroke="url(#paint0_radial_506_648)"
          strokeWidth="2"
        />
        <defs>
          <radialGradient
            id="paint0_radial_506_648"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(468 1.49997) rotate(180) scale(645.5 77.4136)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#0008C1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </SectionHeader>
    <SectionContent>
      {eventsTwo.map((event, i) => (
        <Event key={i}>
          <h3>{event.event_title}</h3>
          <p>
            <span>{event.duration}</span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <path
                d="M2.76 5.73002C1.26 5.73002 0 4.49002 0 3.01002C0 1.53002 1.24 0.27002 2.76 0.27002C4.24 0.27002 5.48 1.53002 5.48 3.01002C5.48 4.47002 4.24 5.73002 2.76 5.73002Z"
                fill="#D9D9D9"
              />
            </svg> */}
            {/* <span>{event.panelist}</span> */}
          </p>
        </Event>
      ))}
    </SectionContent>
  </SectionWrapper>
);
