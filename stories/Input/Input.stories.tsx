import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputStateProps } from '../../src';

const meta: Meta = {
  title: 'Components/Input Field',
  component: Input
};

export default meta;

const Template: Story<InputStateProps> = (args) => <Input {...args}/>;

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  state: 'Success'
}

export const Warning = Template.bind({});
Warning.args = {
  state: 'Warning'
}

export const Error = Template.bind({});
Error.args = {
  state: 'Error'
}