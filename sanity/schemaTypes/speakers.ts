import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'speakers',
  title: 'Speakers',
  type: 'document',
  fields: [
    defineField({
      name: 'speaker_name',
      title: "Speaker's name",
      type: 'string',
    }),
    defineField({
      name: 'speaker_image',
      title: 'Image of the Speaker',
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
    }),
  ],

  preview: {
    select: {
      title: 'speaker_name',
      media: 'speaker_image',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
