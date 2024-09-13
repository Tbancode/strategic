import { BlogHeroSection, FeaturedCard, Footer, Header } from '@/components';
import {
  OurBlogsSection,
  NoBlogPosts,
  JoinLinkedInSection,
  JoinLinkedInInner,
} from './styles';
import { client } from '../../../sanity/lib/client';
import { featuredPostsQuery, ourBlogPostsQuery } from '../../../utils/queries';
import { FeaturedPostProps, OurBlogsPostProps } from '../../../typings';
import { Suspense } from 'react';
import SkeletonLoader from '@/components/Common/SkeletonLoader';
import { PaginatedBlogs } from '@/components/UI/Blog/PaginatedBlogs';
import Link from 'next/link';

export const revalidate = 0;

const BlogPage = async () => {
  const featuredPosts = (await client.fetch(
    featuredPostsQuery
  )) as FeaturedPostProps[];
  const initialBlogs = (await client.fetch(
    ourBlogPostsQuery(0, 6)
  )) as OurBlogsPostProps[];

  return (
    <section style={{ backgroundColor: '#171717' }}>
      <Header />

      <BlogHeroSection />
      {/* Featured Section */}
      {featuredPosts.length === 0 ? null : (
        // <NoBlogPosts style={{ margin: '5rem auto', textAlign: 'center' }}>
        //   No featured posts.
        // </NoBlogPosts>
        <Suspense fallback={<SkeletonLoader width="21rem" height="21rem" />}>
          <FeaturedCard {...featuredPosts[0]} />
        </Suspense>
      )}

      {/* Our Blogs Section */}
      <OurBlogsSection>
        <header>
          <h3>Our Blogs</h3>
        </header>
        {initialBlogs.length === 0 ? (
          <NoBlogPosts>No blog posts.</NoBlogPosts>
        ) : (
          <PaginatedBlogs initialBlogs={initialBlogs} />
        )}
      </OurBlogsSection>
      <JoinLinkedInSection>
        <JoinLinkedInInner>
          <div>
            <h1>Join Our Exclusive Linkedin Community</h1>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSerlqk6-W9iLsIrReAZMi2gQKk5c9GUhN9OQfVCWAcRHyxsUA/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              Become a member
            </Link>
          </div>
          <p>
            Ready to join our dynamic community? Apply now and become a member
            of Strategic Solutions Global, where LeadHERs across Africa & The
            Diaspora empower each other, while gaining the strategic tools for
            global influence and impact.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSerlqk6-W9iLsIrReAZMi2gQKk5c9GUhN9OQfVCWAcRHyxsUA/viewform"
            target="_blank"
            rel="noreferrer noopener"
          >
            Become a member
          </Link>
        </JoinLinkedInInner>
      </JoinLinkedInSection>
      <Footer />
    </section>
  );
};

export default BlogPage;
