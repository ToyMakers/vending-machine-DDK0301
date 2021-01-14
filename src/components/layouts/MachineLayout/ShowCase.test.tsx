import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from '@/utils/renderWithRedux';

import ShowCase from './ShowCase';

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
  renderWithRedux(<ShowCase />);
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
});

test('check normal situation', () => {
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
  renderWithRedux(<ShowCase />, {
    money: { leftMoney: 0, useMoney: 20000, returnMoney: 0 },
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
});

test('check no stock', () => {
  const DrinkData = [
    { name: 'coca-cola', count: 0, price: 1300 },
    { name: 'dr-pepper', count: 0, price: 1200 },
    { name: 'fanta', count: 0, price: 800 },
    { name: 'lets-be', count: 0, price: 600 },
    { name: 'sprite', count: 0, price: 900 },
    { name: 'tejava', count: 0, price: 1100 },
    { name: 'water', count: 0, price: 500 },
    { name: 'welchs', count: 0, price: 1000 },
  ];
  renderWithRedux(<ShowCase />, {
    money: { leftMoney: 0, useMoney: 20000, returnMoney: 0 },
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
    expect(DrinkPrice.closest('button')).toBeDisabled();
  });
});

test('check no money', () => {
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
  renderWithRedux(<ShowCase />, {
    money: { leftMoney: 0, useMoney: 0, returnMoney: 0 },
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
    expect(DrinkPrice.closest('button')).toBeDisabled();
  });
});
