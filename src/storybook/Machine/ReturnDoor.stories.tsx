import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import { ReturnDoor, ReturnDoorProps } from '@commons/ReturnDoor';

const DoorType: string[] = ['drink', 'money'];

export default {
  title: 'Machine/ReturnDoor',
  component: ReturnDoor,
  argTypes: {
    doorType: {
      control: {
        type: 'select',
        options: [...DoorType],
      },
    },
  },
} as Meta;

const Template: Story<ReturnDoorProps> = arg => {
  return makeStore(<ReturnDoor {...arg} />);
};

export const item = Template.bind({});

export const drinkDoor = () => {
  return makeStore(<ReturnDoor doorType="drink" />, {
    drink: {
      drinks: [],
      storage: [{ name: 'coca-cola', count: 1 }],
      inventory: [],
    },
  });
};
drinkDoor.argTypes = {
  doorType: { table: { disable: true } },
};

export const moneyDoor = () => {
  return makeStore(<ReturnDoor doorType="money" />, {
    money: { leftMoney: 0, useMoney: 0, returnMoney: 1000 },
  });
};
moneyDoor.argTypes = {
  doorType: { table: { disable: true } },
};
