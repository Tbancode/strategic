import Agenda from '../Agenda';
import Speakers from '../Speakers';
import { Container, ImageCtn } from './styles';
import agenda_bg from '../../../../../public/images/agenda_image.png';
import half_logo from '../../../../../public/images/half_logo.png';
import Image from 'next/image';
import { SpeakersProps } from '../../../../../typings';

const SectionThree = ({ speakers }: { speakers: SpeakersProps[] }) => {
  return (
    <Container>
      <ImageCtn>
        <Image src={agenda_bg} alt="agend bg" />
        <Image src={half_logo} alt="agend bg" />
      </ImageCtn>
      <Speakers speakers={speakers} />
      <Agenda />
    </Container>
  );
};

export default SectionThree;
