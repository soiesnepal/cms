import { defineType, defineField } from "sanity";

export const alumni = defineType({
  name: "alumni",
  title: "Alumni",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "Batch",
      title: "Batch",
      type: "number",
      validation: (Rule) => Rule.required().min(2020).max(new Date().getFullYear() + 57),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "currentPosition",
      title: "Current Position",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});

// Batch-wise bulk import document — create one per batch, add all alumni at once
export const alumniBatch = defineType({
  name: "alumniBatch",
  title: "Alumni Batch Import",
  type: "document",
  description: "Bulk import alumni by pasting names.",
  fields: [
    defineField({
      name: "batchYear",
      title: "Batch Year (e.g. 2062)",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "namesList",
      title: "Alumni Names List",
      description: "Paste all alumni names here, separated by commas or new lines. Example: Ram Thapa, Shyam Nepal",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "batchYear" },
    prepare({ title }) {
      return { title: `Batch ${title}` };
    },
  },
});
