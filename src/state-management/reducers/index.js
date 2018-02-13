// Global imports
import { combineReducers } from 'redux';

// Local Reducers
import { incrementCounterReducer } from './counterReducer';

export default combineReducers({
  count: incrementCounterReducer,
});
