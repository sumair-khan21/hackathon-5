import { Rule } from '@sanity/types'; // Import the Rule type

export default {
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(), // Use Rule type here
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0), // Use Rule type here
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0), // Use Rule type here
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Appetizer', value: 'appetizer' },
          { title: 'Main Course', value: 'mainCourse' },
          { title: 'Dessert', value: 'dessert' },
          { title: 'Beverage', value: 'beverage' },
        ],
      },
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'chef',
      title: 'Chef',
      type: 'reference',
      to: [{ type: 'chef' }],
    },
    {
      name: 'isAvailable',
      title: 'Is Available',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
