import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '@/utils/renderWithRedux';

import MachineContainer from './MachineContainer';

test('check render', () => {
  const DrinkData = [
    { name: 'coca-cola', count: 10, price: 1300 },
    { name: 'dr-pepper', count: 10, price: 1200 },
    { name: 'fanta', count: 10, price: 800 },
    { name: 'lets-be', count: 10, price: 600 },
    { name: 'sprite', count: 10, price: 900 },
    { name: 'tejava', count: 10, price: 1100 },
    { name: 'water', count: 10, price: 500 },
    { name: 'welchs', count: 10, price: 1000 },
  ];
  renderWithRedux(<MachineContainer />);
  DrinkData.forEach(drink => {
    const DrinkLabel = screen.getByText(
      drink.name
        .split('-')
        .map(_ => _.replace(/[a-z]?/, match => match.toUpperCase()))
        .join(' '),
    );
    expect(DrinkLabel).toBeInTheDocument();
    const DrinkPrice = screen.getByText(
      drink.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    );
    expect(DrinkPrice.closest('button')).toBeDisabled();
  });
  const MoneyDisplay = screen.getByText('KRW');
  expect(MoneyDisplay).toBeInTheDocument();
  const ReturnButton = screen.getByText('ReturnButton');
  const [ReturnMoneyDoor, ReturnDrinkDoor] = screen.getAllByText('Push');
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeDisabled();
});

test('check action', () => {
  const DrinkData = [
    { name: 'coca-cola', count: 10, price: 1300 },
    { name: 'dr-pepper', count: 10, price: 1200 },
    { name: 'fanta', count: 10, price: 800 },
    { name: 'lets-be', count: 10, price: 600 },
    { name: 'sprite', count: 10, price: 900 },
    { name: 'tejava', count: 10, price: 1100 },
    { name: 'water', count: 10, price: 500 },
    { name: 'welchs', count: 10, price: 1000 },
  ];
  renderWithRedux(<MachineContainer />, {
    money: { leftMoney: 0, useMoney: 10000, returnMoney: 0 },
    drink: {
      drinks: [...DrinkData],
      storage: [],
      inventory: [],
    },
  });
  DrinkData.forEach(drink => {
    const DrinkLabel = screen.getByText(
      drink.name
        .split('-')
        .map(_ => _.replace(/[a-z]?/, match => match.toUpperCase()))
        .join(' '),
    );
    expect(DrinkLabel).toBeInTheDocument();
    const DrinkPrice = screen.getByText(
      drink.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    );
    expect(DrinkPrice.closest('button')).toBeEnabled();
  });
  const MoneyDisplay = screen.getByText('10,000');
  expect(MoneyDisplay).toBeInTheDocument();
  const ReturnButton = screen.getByText('ReturnButton');
  const [ReturnMoneyDoor, ReturnDrinkDoor] = screen.getAllByText('Push');
  expect(ReturnButton.closest('button')).toBeEnabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeDisabled();
  fireEvent.click(screen.getByText('1,300'));
  expect(ReturnButton.closest('button')).toBeEnabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeEnabled();
  fireEvent.click(ReturnButton);
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnMoneyDoor.closest('button')).toBeEnabled();
  expect(ReturnDrinkDoor.closest('button')).toBeEnabled();
  fireEvent.click(ReturnMoneyDoor);
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeEnabled();
  fireEvent.click(ReturnDrinkDoor);
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeDisabled();
});
