import Image from 'next/image';
import {
  BlogCardCtn,
  BlogImageCtn,
  BlogInfoCtn,
  AuthorDetails,
  AuthorImage,
  AuthorName,
  ReadMoreBtn,
} from './styles';
import blog_img from '../../../../../public/images/blog_img.png';
import arrow_forward from '../../../../../public/svgs/ic_arrow_forward.svg';
import { OurBlogsPostProps } from '../../../../../typings';

const BlogCard = ({
  mainImage_url,
  blog_title,
  blog_author,
  publishedAt,
  article_duration,
  mainImage,
  slug,
}: OurBlogsPostProps) => {
  const date = new Date(publishedAt);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  return (
    <BlogCardCtn>
      <BlogImageCtn>
        <Image src={mainImage_url} alt={mainImage?.alt} fill quality={100} />
      </BlogImageCtn>
      <h1>{blog_title}</h1>
      <BlogInfoCtn>
        <AuthorDetails>
          <AuthorImage>
            <Image
              src={blog_author?.author_image_url}
              alt={blog_author?.author_image?.alt}
              fill
            />
          </AuthorImage>
          <AuthorName>
            <h4>{blog_author?.name}</h4>
            <p>
              <span>{formattedDate}</span>
              {' - '}
              <span>{article_duration} read</span>
            </p>
          </AuthorName>
        </AuthorDetails>
        <ReadMoreBtn href={`/blog/our-blogs/read/${slug?.current}`}>
          Read More <Image src={arrow_forward} alt="arrow forward" />
        </ReadMoreBtn>
      </BlogInfoCtn>
    </BlogCardCtn>
  );
};

export default BlogCard;
