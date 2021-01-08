import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import Inventory from '@layouts/DrinkLayout/Inventory';

export default {
  title: 'Drink/Inventory',
  component: Inventory,
} as Meta;

export const item = () => {
  return makeStore(<Inventory />);
};

export const oneDrink = () => {
  return makeStore(<Inventory />, {
    drink: {
      drinks: [],
      inventory: [{ name: 'coca-cola', count: 1 }],
    },
  });
};
export const FourDrink = () => {
  return makeStore(<Inventory />, {
    drink: {
      drinks: [],
      inventory: [
        { name: 'coca-cola', count: 1 },
        { name: 'dr-pepper', count: 1 },
        { name: 'fanta', count: 1 },
        { name: 'lets-be', count: 1 },
      ],
    },
  });
};
export const AllDrink = () => {
  return makeStore(<Inventory />, {
    drink: {
      drinks: [],
      inventory: [
        { name: 'coca-cola', count: 1 },
        { name: 'dr-pepper', count: 1 },
        { name: 'fanta', count: 1 },
        { name: 'lets-be', count: 1 },
        { name: 'sprite', count: 1 },
        { name: 'tejava', count: 1 },
        { name: 'water', count: 1 },
        { name: 'welchs', count: 1 },
      ],
    },
  });
};
