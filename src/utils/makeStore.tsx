import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '@/modules';
import { DrinkState } from '@/modules/drink';
import { MoneyState } from '@/modules/money';

type TestState = {
  drink?: DrinkState;
  money?: MoneyState;
};

function makeStore(ui: React.ReactNode, initialState?: TestState) {
  const store = createStore(rootReducer, {
    ...initialState,
  });
  return <Provider store={store}>{ui}</Provider>;
}

export default makeStore;
