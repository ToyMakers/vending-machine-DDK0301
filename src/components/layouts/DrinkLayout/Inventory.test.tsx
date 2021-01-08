import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from '@/utils/renderWithRedux';
import { getDrink } from '@/modules/drink';

import Inventory from './Inventory';

test('check render', () => {
  renderWithRedux(<Inventory />);
  const InventoryState = screen.getByText('0');
  expect(InventoryState).toBeInTheDocument();
});

test('check change only one inventory render', () => {
  const store = renderWithRedux(<Inventory />);
  const InventoryState = screen.getByText('0');
  expect(InventoryState).toBeInTheDocument();
  store.dispatch(getDrink([{ name: 'dr-pepper', count: 1 }]));
  screen.getAllByText('1');
  store.dispatch(getDrink([{ name: 'dr-pepper', count: 1 }]));
  screen.getAllByText('2');
});

test('check change total inventory render', () => {
  const store = renderWithRedux(<Inventory />);
  const DrinkData = [
    { name: 'coca-cola', count: 1 },
    { name: 'dr-pepper', count: 1 },
    { name: 'fanta', count: 1 },
    { name: 'lets-be', count: 1 },
    { name: 'sprite', count: 1 },
    { name: 'tejava', count: 1 },
    { name: 'water', count: 1 },
    { name: 'welchs', count: 1 },
  ];
  store.dispatch(getDrink([...DrinkData]));
  screen.getByText('8');
  DrinkData.forEach(drink => {
    screen.getByText(
      drink.name
        .split('-')
        .map(_ => _.replace(/[a-z]?/, match => match.toUpperCase()))
        .join(' '),
    );
    screen.getAllByText('1');
  });
  store.dispatch(getDrink([...DrinkData]));
  screen.getByText('16');
  DrinkData.forEach(drink => {
    screen.getByText(
      drink.name
        .split('-')
        .map(_ => _.replace(/[a-z]?/, match => match.toUpperCase()))
        .join(' '),
    );
    screen.getAllByText('2');
  });
});
