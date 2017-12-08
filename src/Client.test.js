import { fetchItems } from './Client'

describe('fetchItems', () => {
  it('returns one hardwired item', () => {
    try {
      expect(fetchItems()).toEqual([{ name: 'client wifflebat' }])
    } catch (e) {
      done.fail(e)
    }
  })
})
