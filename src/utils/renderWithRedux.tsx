import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { RootState } from '@/modules';

function renderWithRedux(ui: React.ReactNode, initialState?: RootState) {
  const store = createStore(rootReducer, initialState);
  render(<Provider store={store}>{ui}</Provider>);
  return store;
}

export default renderWithRedux;
