import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import CoinEnter from '@commons/CoinEnter';

export default {
  title: 'Machine/CoinEnter',
  component: CoinEnter,
} as Meta;

export const item = () => {
  return <CoinEnter />;
};
