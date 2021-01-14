import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import makeStore from '@utils/makeStore';

import App from '@/App';

export default {
  title: 'Main/App',
  component: App,
} as Meta;

export const Main = () => {
  return makeStore(<App />);
};
