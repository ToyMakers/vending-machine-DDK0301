import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import UserStateContainer from '@containers/UserStateContainer';

export default {
  title: 'Container/UserStateContainer',
  component: UserStateContainer,
} as Meta;

export const item = () => {
  return makeStore(<UserStateContainer />);
};

export const nothingInState = () => {
  return makeStore(<UserStateContainer />, {
    money: {
      leftMoney: 0,
      useMoney: 0,
      returnMoney: 0,
    },
  });
};

export const oneDrink = () => {
  return makeStore(<UserStateContainer />, {
    drink: {
      drinks: [],
      storage: [],
      inventory: [{ name: 'coca-cola', count: 1 }],
    },
  });
};
export const FourDrink = () => {
  return makeStore(<UserStateContainer />, {
    drink: {
      drinks: [],
      storage: [],
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
  return makeStore(<UserStateContainer />, {
    drink: {
      drinks: [],
      storage: [],
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
