import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Coin } from '@commons/Coin';
import { putMoney } from '@/modules/money';
import { RootState } from '@/modules';
import '@scss/layouts/CoinLayout/Wallet.scss';

const coins: number[] = [50, 100, 500, 1000];

export default function Wallet() {
  const dispatch = useDispatch();
  const leftMoney = useSelector((state: RootState) => state.money.leftMoney);
  const useMoney = (_amount: number) => {
    dispatch(putMoney(_amount));
  };
  return (
    <div className="wallet">
      <div className="wallet--title">My Wallet</div>
      <div className="wallet--showmoney">
        <span>₩</span>
        <span>
          {leftMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </div>
      <div className="wallet--coins">
        {coins.map(amount => (
          <Coin
            key={amount}
            amount={amount}
            isSelect={amount <= leftMoney}
            onPick={useMoney}
          />
        ))}
      </div>
    </div>
  );
}
