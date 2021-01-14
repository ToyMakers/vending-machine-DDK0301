import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '@/utils/renderWithRedux';

import MachineBottom from './MachineBottom';

test('check render', () => {
  renderWithRedux(<MachineBottom />);
  const ReturnDoor = screen.getByText('Push');
  expect(ReturnDoor).toBeInTheDocument();
  expect(ReturnDoor.closest('button')).toBeDisabled();
});

test('check action', () => {
  renderWithRedux(<MachineBottom />, {
    drink: {
      drinks: [],
      storage: [{ name: 'coca-cola', count: 1 }],
      inventory: [],
    },
  });
  const ReturnDoor = screen.getByText('Push');
  expect(ReturnDoor.closest('button')).toBeEnabled();
  fireEvent.click(ReturnDoor);
  expect(ReturnDoor.closest('button')).toBeDisabled();
});
