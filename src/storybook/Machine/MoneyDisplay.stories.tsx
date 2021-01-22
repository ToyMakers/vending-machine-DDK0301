import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import MoneyDisplay from '@commons/MoneyDisplay';

export default {
  title: 'Machine/MoneyDisplay',
  component: MoneyDisplay,
} as Meta;

export const item = () => {
  return makeStore(<MoneyDisplay />);
};

export const moneyIs0 = () => {
  return makeStore(<MoneyDisplay />, {
    money: {
      leftMoney: 0,
      useMoney: 0,
      returnMoney: 0,
    },
  });
};

export const moneyIs10000 = () => {
  return makeStore(<MoneyDisplay />, {
    money: {
      leftMoney: 0,
      useMoney: 10000,
      returnMoney: 0,
    },
  });
};
