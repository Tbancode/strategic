'use client';

import React, { useState } from 'react';
import FilterComp from '../FilterComp';
import {
  FilterSection,
  MainEventContent,
  EventLists,
  SelectedOptions,
  SelectedOptionItem,
  CloseButton,
  NoResult,
} from './styles';
import {
  generateCountryOptions,
  generateEventsByMonths,
  monthArray,
} from './constants';
import EventDetails from '../EventDetails';
import { EventsProps, Option } from '../../../../../typings';

import { useIsMobile } from '../../../../../utils/useIsMobile';

const MainContent = ({ events }: { events: EventsProps[] }) => {
  const isMobile = useIsMobile();
  const [selectedMonths, setSelectedMonths] = useState<Option[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Option[]>([]);

  const combinedOptions: Option[] = [...selectedMonths];
  const combinedEvents = generateEventsByMonths(events, combinedOptions);

  const handleRemoveOption = (option: Option) => {
    const isMonthOption = selectedMonths.some(
      (month) => month.value === option.value
    );

    if (isMonthOption) {
      const updatedMonths = selectedMonths.filter(
        (month) => month.value !== option.value
      );
      setSelectedMonths(updatedMonths);
    } else {
      const updatedCountries = selectedCountries.filter(
        (country) => country.value !== option.value
      );
      setSelectedCountries(updatedCountries);
    }
  };

  return (
    <MainEventContent>
      <FilterSection>
        <FilterComp
          title="Month"
          options={monthArray[0].months}
          selectedOptions={selectedMonths}
          setSelectedOptions={setSelectedMonths}
        />
        {/* <FilterComp
          title="Country"
          options={generateCountryOptions()}
          selectedOptions={selectedCountries}
          setSelectedOptions={setSelectedCountries}
        /> */}
      </FilterSection>
      {combinedOptions.length > 0 && (
        <SelectedOptions>
          {combinedOptions.map((option) => (
            <SelectedOptionItem key={option.label}>
              {option.label}
              <CloseButton onClick={() => handleRemoveOption(option)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M1 1L11 11M11 1L1 11"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CloseButton>
            </SelectedOptionItem>
          ))}
        </SelectedOptions>
      )}
      {combinedOptions.length < 1 ? (
        <EventLists>
          <EventDetails hideIndicator={true} data={events} />
        </EventLists>
      ) : (
        <EventLists>
          {combinedOptions.map((option, i) => {
            const correspondingEvents = combinedEvents.find(
              (event) => event.month.value === option.value
            );
            return (
              <React.Fragment key={i}>
                {correspondingEvents ? (
                  <EventDetails
                    month={correspondingEvents.month}
                    data={correspondingEvents.data}
                    hideIndicator={false}
                  />
                ) : (
                  <NoResult>No events in {option.label}</NoResult>
                )}
              </React.Fragment>
            );
          })}
        </EventLists>
      )}
    </MainEventContent>
  );
};

export default MainContent;
