'use client';
import Image from 'next/image';
import { Wrapper, Inner, FlexItem, TextCtn, ItemImageCtn } from './styles';
import leader_img_1 from '../../../../../public/images/leader_img_1.png';
import mobile_leader_img_1 from '../../../../../public/images/mobile_leader_img_1.png';
import leader_img_2 from '../../../../../public/images/leader_img_2.png';
import leader_img_3 from '../../../../../public/images/leader_img_3.png';
import { useIsMobile } from '../../../../../utils/useIsMobile';

const SectionTwo = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <FlexItem>
          <TextCtn>
            <h2>Crafted for High-Impact women leaders</h2>
            <p>
              Strategic Solutions Global provides a dynamic platform to connect,
              collaborate, and elevate your leadership journey.
            </p>
          </TextCtn>
          <ItemImageCtn>
            <div>
              <Image
                src={isMobile ? mobile_leader_img_1 : leader_img_1}
                alt="coporate photo"
                quality={100}
                placeholder="blur"
              />
            </div>
            <div>
              <Image
                src={leader_img_2}
                alt="coporate photo"
                placeholder="blur"
                quality={100}
              />
            </div>
          </ItemImageCtn>
        </FlexItem>
        <FlexItem>
          <ItemImageCtn>
            <Image
              src={leader_img_3}
              alt="coporate photo"
              placeholder="blur"
              quality={100}
            />
          </ItemImageCtn>

          <TextCtn>
            <h2>Build Your Global Rolodex</h2>
            <p>
              Forge a personal board of advisors, access exclusive one-one
              executive coaching, collaborate with influential peers and engage
              in transformative programming.
            </p>
          </TextCtn>
        </FlexItem>
      </Inner>
    </Wrapper>
  );
};

export default SectionTwo;
