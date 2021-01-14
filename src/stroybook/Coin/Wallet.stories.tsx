import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import Wallet from '@layouts/CoinLayout/Wallet';

export default {
  title: 'Coin/Wallet',
  component: Wallet,
} as Meta;

export const item = () => {
  return makeStore(<Wallet />);
};

export const moneyIs2000 = () => {
  return makeStore(<Wallet />, {
    money: {
      leftMoney: 20000,
      useMoney: 0,
      returnMoney: 0,
    },
  });
};

export const moneyIs0 = () => {
  return makeStore(<Wallet />, {
    money: {
      leftMoney: 0,
      useMoney: 0,
      returnMoney: 0,
    },
  });
};
