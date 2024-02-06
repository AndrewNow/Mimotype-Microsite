export default {
  name: 'strategy',
  title: 'Strategy (Blog Post)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.max(80).warning('The description shouldn\'t be longer than 80 characters - Keep it brief if you can!'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Thumbnail image',
      description: "This will appear on the article preview page. Horizontal images are preferable. Try to keep a minimum resolution of ~1100h x 600w. Try not to upload huge images either (i.e.: < 3-4mb)",
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
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
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
