import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog_posts',
  title: 'Blog Posts',
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
      name: 'blog_author',
      title: 'Author Details',
      type: 'reference',
      to: [{ type: 'mainBlogAuthor' }],
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
        {
          name: 'attribution',
          type: 'string',
          title: 'Image Attribution',
        },
        {
          name: 'attribution_url',
          type: 'url',
          title: 'Image Attribution URL',
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
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'blog_title',
      author: 'blog_author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
