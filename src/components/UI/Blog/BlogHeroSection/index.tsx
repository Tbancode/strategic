'use client';

import Image from 'next/image';
import hero_image from '../../../../../public/images/blog_hero.png';
import blog_bg_mobile from '../../../../../public/images/blog_bg_mobile.png';
import { BlogHeroInner, BlogHeroWrapper } from './styles';
import { useIsMobile } from '../../../../../utils/useIsMobile';

const BlogHeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <BlogHeroWrapper>
      <Image
        src={isMobile ? blog_bg_mobile : hero_image}
        alt="hero image"
        fill
        priority
        placeholder="blur"
      />
      <BlogHeroInner>
        <h1>Empowering Women, One Story at a Time</h1>
        <p>
          Explore insights, experiences, and success stories from women leaders
          across Africa and the diaspora.
        </p>
      </BlogHeroInner>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
      >
        <path
          d="M1 1L11 11L21 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BlogHeroWrapper>
  );
};

export default BlogHeroSection;
