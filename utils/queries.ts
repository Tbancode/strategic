export const speakersQuery = `*[_type== 'speakers'] {
  ...,
  "avatar_url": speaker_image.asset-> url,
} | order(_createdAt asc)`;

export const eventsQuery = `*[_type=='events']{
  ...,
  "event_flyer_url": event_flyer.asset->url 
} | order(publishedAt asc)`;

export const featuredPostsQuery = `*[_type=="featured_posts"] {
  ...,
  "mainImage_url": mainImage.asset->url,
    author->{
      ...,
      "author_image_url": author_image.asset->url
    }
} | order(_createdAt asc)`;

export const ourBlogPostsQuery = (start = 0, limit = 6) => `*[_type=="blog_posts"] {
  ...,
  "mainImage_url": mainImage.asset->url,
    blog_author->{
      ...,
      "author_image_url": author_image.asset->url
    }
} | order(publishedAt desc) [${start}...${start + limit}]`;

export const singleFeaturedBlogPost = (slug: string) => {
  return `
*[_type=="featured_posts" && slug.current == '${slug}'] {
  ...,
  "mainImage_url": mainImage.asset->url,
    author->{
      ...,
      "author_image_url": author_image.asset->url
    }
}
    `;
};

export const singleOurBlogPost = (slug: string) => {
  return `
*[_type=="blog_posts" && slug.current == '${slug}'] {
  ...,
  "mainImage_url": mainImage.asset->url,
    blog_author->{
      ...,
      "author_image_url": author_image.asset->url
    }
}
    `;
};
