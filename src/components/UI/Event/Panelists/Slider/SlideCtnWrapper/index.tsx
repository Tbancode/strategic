'use client';
import { PanelistInfo, SlideCtn } from '../styles';
import { CldImage } from 'next-cloudinary';

type SlideCtnProps = {
  src: string;
  name: string;
  flex: string;
  isStretched?: boolean;
};

const SlideCtnWrapper = ({ src, name, flex, isStretched }: SlideCtnProps) => {
  return (
    <SlideCtn
      style={{
        width: isStretched ? '325px' : '',
      }}
    >
      <CldImage
        width="960"
        height="600"
        src={src}
        sizes="100vw"
        alt="Description of my image"
        quality={100}
        priority
      />
      <PanelistInfo>
        <h2>{name}</h2>
        <p>{flex}</p>
      </PanelistInfo>
    </SlideCtn>
  );
};

export default SlideCtnWrapper;
