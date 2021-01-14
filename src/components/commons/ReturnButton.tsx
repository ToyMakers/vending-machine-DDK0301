import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/modules';
import { backMoney } from '@/modules/money';

import '@scss/commons/ReturnButton.scss';

export default function ReturnButton() {
  const dispatch = useDispatch();
  const useMoney = useSelector((state: RootState) => state.money.useMoney);
  return (
    <div
      className={classNames(
        'returnbutton',
        useMoney === 0 ? 'deactive' : 'active',
      )}
    >
      <button
        type="button"
        onClick={() => {
          dispatch(backMoney());
        }}
        disabled={useMoney === 0}
      >
        <span>ReturnButton</span>
      </button>
    </div>
  );
}
