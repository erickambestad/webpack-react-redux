export const LOAD_ALL_ITEMS = 'LOAD_ALL_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function loadAllItems(items) {
  return {
    type: LOAD_ALL_ITEMS,
    items
  }
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function editItem(item) {
  return {
    type: EDIT_ITEM,
    item
  }
}

export function deleteItem(item) {
  return {
    type: DELETE_ITEM,
    item
  }
}
