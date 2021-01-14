import React from 'react';
import classNames from 'classnames';
import '@scss/commons/Coin.scss';

export interface CoinProps {
  /** 코인 금액 선택 */
  amount: number;
  /** 코인 선택 가능 여부 */
  isSelect: boolean;
  /** 코인 선택 */
  onPick: (amount: number) => void;
}

export function Coin({ amount, isSelect, onPick }: CoinProps) {
  return (
    <button
      type="button"
      disabled={!isSelect}
      className={classNames('coin', isSelect ? '' : 'deactive')}
      onClick={() => {
        onPick(amount);
      }}
    >
      <div className="coin--outline">
        <div className="coin--innerline">
          {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
    </button>
  );
}
Coin.defaultProps = {
  amount: 500,
  isSelect: true,
  onPick: () => {},
} as Partial<CoinProps>;
