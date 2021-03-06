import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DrinkBuy, DrinkBuyProps } from '@layouts/DrinkLayout/DrinkBuy';

import drinks from './drinks.json';

export default {
  title: 'Drink/DrinkBuy',
  component: DrinkBuy,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [...drinks],
      },
    },
    price: {
      control: {
        type: 'number',
      },
    },
    onBuy: { defaultValue: null, table: { disable: true } },
  },
} as Meta;

const Template: Story<DrinkBuyProps> = arg => (
  <div className="item_story">
    <DrinkBuy {...arg} />
  </div>
);

export const item = Template.bind({});

export const items = (arg: DrinkBuyProps) => {
  return (
    <div className="item_story">
      {drinks.map(drink => (
        <DrinkBuy {...arg} key={drink} name={drink} />
      ))}
    </div>
  );
};
items.argTypes = {
  name: { table: { disable: true } },
};

export const itemsIsSale = (arg: DrinkBuyProps) => {
  return (
    <div className="item_story">
      {drinks.map(drink => (
        <DrinkBuy {...arg} key={drink} name={drink} />
      ))}
    </div>
  );
};
itemsIsSale.argTypes = {
  name: { table: { disable: true } },
  isSale: { table: { disable: true } },
  isStock: { table: { disable: true } },
};

export const itemsIsNotSale = (arg: DrinkBuyProps) => {
  return (
    <div className="item_story">
      {drinks.map(drink => (
        <DrinkBuy {...arg} key={drink} name={drink} isSale={false} />
      ))}
    </div>
  );
};
itemsIsNotSale.argTypes = {
  name: { table: { disable: true } },
  isSale: { table: { disable: true } },
  isStock: { table: { disable: true } },
};

export const itemsIsNotStock = (arg: DrinkBuyProps) => {
  return (
    <div className="item_story">
      {drinks.map(drink => (
        <DrinkBuy {...arg} key={drink} name={drink} isStock={false} />
      ))}
    </div>
  );
};
itemsIsNotStock.argTypes = {
  name: { table: { disable: true } },
  isSale: { table: { disable: true } },
  isStock: { table: { disable: true } },
};
