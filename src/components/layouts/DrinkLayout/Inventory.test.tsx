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
  const store = renderWithRedux(<Inventory />, {
    drink: {
      drinks: [],
      storage: [{ name: 'dr-pepper', count: 2 }],
      inventory: [],
    },
  });
  const InventoryState = screen.getByText('0');
  expect(InventoryState).toBeInTheDocument();
  store.dispatch(getDrink());
  screen.getAllByText('2');
});

test('check change total inventory render', () => {
  const DrinkData = [
    { name: 'coca-cola', count: 1 },
    { name: 'dr-pepper', count: 2 },
    { name: 'fanta', count: 1 },
    { name: 'lets-be', count: 1 },
    { name: 'sprite', count: 2 },
    { name: 'tejava', count: 1 },
    { name: 'water', count: 2 },
    { name: 'welchs', count: 1 },
  ];
  const store = renderWithRedux(<Inventory />, {
    drink: {
      drinks: [],
      storage: [...DrinkData],
      inventory: [],
    },
  });
  store.dispatch(getDrink());
  screen.getByText('11');
  DrinkData.forEach(drink => {
    screen.getByText(
      drink.name
        .split('-')
        .map(_ => _.replace(/[a-z]?/, match => match.toUpperCase()))
        .join(' '),
    );
  });
});
