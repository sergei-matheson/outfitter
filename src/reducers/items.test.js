import items from './items'

describe('addItem', () => {
  let action = { type: 'ADD_ITEM', item: { name: 'the item name', id: 12 } }

  let initialState = { itemsById: {}, itemIds: [] }
  let finalState = items(initialState, action)

  it('adds the item to the items by id', () => {
    let { itemsById } = finalState
    expect(itemsById[12]).toEqual({ id: 12, name: 'the item name' })
  })

  it('adds the id of the item to the list of item ids', () => {
    let { itemIds } = finalState
    expect(itemIds).toContain(12)
  })
})
