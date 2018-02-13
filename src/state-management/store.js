// Global imports
import { createStore } from 'redux';
import { extend } from 'lodash';

// Local imports
import rootReducer from './reducers/index';
import { loadState } from './localStorage';

export default createStore(rootReducer, extend(loadState()));
