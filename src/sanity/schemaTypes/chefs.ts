// schemas/chef.js
export default {
  name: "chef",
  title: "Chef",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
    {
      name: "specialty",
      title: "Specialty",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "experience",
      title: "Experience",
      type: "number",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "available",
      title: "Available",
      type: "boolean",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name", // Automatically generate slug from the chef's name
        maxLength: 96,
      },
    },
  ],
};
