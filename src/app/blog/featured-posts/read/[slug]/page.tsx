import { Footer, GoBackBtn, Header } from '@/components';
import { client } from '../../../../../../sanity/lib/client';
import {
  ourBlogPostsQuery,
  singleFeaturedBlogPost,
} from '../../../../../../utils/queries';
import {
  FeaturedPostProps,
  OurBlogsPostProps,
} from '../../../../../../typings';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

// stylings
import {
  PostDetailsWrapper,
  DetailsHeadingSection,
  BlogBannerCtn,
  ArticleSection,
  QuoteSection,
  RecommendationSection,
  RecommendationListCtn,
  RecommendationItem,
} from './styles';

import {
  AuthorDetails,
  AuthorImage,
  AuthorName,
} from '@/components/UI/Blog/BlogCard/styles';
import { RichTextComponents } from '@/components/Common/RichTextComponent';
import Link from 'next/link';

export const revalidate = 0;

export interface ParamsProps {
  params: {
    slug: string;
  };
}

const PostDetails = async ({ params: { slug } }: ParamsProps) => {
  const fetchSingleFeaturedPost = (await client.fetch(
    singleFeaturedBlogPost(slug)
  )) as FeaturedPostProps[];

  const date = new Date(fetchSingleFeaturedPost[0]?.publishedAt);

  const data = fetchSingleFeaturedPost[0];

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  //fetch all blog post
  const blogs = (await client.fetch(
    ourBlogPostsQuery(0, 10)
  )) as OurBlogsPostProps[];

  const filteredBlogs = blogs.filter((blog) => blog.slug.current !== slug);

  return (
    <PostDetailsWrapper>
      <Header />
      <DetailsHeadingSection>
        <GoBackBtn />
        <h1>{data?.blog_title}</h1>
        <AuthorDetails>
          <AuthorImage>
            <Image
              src={data?.author?.author_image_url}
              alt={data?.author?.author_image?.alt}
              fill
            />
          </AuthorImage>
          <AuthorName>
            <h4>{data?.author?.name}</h4>
            <p>
              <span>{formattedDate}</span>
              {' - '}
              <span>{data?.article_duration} read</span>
            </p>
          </AuthorName>
        </AuthorDetails>
        <BlogBannerCtn>
          <Image
            src={data?.mainImage_url}
            alt={data?.mainImage?.alt}
            fill
            priority
            quality={100}
          />
        </BlogBannerCtn>
      </DetailsHeadingSection>
      <ArticleSection>
        <PortableText
          components={RichTextComponents as any}
          value={data?.body}
        />
        <QuoteSection>
          <div>
            <h3>Simon Sinek</h3>
            <p>
              Leadership is not about being in charge. It is about taking care
              of those in your charge.
            </p>
          </div>
        </QuoteSection>
      </ArticleSection>
      <RecommendationSection>
        <h1>You may also like</h1>
        <RecommendationListCtn>
          {filteredBlogs.map((blog, i) => (
            <RecommendationItem key={i}>
              <div>
                <Image
                  src={blog?.mainImage_url}
                  alt={blog?.mainImage?.alt}
                  fill
                  priority
                  quality={100}
                />
              </div>
              <Link href={`/blog/our-blogs/read/${blog?.slug?.current}`}>
                {blog?.blog_title}
              </Link>
            </RecommendationItem>
          ))}
        </RecommendationListCtn>
      </RecommendationSection>
      <Footer />
    </PostDetailsWrapper>
  );
};

export default PostDetails;
