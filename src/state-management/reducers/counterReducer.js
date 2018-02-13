//  Define your reducers here

import * as types from './../actionTypes';


export const incrementCounterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }
};
