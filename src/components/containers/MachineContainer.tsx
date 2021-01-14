import React from 'react';
import ShowCase from '@layouts/MachineLayout/ShowCase';
import MachineMiddle from '@layouts/MachineLayout/MachineMiddle';
import MachineBottom from '@layouts/MachineLayout/MachineBottom';
import '@scss/containers/MachineContainer.scss';

export default function MachineContainer() {
  return (
    <div className="machine">
      <div className="container">
        <ShowCase />
        <MachineMiddle />
        <MachineBottom />
      </div>
      <div className="machine__leg">
        <div className="leg" />
        <div className="leg" />
      </div>
    </div>
  );
}
