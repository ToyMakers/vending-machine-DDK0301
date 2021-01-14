import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '@/utils/renderWithRedux';
import App from '@/App';

test('renders test', () => {
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
  renderWithRedux(<App />);
  const Coin1000 = screen.getByText('1,000', { selector: 'div' });
  const Coin500 = screen.getByText('500', { selector: 'div' });
  const Coin100 = screen.getByText('100', { selector: 'div' });
  const Coin50 = screen.getByText('50', { selector: 'div' });
  const ReturnButton = screen.getByText('ReturnButton');
  const [ReturnMoneyDoor, ReturnDrinkDoor] = screen.getAllByText('Push');
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeDisabled();
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
      { selector: 'span' },
    );
    expect(DrinkPrice.closest('button')).toBeDisabled();
  });
  fireEvent.click(Coin1000);
  fireEvent.click(Coin500);
  fireEvent.click(Coin100);
  fireEvent.click(Coin50);
  expect(screen.getByText('1,650')).toBeInTheDocument();
  expect(screen.getByText('18,350')).toBeInTheDocument();
  expect(ReturnButton.closest('button')).toBeEnabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeDisabled();
  fireEvent.click(screen.getByText('1,000', { selector: 'span' }));
  expect(screen.getByText('650')).toBeInTheDocument();
  expect(ReturnButton.closest('button')).toBeEnabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeEnabled();
  fireEvent.click(ReturnButton);
  expect(
    screen.getByText('0', { selector: '.moneydisplay>span' }),
  ).toBeInTheDocument();
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnMoneyDoor.closest('button')).toBeEnabled();
  expect(ReturnDrinkDoor.closest('button')).toBeEnabled();
  fireEvent.click(ReturnMoneyDoor);
  expect(screen.getByText('19,000')).toBeInTheDocument();
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeEnabled();
  fireEvent.click(ReturnDrinkDoor);
  expect(
    screen.getByText('1', { selector: '.inventory--showstock>span' }),
  ).toBeInTheDocument();
  expect(ReturnButton.closest('button')).toBeDisabled();
  expect(ReturnMoneyDoor.closest('button')).toBeDisabled();
  expect(ReturnDrinkDoor.closest('button')).toBeDisabled();
});
