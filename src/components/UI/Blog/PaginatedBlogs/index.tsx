'use client';
import { BlogsWrapper, SeeMoreBtn } from '@/app/blog/styles';
import SkeletonLoader from '@/components/Common/SkeletonLoader';
import { Suspense, useState } from 'react';
import BlogCard from '../BlogCard';
import { OurBlogsPostProps } from '../../../../../typings';
import { client } from '../../../../../sanity/lib/client';
import { ourBlogPostsQuery } from '../../../../../utils/queries';

export const PaginatedBlogs = ({
  initialBlogs,
}: {
  initialBlogs: OurBlogsPostProps[];
}) => {
  const [ourBlogPosts, setOurBlogPosts] =
    useState<OurBlogsPostProps[]>(initialBlogs);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchMorePosts = async () => {
    setLoading(true);
    const nextPage = page + 6;
    const newPosts = (await client.fetch(
      ourBlogPostsQuery(0, nextPage)
    )) as OurBlogsPostProps[];

    // Create a Set to track existing post IDs
    const existingPostIds = new Set(ourBlogPosts.map((post) => post._id));

    // Filter out duplicate posts
    const uniqueNewPosts = newPosts.filter(
      (post) => !existingPostIds.has(post._id)
    );

    if (uniqueNewPosts.length > 0) {
      setOurBlogPosts((prevPosts) => [...prevPosts, ...uniqueNewPosts]);
      setPage(nextPage);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  return (
    <>
      <BlogsWrapper>
        {ourBlogPosts.map((post, i) => (
          <BlogCard key={i} {...post} />
        ))}
      </BlogsWrapper>
      {ourBlogPosts.length > 6 && (
        <>
          {hasMore && !loading && (
            <SeeMore onClick={fetchMorePosts} disabled={loading}>
              {loading ? 'Updating...' : 'See More'}
            </SeeMore>
          )}
        </>
      )}
    </>
  );
};

const SeeMore = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) => {
  return (
    <SeeMoreBtn disabled={disabled} onClick={onClick}>
      {children}
    </SeeMoreBtn>
  );
};
