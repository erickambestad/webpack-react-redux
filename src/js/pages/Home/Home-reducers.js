'use strict';

import {
  LOAD_ALL_ITEMS,
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM
} from './Home-actions';

var initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_ALL_ITEMS:
      let newLoadItemState = {...state};
      newLoadItemState.items = action.items;
      return newLoadItemState;
    break;
    case ADD_ITEM:
      return state;
    break;
    case EDIT_ITEM:
      return state;
    break;
    case DELETE_ITEM:
      return state;
    break;
    default:
      return state;
  }
};
