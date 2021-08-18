import React from 'react';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  title: 'Internal link',
  name: 'internalLinkWithTitle',
  type: 'object',
  description: 'Link to a document on the site',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'internalUID',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'homePage' }],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: 'Internal link',
      };
    },
  },
};