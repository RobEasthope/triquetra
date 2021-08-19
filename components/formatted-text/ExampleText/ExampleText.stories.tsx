import React from 'react';
import faker from 'faker';
import { Meta, Story } from '@storybook/react';
import { capitalizeFirstLetter } from '.storybook/utils/capitalizeFirstLetter';

import { ExampleText, ExampleTextProps } from './ExampleText';
import { CenterComponent } from '.storybook/preview-ui/CenterComponent';

export default {
  title: 'Formatted text/Example',
  component: ExampleText,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: Story<ExampleTextProps> = (args) => (
  <ExampleText {...args} preview={false} />
);

// Primary
export const Primary = Template.bind({}) as Record<string, unknown>;

Primary.args = {
  blocks: {},
};

// No data
export const NoData = Template.bind({}) as Record<string, unknown>;
NoData.args = {};
