import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '@utils/renderWithRedux';
import { ReturnDoor } from './ReturnDoor';

test('check render', () => {
  renderWithRedux(<ReturnDoor />);
  const ButtonElement = screen.getByText('Push');
  expect(ButtonElement).toBeInTheDocument();
  const ReturnButton = screen.getByRole('button');
  expect(ReturnButton).toBeEnabled();
});

test('check drink door render', () => {
  renderWithRedux(<ReturnDoor doorType="drink" />, {
    drink: {
      drinks: [],
      storage: [],
      inventory: [],
    },
  });
  const ButtonElement = screen.getByText('Push');
  expect(ButtonElement).toBeInTheDocument();
  const ReturnButton = screen.getByRole('button');
  expect(ReturnButton).toBeDisabled();
});

test('check drink door action', () => {
  renderWithRedux(<ReturnDoor doorType="drink" />, {
    drink: {
      drinks: [],
      storage: [{ name: 'coca-cola', count: 1 }],
      inventory: [],
    },
  });
  const ReturnButton = screen.getByRole('button');
  expect(ReturnButton).toBeEnabled();
  fireEvent.click(ReturnButton);
  expect(ReturnButton).toBeDisabled();
});

test('check money door render', () => {
  renderWithRedux(<ReturnDoor doorType="money" />, {
    money: { leftMoney: 0, useMoney: 0, returnMoney: 0 },
  });
  const ButtonElement = screen.getByText('Push');
  expect(ButtonElement).toBeInTheDocument();
  const ReturnButton = screen.getByRole('button');
  expect(ReturnButton).toBeDisabled();
});

test('check money door action', () => {
  renderWithRedux(<ReturnDoor doorType="money" />, {
    money: { leftMoney: 0, useMoney: 0, returnMoney: 1000 },
  });
  const ReturnButton = screen.getByRole('button');
  expect(ReturnButton).toBeEnabled();
  fireEvent.click(ReturnButton);
  expect(ReturnButton).toBeDisabled();
});
