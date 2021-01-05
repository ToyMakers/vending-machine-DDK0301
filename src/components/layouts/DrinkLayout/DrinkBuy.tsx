import React from 'react';
import classNames from 'classnames';
import { Drink } from '@commons/Drink';
import '@scss/layouts/DrinkLayout/DrinkBuy.scss';

export interface DrinkBuyProps {
  /** 음료수 선택 */
  name: string;
  /** 음료수 가격 */
  price: number;
  /** 음료수 판매 여부 */
  isSale: boolean;
  /** 음료수 잔여 여부 */
  isStock: boolean;
  /** 음료수 구매 */
  onBuy: (name: string) => void;
}

export function DrinkBuy({
  name,
  price,
  isSale,
  isStock,
  onBuy,
}: DrinkBuyProps) {
  const onClickDrink = () => {
    onBuy(name);
  };
  const stringPrice =
    price > 0 ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
  return (
    <div className="drinkbuy">
      <Drink name={name} />
      <button
        className={classNames(
          'drinkbuy--button',
          isStock && isSale ? 'active' : '',
          isStock ? '' : 'nostock',
        )}
        type="button"
        disabled={!(isStock && isSale)}
        onClick={onClickDrink}
      >
        <span>₩</span>
        <span>{stringPrice}</span>
      </button>
    </div>
  );
}
DrinkBuy.defaultProps = {
  name: 'sale-drink',
  price: 1000,
  isSale: true,
  isStock: true,
  onBuy: () => {},
} as Partial<DrinkBuyProps>;
