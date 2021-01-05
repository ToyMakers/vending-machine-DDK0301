import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DrinkBuy } from './DrinkBuy';

test('check render', () => {
  render(<DrinkBuy />);
  const DrinkName = screen.getByText('Sale Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('1,000');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('1,000').closest('button');
  expect(DrinkBuyBtn).toBeEnabled();
});

test('check name props', () => {
  render(<DrinkBuy name="coca-cola" />);
  const DrinkName = screen.getByText('Coca Cola');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('1,000');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('1,000').closest('button');
  expect(DrinkBuyBtn).toBeEnabled();
});

test('check price props', () => {
  render(<DrinkBuy price={500} />);
  const DrinkName = screen.getByText('Sale Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('500');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('500').closest('button');
  expect(DrinkBuyBtn).toBeEnabled();
});

test('check error price props', () => {
  render(<DrinkBuy price={-500} />);
  const DrinkName = screen.getByText('Sale Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('0');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('0').closest('button');
  expect(DrinkBuyBtn).toBeEnabled();
});

test('check onClick props', () => {
  const onBuyFnc = jest.fn();
  render(<DrinkBuy onBuy={onBuyFnc} />);
  const DrinkName = screen.getByText('Sale Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('1,000');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('1,000');
  expect(DrinkBuyBtn.closest('button')).toBeEnabled();
  fireEvent.click(DrinkBuyBtn);
  expect(onBuyFnc).toBeCalledWith('sale-drink');
});

test('check isSale false props', () => {
  const onBuyFnc = jest.fn();
  render(<DrinkBuy isSale={false} onBuy={onBuyFnc} />);
  const DrinkName = screen.getByText('Sale Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('1,000');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('1,000');
  expect(DrinkBuyBtn.closest('button')).toBeDisabled();
  fireEvent.click(DrinkBuyBtn);
  expect(() => expect(onBuyFnc).toBeCalledWith('sale-drink')).toThrow();
});

test('check isStock false props', () => {
  const onBuyFnc = jest.fn();
  render(<DrinkBuy isStock={false} onBuy={onBuyFnc} />);
  const DrinkName = screen.getByText('Sale Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('1,000');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('1,000');
  expect(DrinkBuyBtn.closest('button')).toBeDisabled();
  fireEvent.click(DrinkBuyBtn);
  expect(() => expect(onBuyFnc).toBeCalledWith('sale-drink')).toThrow();
});

test('check isSale false isStock false props', () => {
  const onBuyFnc = jest.fn();
  render(<DrinkBuy isSale={false} isStock={false} onBuy={onBuyFnc} />);
  const DrinkName = screen.getByText('Sale Drink');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('1,000');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('1,000');
  expect(DrinkBuyBtn.closest('button')).toBeDisabled();
  fireEvent.click(DrinkBuyBtn);
  expect(() => expect(onBuyFnc).toBeCalledWith('sale-drink')).toThrow();
});

test('check props', () => {
  const onBuyFnc = jest.fn();
  render(<DrinkBuy name="coca-cola" price={1300} isSale onBuy={onBuyFnc} />);
  const DrinkName = screen.getByText('Coca Cola');
  expect(DrinkName).toBeInTheDocument();
  const DrinkPrice = screen.getByText('1,300');
  expect(DrinkPrice).toBeInTheDocument();
  const DrinkBuyBtn = screen.getByText('1,300');
  expect(DrinkBuyBtn.closest('button')).toBeEnabled();
  fireEvent.click(DrinkBuyBtn);
  expect(onBuyFnc).toBeCalledWith('coca-cola');
});
