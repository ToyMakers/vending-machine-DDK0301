import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DrinkBuy } from '@layouts/DrinkLayout/DrinkBuy';
import { RootState } from '@/modules';
import { buyDrink } from '@/modules/drink';
import { payMoney } from '@/modules/money';

import '@scss/layouts/MachineLayout/ShowCase.scss';

export default function ShowCase() {
  const dispatch = useDispatch();
  const { drinks, money } = useSelector((state: RootState) => ({
    drinks: state.drink.drinks,
    money: state.money.useMoney,
  }));
  const onBuy = (_name: string) => {
    const payment = drinks.find(drink => drink.name === _name)?.price;
    dispatch(buyDrink(_name));
    dispatch(payMoney(payment || 0));
  };

  return (
    <div className="showcase">
      <div className="showcase__row">
        {drinks.slice(0, 4).map(drink => {
          return (
            <DrinkBuy
              key={drink.name}
              name={drink.name}
              price={drink.price}
              isSale={money >= (drink.price || 0)}
              isStock={Boolean(drink.count)}
              onBuy={onBuy}
            />
          );
        })}
        <div className="showcase__row--bar" />
      </div>
      <div className="showcase__row">
        {drinks.slice(4).map(drink => {
          return (
            <DrinkBuy
              key={drink.name}
              name={drink.name}
              price={drink.price}
              isSale={money >= (drink.price || 0)}
              isStock={Boolean(drink.count)}
              onBuy={onBuy}
            />
          );
        })}
        <div className="showcase__row--bar" />
      </div>
    </div>
  );
}
