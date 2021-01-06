import { combineReducers } from 'redux';
import money from './money';

const rootReducer = combineReducers({ money });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
