export interface SpeakersProps {
  speaker_image: {
    alt: string;
  };
  _id: string;
  speaker_name: string;
  avatar_url: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface EventsProps {
  event_flyer: {
    alt: string;
  };
  _id: string;
  event_full_date: string;
  snippet: string;
  event_full_time: string;
  event_title: string;
  event_month: string;
  register_url: string;
  more_info_link: string;
  event_flyer_url: string;
  event_location: string;
}

interface FeaturedPostProps {
  _id: string;
  mainImage_url: string;
  mainImage: {
    alt: string;
  };
  body: any[];
  author: {
    author_image_url: string;
    name: string;
    author_image: {
      alt: string;
    };
  };
  blog_title: string;
  publishedAt: string;
  article_duration: string;
  slug: {
    current: string;
  };
}

interface OurBlogsPostProps {
  _id: string;
  mainImage_url: string;
  mainImage: {
    alt: string;
    attribution_url: string;
    attribution: string;
  };
  body: any[];
  blog_author: {
    author_image_url: string;
    name: string;
    author_image: {
      alt: string;
    };
  };
  blog_title: string;
  publishedAt: string;
  article_duration: string;
  slug: {
    current: string;
  };
}
