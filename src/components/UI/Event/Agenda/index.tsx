'use client';
import {
  AgendaWrapper,
  AgendaInner,
  EventCtn,
  AgendaGradient,
} from './styles';
// import agenda_gradient from '../../../../../public/images/agenda_gradient.png';
// import Image from 'next/image';
import { useState } from 'react';
import { AgendaSectionOne } from './AgendaSectionOne';
import { AgendaSectionTwo } from './AgendaSectionTwo';


const Agenda = () => {
  const [section, setSection] = useState(0);
  return (
    <AgendaWrapper>
      <AgendaInner>
        <EventCtn>
          <h2>Agenda</h2>
          {section === 0 ? (
            <AgendaSectionOne setSection={setSection} />
          ) : (
            <AgendaSectionTwo setSection={setSection} />
          )}

          <AgendaGradient />
        </EventCtn>
      </AgendaInner>
    </AgendaWrapper>
  );
};

export default Agenda;


