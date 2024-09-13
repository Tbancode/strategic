"use client";
import { useRef } from 'react';
import Image from 'next/image';
import Slider from './Slider';
import { PanelistsWrapper, PanelistsInner, Heading } from './styles';
import panelist_line from '../../../../../public/images/panelist_line.png';

const Panelists = ({
  title,
  panelists,
}: {
  title: string;
  panelists: any[];
  }) => {
    const triggerRef = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLDivElement>;
  return (
    <PanelistsWrapper ref={triggerRef}>
      <PanelistsInner>
        <Heading>
          <h2>{title}</h2>
          <Image src={panelist_line} alt="line" />
        </Heading>
        <Slider panelists={panelists} triggerRef={triggerRef} />
      </PanelistsInner>
    </PanelistsWrapper>
  );
};

export default Panelists;
