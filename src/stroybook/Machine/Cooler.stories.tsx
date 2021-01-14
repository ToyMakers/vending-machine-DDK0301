import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Cooler from '@commons/Cooler';

export default {
  title: 'Machine/Cooler',
  component: Cooler,
} as Meta;

export const item = () => {
  return <Cooler />;
};
