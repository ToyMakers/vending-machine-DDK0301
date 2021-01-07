import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '@utils/renderWithRedux';
import Wallet from './Wallet';

test('check render', () => {
  renderWithRedux(<Wallet />);
  const WalletTitle = screen.getByText('My Wallet');
  expect(WalletTitle).toBeInTheDocument();
  const WalletMoney = screen.getByText('20,000');
  expect(WalletMoney).toBeInTheDocument();

  const Coin50 = screen.getByText('50');
  expect(Coin50).toBeInTheDocument();
  expect(Coin50.closest('button')).toBeEnabled();
  fireEvent.click(Coin50);
  expect(screen.getByText('19,950')).toBeInTheDocument();

  const Coin100 = screen.getByText('100');
  expect(Coin100).toBeInTheDocument();
  expect(Coin100.closest('button')).toBeEnabled();
  fireEvent.click(Coin100);
  expect(screen.getByText('19,850')).toBeInTheDocument();

  const Coin500 = screen.getByText('500');
  expect(Coin500).toBeInTheDocument();
  expect(Coin500.closest('button')).toBeEnabled();
  fireEvent.click(Coin500);
  expect(screen.getByText('19,350')).toBeInTheDocument();

  const Coin1000 = screen.getByText('1,000');
  expect(Coin1000).toBeInTheDocument();
  expect(Coin1000.closest('button')).toBeEnabled();
  fireEvent.click(Coin1000);
  expect(screen.getByText('18,350')).toBeInTheDocument();
});

test('check money 0 render', () => {
  renderWithRedux(<Wallet />, {
    money: { leftMoney: 0, useMoney: 0, returnMoney: 0 },
  });
  const WalletTitle = screen.getByText('My Wallet');
  expect(WalletTitle).toBeInTheDocument();
  const WalletMoney = screen.getByText('0');
  expect(WalletMoney).toBeInTheDocument();

  const Coin50 = screen.getByText('50');
  expect(Coin50).toBeInTheDocument();
  expect(Coin50.closest('button')).toBeDisabled();
  fireEvent.click(Coin50);
  expect(screen.getByText('0')).toBeInTheDocument();

  const Coin100 = screen.getByText('100');
  expect(Coin100).toBeInTheDocument();
  expect(Coin100.closest('button')).toBeDisabled();
  fireEvent.click(Coin100);
  expect(screen.getByText('0')).toBeInTheDocument();

  const Coin500 = screen.getByText('500');
  expect(Coin500).toBeInTheDocument();
  expect(Coin500.closest('button')).toBeDisabled();
  fireEvent.click(Coin500);
  expect(screen.getByText('0')).toBeInTheDocument();

  const Coin1000 = screen.getByText('1,000');
  expect(Coin1000).toBeInTheDocument();
  expect(Coin1000.closest('button')).toBeDisabled();
  fireEvent.click(Coin1000);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('check money 400 render', () => {
  renderWithRedux(<Wallet />, {
    money: { leftMoney: 400, useMoney: 0, returnMoney: 0 },
  });
  const WalletTitle = screen.getByText('My Wallet');
  expect(WalletTitle).toBeInTheDocument();
  const WalletMoney = screen.getByText('400');
  expect(WalletMoney).toBeInTheDocument();

  const Coin50 = screen.getByText('50');
  expect(Coin50).toBeInTheDocument();
  expect(Coin50.closest('button')).toBeEnabled();
  fireEvent.click(Coin50);
  expect(screen.getByText('350')).toBeInTheDocument();

  const Coin100 = screen.getByText('100');
  expect(Coin100).toBeInTheDocument();
  expect(Coin100.closest('button')).toBeEnabled();
  fireEvent.click(Coin100);
  expect(screen.getByText('250')).toBeInTheDocument();

  const Coin500 = screen.getByText('500');
  expect(Coin500).toBeInTheDocument();
  expect(Coin500.closest('button')).toBeDisabled();
  fireEvent.click(Coin500);
  expect(screen.getByText('250')).toBeInTheDocument();

  const Coin1000 = screen.getByText('1,000');
  expect(Coin1000).toBeInTheDocument();
  expect(Coin1000.closest('button')).toBeDisabled();
  fireEvent.click(Coin1000);
  expect(screen.getByText('250')).toBeInTheDocument();
});

test('check money 1520 render', () => {
  renderWithRedux(<Wallet />, {
    money: { leftMoney: 1520, useMoney: 0, returnMoney: 0 },
  });
  const WalletTitle = screen.getByText('My Wallet');
  expect(WalletTitle).toBeInTheDocument();
  const WalletMoney = screen.getByText('1,520');
  expect(WalletMoney).toBeInTheDocument();

  const Coin1000 = screen.getByText('1,000');
  expect(Coin1000).toBeInTheDocument();
  expect(Coin1000.closest('button')).toBeEnabled();
  fireEvent.click(Coin1000);
  expect(screen.getByText('520')).toBeInTheDocument();

  const Coin500 = screen.getByText('500');
  expect(Coin500).toBeInTheDocument();
  expect(Coin500.closest('button')).toBeEnabled();
  fireEvent.click(Coin500);
  expect(screen.getByText('20')).toBeInTheDocument();

  const Coin100 = screen.getByText('100');
  expect(Coin100).toBeInTheDocument();
  expect(Coin100.closest('button')).toBeDisabled();
  fireEvent.click(Coin100);
  expect(screen.getByText('20')).toBeInTheDocument();

  const Coin50 = screen.getByText('50');
  expect(Coin50).toBeInTheDocument();
  expect(Coin50.closest('button')).toBeDisabled();
  fireEvent.click(Coin50);
  expect(screen.getByText('20')).toBeInTheDocument();
});
