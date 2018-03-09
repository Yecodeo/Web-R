import { combineReducers } from 'redux';

import demoReducer from './demo';

const allReducers = combineReducers({
  demo: demoReducer,
});

export default allReducers;
