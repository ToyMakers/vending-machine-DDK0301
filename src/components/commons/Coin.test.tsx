import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Coin } from './Coin';

test('check render', () => {
  render(<Coin />);
  const CoinElement = screen.getByText('500');
  expect(CoinElement).toBeInTheDocument();
  const CoinBtn = CoinElement.closest('button');
  expect(CoinBtn).toBeEnabled();
});

test('check amount props', () => {
  render(<Coin amount={1000} />);
  const CoinElement = screen.getByText('1,000');
  expect(CoinElement).toBeInTheDocument();
  const CoinBtn = CoinElement.closest('button');
  expect(CoinBtn).toBeEnabled();
});

test('check onPick props', () => {
  const onPickFnc = jest.fn();
  render(<Coin onPick={onPickFnc} />);
  const CoinElement = screen.getByText('500');
  expect(CoinElement).toBeInTheDocument();
  const CoinBtn = CoinElement.closest('button');
  expect(CoinBtn).toBeEnabled();
  fireEvent.click(CoinElement);
  expect(onPickFnc).toBeCalledWith(500);
});

test('check isSelect props', () => {
  const onPickFnc = jest.fn();
  render(<Coin isSelect={false} onPick={onPickFnc} />);
  const CoinElement = screen.getByText('500');
  expect(CoinElement).toBeInTheDocument();
  const CoinBtn = CoinElement.closest('button');
  expect(CoinBtn).toBeDisabled();
  fireEvent.click(CoinElement);
  expect(() => expect(onPickFnc).toBeCalledWith(500)).toThrow();
});

test('check props', () => {
  const onPickFnc = jest.fn();
  render(<Coin amount={50} isSelect onPick={onPickFnc} />);
  const CoinElement = screen.getByText('50');
  expect(CoinElement).toBeInTheDocument();
  const CoinBtn = CoinElement.closest('button');
  expect(CoinBtn).toBeEnabled();
  fireEvent.click(CoinElement);
  expect(onPickFnc).toBeCalledWith(50);
});
