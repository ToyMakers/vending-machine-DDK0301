import React from 'react';
import MachineContainer from '@containers/MachineContainer';
import UserStateContainer from '@containers/UserStateContainer';
import '@scss/App.scss';

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <MachineContainer />
        <UserStateContainer />
      </div>
    </div>
  );
}

export default App;
