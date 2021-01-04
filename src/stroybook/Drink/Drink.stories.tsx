import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Drink, DrinkProps } from '@commons/Drink';

const drinks = [
  'coca-cola',
  'dr-pepper',
  'fanta',
  'lets-be',
  'sprite',
  'tejava',
  'water',
  'welchs',
];

export default {
  title: 'Drink/drink',
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
