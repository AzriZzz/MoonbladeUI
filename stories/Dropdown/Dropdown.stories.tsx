import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, SwitchColorProps } from '../../src';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    colorToken: {
      options: [
        'moonpurple',
        'moongray', 
        'moonred', 
        'moonyellow', 
        'moongreen', 
        'moonblue', 
        'moonindigo', 
        'moonpink',
      ],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
  }
};

export default meta;

const Template: Story<SwitchColorProps> = (args) => {
  return <Dropdown {...args} />;
}

export const MoonPurple = Template.bind({});
MoonPurple.args = {
  colorToken: "moonpurple",
};

export const MoonGray = Template.bind({});
MoonGray.args = {
  colorToken: "moongray",
};

export const MoonRed = Template.bind({});
MoonRed.args = {
  colorToken: "moonred",
};

export const MoonYellow = Template.bind({});
MoonYellow.args = {
  colorToken: "moonyellow",
};

export const MoonGreen = Template.bind({});
MoonGreen.args = {
  colorToken: "moongreen",
};

export const MoonBlue = Template.bind({});
MoonBlue.args = {
  colorToken: "moonblue",
};

export const MoonIndigo = Template.bind({});
MoonIndigo.args = {
  colorToken: "moonindigo",
};

export const MoonPink = Template.bind({});
MoonPink.args = {
  colorToken: "moonpink",
};


