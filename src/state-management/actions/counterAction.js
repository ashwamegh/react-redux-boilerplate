//  Define your action creators here

import * as types from './../actionTypes';

export const incrementCounterAction = (payload) => ({
  type: types.INCREMENT,
  payload,
})
;
