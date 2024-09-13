import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'event_title',
      title: 'Title of The event',
      type: 'string',
    },
    {
      name: 'snippet',
      title: 'Brief Introduction on the event',
      type: 'text',
    },
    {
      name: 'event_flyer',
      title: 'Flyer for the Event',
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
    {
      name: 'event_full_date',
      title: 'Full date for the event',
      description:
        'Full date for the event, for example: February 12th - 14th, 2021 and so on',
      type: 'string',
    },
    {
      name: 'event_full_time',
      title: 'Full time for the event',
      description:
        'Full time for the event, for example: 11:00 - 12:00 GMT and so on',
      type: 'string',
    },
    {
      name: 'event_month',
      title: 'Month of Event',
      description:
        'Month in which the event is taking place e.g, March, June, etc',
      type: 'string',
    },
    {
      name: 'event_location',
      title: 'Location for the event',
      description:
        'location for the event, e.g United State, UAE, Nigeria, etc',
      type: 'string',
    },
    {
      name: 'register_url',
      title: 'Link to register for the event',
      type: 'url',
    },
    {
      name: 'more_info_link',
      title: 'Link to get more information on event',
      type: 'url',
    },
    {
      name: 'event_button_title',
      title: 'Event button title',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'event_title',
      media: 'event_flyer',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
