import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '@/utils/renderWithRedux';

import MachineMiddle from './MachineMiddle';

test('check render', () => {
  renderWithRedux(<MachineMiddle />, {
    money: { leftMoney: 0, useMoney: 0, returnMoney: 0 },
  });
  const MoneyDisplay = screen.getByText('KRW');
  expect(MoneyDisplay).toBeInTheDocument();
  const NeonSignTop = screen.getByText('방구석');
  const NeonSignBottom = screen.getByText('호랑이');
  expect(NeonSignTop).toBeInTheDocument();
  expect(NeonSignBottom).toBeInTheDocument();
});

test('check action', () => {
  renderWithRedux(<MachineMiddle />, {
    money: { leftMoney: 0, useMoney: 1000, returnMoney: 0 },
  });
  const MoneyBeforeDisplay = screen.getByText('1,000');
  expect(MoneyBeforeDisplay).toBeInTheDocument();
  const ReturnButton = screen.getByText('ReturnButton');
  const ReturnDoor = screen.getByText('Push');
  expect(ReturnButton.closest('button')).toBeEnabled();
  expect(ReturnDoor.closest('button')).toBeDisabled();
  fireEvent.click(ReturnButton);
  const MoneyAfterDisplay = screen.getByText('0');
  expect(MoneyAfterDisplay).toBeInTheDocument();
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnDoor.closest('button')).toBeEnabled();
  fireEvent.click(ReturnDoor);
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnDoor.closest('button')).toBeDisabled();
});
