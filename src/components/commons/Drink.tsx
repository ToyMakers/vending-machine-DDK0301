import React from 'react';
import classNames from 'classnames';
import '@scss/commons/Drink.scss';

export interface DrinkProps {
  /** 음료수 선택 */
  name: string;
}

export function Drink({ name }: DrinkProps) {
  const label: string = name
    .split('-')
    .map(_ => _.replace(/[a-z]?/, match => match.toUpperCase()))
    .join(' ');
  return (
    <div className={classNames('drink', name)}>
      <div className="drink--top" />
      <div className="drink--neck" />
      <div className="drink--middle">
        <p className="drink--label">{label}</p>
      </div>
      <div className="drink--neck" />
      <div className="drink--bottom" />
    </div>
  );
}
Drink.defaultProps = {
  name: 'drink',
} as Partial<DrinkProps>;
