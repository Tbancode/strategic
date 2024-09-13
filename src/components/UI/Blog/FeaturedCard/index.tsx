import Image from 'next/image';
import {
  FeaturedCardCtn,
  FeaturedCardInner,
  MainImageCtn,
  TextCtn,
} from './styles';
import Link from 'next/link';
import { FeaturedPostProps } from '../../../../../typings';

const FeaturedCard = ({
  blog_title,
  mainImage_url,
  slug,
}: FeaturedPostProps) => {
  return (
    <FeaturedCardCtn>
      <FeaturedCardInner>
        <MainImageCtn>
          <Image src={mainImage_url} alt="title" fill />

          <div>Featured</div>
        </MainImageCtn>
        <TextCtn>
          <Link href={`/blog/featured-posts/read/${slug?.current}`}>
            {blog_title}
          </Link>
        </TextCtn>
      </FeaturedCardInner>
    </FeaturedCardCtn>
  );
};

export default FeaturedCard;
