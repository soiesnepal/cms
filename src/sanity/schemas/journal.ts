import { defineType, defineField } from "sanity";

export const journal = defineType({
  name: "journal",
  title: "Student Papers",
  type: "document",
  description: "Best research papers selected by teachers in Group work and presentations.",
  fields: [
    defineField({
      name: "title",
      title: "Paper Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description / Abstract",
      type: "text",
    }),
    defineField({
      name: "volume",
      title: "Volume (Optional)",
      type: "number",
    }),
    defineField({
      name: "issueNumber",
      title: "Batch / Group Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publicationDate",
      title: "Publication Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "resources",
      title: "PDF File",
      type: "file",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover",
      title: "Cover Image",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
