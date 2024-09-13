import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featured_posts',
  title: 'Featured Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'blog_title',
      title: 'Title of the Blog post',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'blog_title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'featuredPostsAuthor' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image for the Blog post',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'category' } }],
    // }),
    {
      name: 'article_duration',
      title: 'Duration of reading for article',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'blog_title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
