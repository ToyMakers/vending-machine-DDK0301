import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from '@utils/renderWithRedux';
import MoneyDisplay from './MoneyDisplay';

test('check render', () => {
  renderWithRedux(<MoneyDisplay />, {
    money: { leftMoney: 0, useMoney: 0, returnMoney: 0 },
  });
  const Currency = screen.getByText('KRW');
  expect(Currency).toBeInTheDocument();
  const Money = screen.getByText('0');
  expect(Money).toBeInTheDocument();
});

test('check money is 10000', () => {
  renderWithRedux(<MoneyDisplay />, {
    money: { leftMoney: 0, useMoney: 10000, returnMoney: 0 },
  });
  const Money = screen.getByText('10,000');
  expect(Money).toBeInTheDocument();
});
