import React from 'react';
import NeonSign from '@commons/NeonSign';
import MoneyDisplay from '@commons/MoneyDisplay';
import ReturnButton from '@commons/ReturnButton';
import CoinEnter from '@commons/CoinEnter';
import { ReturnDoor } from '@commons/ReturnDoor';
import '@scss/layouts/MachineLayout/MachineMiddle.scss';

export default function MachineMiddle() {
  return (
    <div className="machinemiddle">
      <NeonSign />
      <div className="machinemiddle__right">
        <MoneyDisplay />
        <div className="coin__container">
          <CoinEnter />
          <ReturnButton />
        </div>
        <ReturnDoor doorType="money" />
      </div>
    </div>
  );
}
