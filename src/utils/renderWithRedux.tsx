import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '@/modules';
import { DrinkState } from '@/modules/drink';
import { MoneyState } from '@/modules/money';

type TestState = {
  drink?: DrinkState;
  money?: MoneyState;
};

function renderWithRedux(ui: React.ReactNode, initialState?: TestState) {
  const store = createStore(rootReducer, initialState);
  render(<Provider store={store}>{ui}</Provider>);
  return store;
}

export default renderWithRedux;
