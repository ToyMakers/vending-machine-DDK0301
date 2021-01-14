import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from '@/utils/renderWithRedux';

import UserStateContainer from './UserStateContainer';

test('check render', () => {
  renderWithRedux(<UserStateContainer />);
  const WalletState = screen.getByText('0');
  expect(WalletState).toBeInTheDocument();
  const InventoryState = screen.getByText('0');
  expect(InventoryState).toBeInTheDocument();
});
