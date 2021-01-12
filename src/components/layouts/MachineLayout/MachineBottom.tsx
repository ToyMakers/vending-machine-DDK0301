import React from 'react';
import { ReturnDoor } from '@commons/ReturnDoor';
import Cooler from '@commons/Cooler';
import '@scss/layouts/MachineLayout/MachineBottom.scss';

export default function MachineBottom() {
  return (
    <div className="machinebottom">
      <ReturnDoor doorType="drink" />
      <Cooler />
    </div>
  );
}
