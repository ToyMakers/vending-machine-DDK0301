import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import MachineBottom from '@layouts/MachineLayout/MachineBottom';

export default {
  title: 'Machine/MachineBottom',
  component: MachineBottom,
} as Meta;

export const item = () => {
  return makeStore(<MachineBottom />);
};

export const MachineHaveDrink = () => {
  return makeStore(<MachineBottom />, {
    drink: {
      drinks: [],
      storage: [{ name: 'coca-cola', count: 1 }],
      inventory: [],
    },
  });
};
