import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },

    }),
    defineField({
        name: 'body',
        title: 'Comment',
        type: 'blockContent',
      }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
