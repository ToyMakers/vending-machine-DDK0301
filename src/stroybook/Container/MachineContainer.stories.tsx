import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import MachineContainer from '@containers/MachineContainer';

export default {
  title: 'Container/MachineContainer',
  component: MachineContainer,
} as Meta;

export const item = () => {
  return makeStore(<MachineContainer />);
};

export const inMoney = () => {
  return makeStore(<MachineContainer />, {
    money: {
      leftMoney: 0,
      useMoney: 10000,
      returnMoney: 0,
    },
  });
};
