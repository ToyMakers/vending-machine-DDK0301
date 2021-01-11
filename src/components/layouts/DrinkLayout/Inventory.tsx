import React from 'react';
import { useSelector } from 'react-redux';
import { DrinkCount } from '@layouts/DrinkLayout/DrinkCount';
import { RootState } from '@/modules';

import '@scss/layouts/DrinkLayout/Inventory.scss';

export default function Inventory() {
  const inventory = useSelector((state: RootState) => state.drink.inventory);
  const total: number = inventory.reduce((acc: number, cur) => {
    return acc + cur.count;
  }, 0);

  return (
    <div className="inventory">
      <div className="inventory--title">My Inventory</div>
      <div className="inventory--showstock">
        <span>x</span>
        <span>{total}</span>
      </div>
      <div className="inventory--drinks">
        {inventory.map(drink => {
          return (
            <DrinkCount
              key={drink.name}
              name={drink.name}
              count={drink.count}
            />
          );
        })}
        <div className="drinkdummy" />
        <div className="drinkdummy" />
      </div>
    </div>
  );
}
