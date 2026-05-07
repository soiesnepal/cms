import { defineType, defineField } from "sanity";

export const generalMembers = defineType({
  name: "generalMembers",
  title: "General Members",
  type: "document",
  description: "Batch-wise list of general members with roll numbers.",
  fields: [
    defineField({
      name: "batch",
      title: "Batch (e.g. 079)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "membersList",
      title: "Members List",
      description: "Paste all members here. Format: Name - RollNumber (e.g. Aayush Poudel - 6, Abhiyan - 7). Separated by commas or new lines.",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "batch" },
    prepare({ title }) {
      return { title: `Batch ${title}` };
    },
  },
});
