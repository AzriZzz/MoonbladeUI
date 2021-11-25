import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputStateProps } from '../../../src';

const meta: Meta = {
  title: 'Components/Atomos/Input',
  component: Input,
  argTypes: { onChange: { action: 'typing' } },
};

export default meta;

const handleChange = (e) => {
  console.log(e);
}

const Template: Story<InputStateProps> = (args) => <Input onChange={(e) => {handleChange(e)}} {...args}/>;

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