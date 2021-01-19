import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import ReturnButton from '@commons/ReturnButton';

export default {
  title: 'Machine/ReturnButton',
  component: ReturnButton,
} as Meta;

export const item = () => {
  return makeStore(<ReturnButton />);
};

export const deactive = () => {
  return makeStore(<ReturnButton />, {
    money: {
      leftMoney: 0,
      useMoney: 0,
      returnMoney: 0,
    },
  });
};

export const active = () => {
  return makeStore(<ReturnButton />, {
    money: {
      leftMoney: 0,
      useMoney: 10000,
      returnMoney: 0,
    },
  });
};
