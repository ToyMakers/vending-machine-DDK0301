import React from 'react';
import Wallet from '@layouts/CoinLayout/Wallet';
import Inventory from '@layouts/DrinkLayout/Inventory';

export default function UserStateContainer() {
  return (
    <div className="userstate__container">
      <Wallet />
      <Inventory />
    </div>
  );
}
