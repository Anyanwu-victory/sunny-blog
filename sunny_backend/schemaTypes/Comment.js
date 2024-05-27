import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'postedBy',
      title: 'PostedBy',
      type: 'reference',
      to: {type: 'user'}
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: {type: 'post'}, // Assuming you have a post schema
    }),
    defineField({
        name: 'comment',
        title: 'Comment',
        type: 'string',
      }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
