import React from 'react';
import { Drink } from '@commons/Drink';
import '@scss/layouts/DrinkLayout/DrinkCount.scss';

export interface DrinkCountProps {
  /** 음료수 선택 */
  name: string;
  /** 음료수 개수 */
  count: number;
}

export function DrinkCount({ name, count }: DrinkCountProps) {
  return (
    <div className="drinkcount">
      <Drink name={name} />
      <div className="drinkcount--counter">
        <span>x </span>
        <span>{count}</span>
      </div>
    </div>
  );
}
DrinkCount.defaultProps = {
  name: 'basic-drink',
  count: 0,
} as Partial<DrinkCountProps>;
