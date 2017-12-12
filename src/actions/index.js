export const TOGGLE_ITEM_TRANSLATION = 'TOGGLE_ITEM_TRANSLATION'
export const ADD_ITEM = 'ADD_ITEM'

let nextItemId = 0

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item: { ...item, id: nextItemId++ }
  }
}

export function toggleItemTranslation(item) {
  return {
    type: TOGGLE_ITEM_TRANSLATION,
    item: item.id
  }
}
