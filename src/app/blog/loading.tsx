'use client';
import { BlogHeroSection, Footer, Header } from '@/components';
import { OurBlogsSection, SeeMoreBtn } from './styles';
import SkeletonLoader from '@/components/Common/SkeletonLoader';
import { usePathname } from 'next/navigation';
import {
  ArticleSection,
  BlogBannerCtn,
  DetailsHeadingSection,
  PostDetailsWrapper,
} from './our-blogs/read/[slug]/styles';
import {
  AuthorDetails,
  AuthorImage,
  AuthorName,
} from '@/components/UI/Blog/BlogCard/styles';
import { useIsMobile } from '../../../utils/useIsMobile';

const Loading = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  return !pathname.includes('read') ? (
    <>
      <section style={{ backgroundColor: '#171717' }}>
        <Header />
        <BlogHeroSection />

        {/* Featured Section */}
        <div
          style={{
            width: '80%',
            margin: '5rem auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            placeItems: 'center',
            gap: '2.25rem',
          }}
        >
          <SkeletonLoader width={isMobile ? '80%' : '50%'} height="21rem" />
        </div>

        {/* Our Blogs Section */}
        <OurBlogsSection>
          <header>
            <h3>Our Blogs</h3>
          </header>
          <div
            style={{
              width: '90%',
              margin: '0 auto 5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '2.25rem',
            }}
          >
            {isMobile ? (
              <SkeletonLoader width="100%" height="21rem" />
            ) : (
              <>
                <SkeletonLoader width="100%" height="21rem" />
                <SkeletonLoader width="100%" height="21rem" />
                <SkeletonLoader width="100%" height="21rem" />
              </>
            )}
          </div>
        </OurBlogsSection>
        <Footer />
      </section>
    </>
  ) : (
    <PostDetailsWrapper>
      <Header />
      <DetailsHeadingSection>
        <h1>
          <SkeletonLoader height="3rem" width="100%" />
        </h1>
        <AuthorDetails>
          <AuthorImage>
            <SkeletonLoader height="100%" width="100%" />
          </AuthorImage>
          <AuthorName>
            <h4>
              <SkeletonLoader height="1rem" width="100%" />
            </h4>
          </AuthorName>
        </AuthorDetails>
        <BlogBannerCtn>
          <SkeletonLoader height="100%" width="100%" />
        </BlogBannerCtn>
      </DetailsHeadingSection>
      <ArticleSection className={pathname.includes('read') ? 'add_styles': ''}>
        <SkeletonLoader height="2rem" width="100%" />
        <SkeletonLoader height="2rem" width="100%" />
        <SkeletonLoader height="2rem" width="100%" />
        <SkeletonLoader height="2rem" width="100%" />
        <SkeletonLoader height="2rem" width="100%" />
        <SkeletonLoader height="2rem" width="100%" />
      </ArticleSection>

      <Footer />
    </PostDetailsWrapper>
  );
};

export default Loading;

const SeeMore = ({ onClick }: { onClick: () => void }) => {
  return <SeeMoreBtn onClick={onClick}>See More</SeeMoreBtn>;
};
