import React from 'react';
import { render, screen } from '@testing-library/react';
import { Drink } from './Drink';

test('check render', () => {
  render(<Drink />);
  const linkElement = screen.getByText(/drink/i);
  expect(linkElement).toBeInTheDocument();
});

test('check props', () => {
  render(<Drink name="coca-cola" />);
  const linkElement = screen.getByText(/Coca Cola/i);
  expect(linkElement).toBeInTheDocument();
});
