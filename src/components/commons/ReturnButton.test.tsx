import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '@utils/renderWithRedux';
import ReturnButton from './ReturnButton';

test('check render', () => {
  renderWithRedux(<ReturnButton />, {
    money: { leftMoney: 0, useMoney: 0, returnMoney: 0 },
  });
  const ReturnBtn = screen.getByRole('button');
  expect(ReturnBtn).toHaveAttribute('disabled');
});

test('check action', () => {
  renderWithRedux(<ReturnButton />, {
    money: { leftMoney: 0, useMoney: 1000, returnMoney: 0 },
  });
  const ReturnBeforeButton = screen.getByText('ReturnButton');
  expect(ReturnBeforeButton.closest('button')).toBeEnabled();
  fireEvent.click(ReturnBeforeButton);
  const ReturnAfterButton = screen.getByText('ReturnButton');
  expect(ReturnAfterButton.closest('button')).toBeDisabled();
});
