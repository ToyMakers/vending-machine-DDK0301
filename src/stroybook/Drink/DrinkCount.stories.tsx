import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DrinkCount, DrinkCountProps } from '@layouts/DrinkLayout/DrinkCount';

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
  title: 'Drink/DrinkCount',
  component: DrinkCount,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [...drinks],
      },
    },
    count: {
      control: { type: 'range', min: 0, max: 20 },
      defaultValue: 1,
    },
  },
} as Meta;

const Template: Story<DrinkCountProps> = arg => (
  <div className="drinkcount_story">
    <DrinkCount {...arg} />
  </div>
);

export const item = Template.bind({});

export const items = (arg: DrinkCountProps) => {
  return (
    <div className="drinkcount_story">
      {drinks.map(drink => (
        <DrinkCount {...arg} key={drink} name={drink} />
      ))}
    </div>
  );
};
items.argTypes = {
  name: { table: { disable: true } },
  // count: { table: { disable: true } },
};
