import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../../src';

const meta: Meta = {
  title: 'Components/Input Field',
  component: Input,
};

export default meta;

const Template: Story = () => <Input/>;

export const Default = Template.bind({});
// Default.args = {
//   enabled: false,
// };
