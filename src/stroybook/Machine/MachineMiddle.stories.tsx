import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import MachineMiddle from '@layouts/MachineLayout/MachineMiddle';

export default {
  title: 'Machine/MachineMiddle',
  component: MachineMiddle,
} as Meta;

export const item = () => {
  return makeStore(<MachineMiddle />);
};

export const MachineHaveUseMoney = () => {
  return makeStore(<MachineMiddle />, {
    money: {
      leftMoney: 0,
      useMoney: 1000,
      returnMoney: 0,
    },
  });
};

export const MachineHaveReturnMoney = () => {
  return makeStore(<MachineMiddle />, {
    money: {
      leftMoney: 0,
      useMoney: 0,
      returnMoney: 10000,
    },
  });
};
