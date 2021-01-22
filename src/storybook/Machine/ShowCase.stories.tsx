import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import ShowCase from '@layouts/MachineLayout/ShowCase';

export default {
  title: 'Machine/ShowCase',
  component: ShowCase,
} as Meta;

export const item = () => {
  return makeStore(<ShowCase />);
};

export const drinksOnSale = () => {
  return makeStore(<ShowCase />, {
    money: { leftMoney: 0, useMoney: 20000, returnMoney: 0 },
  });
};

export const drinksSoldOut = () => {
  const DrinkData = [
    { name: 'coca-cola', count: 0, price: 1300 },
    { name: 'dr-pepper', count: 0, price: 1200 },
    { name: 'fanta', count: 0, price: 800 },
    { name: 'lets-be', count: 0, price: 600 },
    { name: 'sprite', count: 0, price: 900 },
    { name: 'tejava', count: 0, price: 1100 },
    { name: 'water', count: 0, price: 500 },
    { name: 'welchs', count: 0, price: 1000 },
  ];
  return makeStore(<ShowCase />, {
    drink: {
      drinks: [...DrinkData],
      storage: [],
      inventory: [],
    },
  });
};
