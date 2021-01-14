import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Coin, CoinProps } from '@commons/Coin';

const coins: number[] = [50, 100, 500, 1000];

export default {
  title: 'Coin/Coin',
  component: Coin,
  argTypes: {
    amount: {
      control: {
        type: 'select',
        options: [...coins],
      },
    },
    onPick: { defaultValue: null, table: { disable: true } },
  },
} as Meta;

const Template: Story<CoinProps> = arg => (
  <div className="item_story">
    <Coin {...arg} />
  </div>
);

export const item = Template.bind({});

export const items = (arg: CoinProps) => {
  return (
    <div className="item_story">
      {coins.map(amount => (
        <Coin {...arg} key={amount} amount={amount} />
      ))}
    </div>
  );
};
items.argTypes = {
  amount: { table: { disable: true } },
};

export const itemsIsSelect = (arg: CoinProps) => {
  return (
    <div className="item_story">
      {coins.map(amount => (
        <Coin {...arg} key={amount} amount={amount} />
      ))}
    </div>
  );
};
itemsIsSelect.argTypes = {
  amount: { table: { disable: true } },
  isSelect: { table: { disable: true } },
};

export const itemsIsNotSelect = (arg: CoinProps) => {
  return (
    <div className="item_story">
      {coins.map(amount => (
        <Coin {...arg} key={amount} amount={amount} isSelect={false} />
      ))}
    </div>
  );
};
itemsIsNotSelect.argTypes = {
  amount: { table: { disable: true } },
  isSelect: { table: { disable: true } },
};
