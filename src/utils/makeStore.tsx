import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { RootState } from '@/modules';

function makeStore(ui: React.ReactNode, initialState?: RootState) {
  const store = createStore(rootReducer, initialState);
  return <Provider store={store}>{ui}</Provider>;
}

export default makeStore;
