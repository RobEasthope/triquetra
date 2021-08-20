import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header as HeaderProps } from 'types/sanity-schema';

import { Header } from './Header';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';

export default {
  title: 'Navigation/Header',
  component: Header,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <Header {...args} preview={false} />
);

// Vanilla
export const Vanilla = Template.bind({}) as Record<string, unknown>;

Vanilla.args = {
  logo: {
    _type: 'image',
    asset: {
      _ref: 'image-4954fadfe0d52dac93b575b16c3f6892f54add7e-512x480-svg',
      _type: 'reference',
    },
  },
  navigation: [
    {
      _key: '7c4bc9de2735',
      _type: 'internalLinkWithTitle',
      title: 'Home',
      to: {
        slug: {
          _type: 'slug',
          current: 'root',
        },
      },
    },
    {
      _key: '10514eca5a00',
      _type: 'internalLinkWithTitle',
      title: 'About',
      to: {
        slug: {
          _type: 'slug',
          current: 'about',
        },
      },
    },
    {
      _key: 'a263b6d3ac5c',
      _type: 'externalLinkWithTitle',
      title: 'External',
      url: 'https://placeholder.com',
    },
  ],
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
