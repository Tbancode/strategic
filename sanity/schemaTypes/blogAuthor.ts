import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'mainBlogAuthor',
  title: 'Author for Main Blog Post',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // }),
    {
      name: 'author_image',
      title: 'Image',
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
    },
    // defineField({
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'author_image',
    },
  },
});
