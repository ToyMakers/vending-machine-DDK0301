import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules';

import '@scss/commons/MoneyDisplay.scss';

export default function MoneyDisplay() {
  const useMoney = useSelector((state: RootState) => state.money.useMoney);
  return (
    <div
      className={classNames(
        'moneydisplay',
        useMoney === 0 ? 'deactive' : 'active',
      )}
    >
      <span>KRW</span>
      <span>{useMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
    </div>
  );
}
