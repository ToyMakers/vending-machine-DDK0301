import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrinkCount } from './DrinkCount';

test('check render', () => {
  render(<DrinkCount />);
  const DrinkName = screen.getByText('Basic Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkCountNumber = screen.getByText('0');
  expect(DrinkCountNumber).toBeInTheDocument();
});

test('check name props', () => {
  render(<DrinkCount name="coca-cola" />);
  const DrinkName = screen.getByText('Coca Cola');
  expect(DrinkName).toBeInTheDocument();
  const DrinkCountNumber = screen.getByText('0');
  expect(DrinkCountNumber).toBeInTheDocument();
});

test('check count props', () => {
  render(<DrinkCount count={10} />);
  const DrinkName = screen.getByText('Basic Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkCountNumber = screen.getByText('10');
  expect(DrinkCountNumber).toBeInTheDocument();
});

test('check props', () => {
  render(<DrinkCount name="coca-cola" count={10} />);
  const DrinkName = screen.getByText('Coca Cola');
  expect(DrinkName).toBeInTheDocument();
  const DrinkCountNumber = screen.getByText('10');
  expect(DrinkCountNumber).toBeInTheDocument();
});
