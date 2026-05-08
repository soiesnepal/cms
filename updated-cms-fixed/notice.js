export const notice = {
  name: "notice",
  title: "Notice",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Academic", value: "academic" },
          { title: "Administrative", value: "administrative" },
          { title: "Event", value: "event" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Inactive", value: "inactive" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "video",
      title: "Video",
      type: "object",
      fields: [
        {
          name: "url",
          type: "url",
          title: "Youtube Video URL(-link)",
        },
      ],
    },
    {
      name: "pdf",
      title: "PDF Attachment",
      type: "file",
    },
  ],
};
