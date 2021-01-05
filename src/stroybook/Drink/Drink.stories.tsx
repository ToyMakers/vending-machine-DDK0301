import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Drink, DrinkProps } from '@commons/Drink';

import drinks from './drinks.json';

export default {
  title: 'Drink/Drink',
  component: Drink,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [...drinks],
      },
    },
  },
} as Meta;

const Template: Story<DrinkProps> = arg => (
  <div className="drink_story">
    <Drink {...arg} />
  </div>
);

export const item = Template.bind({});

export const items = () => {
  return (
    <div className="drink_story">
      {drinks.map(name => (
        <Drink key={name} name={name} />
      ))}
    </div>
  );
};
items.argTypes = {
  name: { table: { disable: true } },
};
