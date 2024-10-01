/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        // {title: 'H1', value: 'h1'},
        // {title: 'H2', value: 'h2'},
<<<<<<< HEAD
        {title: 'Heading - H3', value: 'h3'},
        {title: 'Subheading - H4', value: 'h4'},
        {title: 'Paragraph text - Normal', value: 'normal'},
        {title: 'Quote', value: 'blockquote'},
=======
        { title: "Heading - H3", value: "h3" },
        { title: "Subheading - H4", value: "h4" },
        { title: "Paragraph text - Normal", value: "normal" },
        { title: "Quote", value: "blockquote" },
>>>>>>> aa6c5284271eff9877e0cc2e658a54a628329eb3
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // {
    //   title: 'image',
    //   name: 'image',
<<<<<<< HEAD
    //   type: 'array', 
=======
    //   type: 'array',
>>>>>>> aa6c5284271eff9877e0cc2e658a54a628329eb3
    //   fields: [
    //     {
    //       type: 'image',
    //     },
    //     {
    //       title: "Alt text",
    //       name: "alt",
    //       description: "Alternate text for SEO/accessibility purposes. Describe the image here.",
    //       type: "string"
    //     },
    //     {
    //       title: "imgSubtitle",
    //       name: "Image subtitle",
    //       description: "Subtitle for the image",
    //       type: "string"
    //     }
    //   ]
    // },
    {
      type: "image",
      options: { hotspot: true },
    },
    {
      type: "code",
    },
  ],
};
