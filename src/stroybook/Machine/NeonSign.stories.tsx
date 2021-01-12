import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import NeonSign from '@commons/NeonSign';

export default {
  title: 'Machine/NeonSign',
  component: NeonSign,
} as Meta;

export const item = () => {
  return <NeonSign />;
};
