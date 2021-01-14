import { combineReducers } from 'redux';
import money from './money';
import drink from './drink';

const rootReducer = combineReducers({ money, drink });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
