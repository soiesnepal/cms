import { defineType, defineField } from "sanity";

export const interns = defineType({
  name: "interns",
  title: "Interns",
  type: "document",
  description: "Bulk import interns by pasting a list of names.",
  fields: [
    defineField({
      name: "batchTitle",
      title: "Batch/Committee Title (e.g. 18th Executive Committee)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "internsList",
      title: "Interns Names",
      type: "text",
      description: "Paste intern names here separated by newlines.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "batchTitle" },
    prepare({ title }) {
      return { title: `Interns - ${title}` };
    },
  },
});
