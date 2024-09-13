'use client';
import Image, { StaticImageData } from 'next/image';
import {
  SpeakersWrapper,
  SpeakersInner,
  SpeakersCtn,
  // BlankCtn,
  AvatarCtn,
  Overlay,
  Title,
  SpeakerCtn,
  SpeakerInner,
  SpeakerDetails,
  SeeMoreBtn,
} from './styles';
// import { speakers } from './constants';
// import blank_avatar from '../../../../../public/svgs/blank_avatar.svg';
import { useState } from 'react';
import { SpeakersProps } from '../../../../../typings';
import { urlForImage } from '../../../../../sanity/lib/image';

const Speakers = ({ speakers }: { speakers: SpeakersProps[] }) => {
  const [seeMore, setSeeMore] = useState(false);
  const sortedSpeeakers = !seeMore ? speakers.slice(0, 12) : speakers;
  return (
    <SpeakersWrapper className={seeMore ? 'shift__down' : ''}>
      <SpeakersInner>
        <Title>Speakers</Title>
        <SpeakersCtn>
          {sortedSpeeakers.map((speaker, i) => (
            <Speaker {...speaker} key={i} seeMore={seeMore} />
          ))}
        </SpeakersCtn>
        {/* {!seeMore && (
          <BlankCtn>
            {Array.from({ length: 4 }).map((_, i) => (
              <Image src={blank_avatar} alt="blank" key={i} />
            ))}
          </BlankCtn>
        )} */}

        <SeeMoreBtn
          className={seeMore ? 'shift__down' : ''}
          onClick={() => setSeeMore(!seeMore)}
          type="button"
        >
          {seeMore ? 'See Less' : 'See More'}
        </SeeMoreBtn>
        {!seeMore && <Overlay></Overlay>}
      </SpeakersInner>
    </SpeakersWrapper>
  );
};

export default Speakers;

interface SpeakerProp extends SpeakersProps {
  seeMore: boolean;
}

const Speaker = ({
  speaker_image: { alt },
  speaker_name,
  avatar_url,
  seeMore,
}: SpeakerProp) => {
  return (
    <SpeakerCtn className={seeMore ? 'active' : ''}>
      <SpeakerInner>
        <AvatarCtn>
          <Image
            src={avatar_url}
            alt={alt}
            // placeholder="blur"
            fill
          />
        </AvatarCtn>
        <SpeakerDetails>
          <h2>{speaker_name}</h2>
          <p>Change-agent</p>
        </SpeakerDetails>
      </SpeakerInner>
    </SpeakerCtn>
  );
};
