import { fetchItems } from './Client'

//let items = [
//  {
//    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos",
//    email: "Eliseo@gardner.biz",
//    id: 1,
//    name: "id labore ex et quam laborum",
//    postId: 1
//  },
//  {
//    body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla",
//    email: "Carmen_Keeling@caroline.name",
//    id: 10,
//    name: "eaque et deleniti atque tenetur ut quo ut",
//    postId: 2,
//  }
//]

describe('fetchItems', () => {
  //it('returns items from the API as an array of objects', async (done) => {
  //  try {
  //    expect(fetchItems()).toEqual(items)
  //  }
  //  catch(e) { done.fail(e) }
  //})
  it('returns one hardwired item', () => {
    try {
      expect(fetchItems()).toEqual([{ name: 'client wifflebat' }])
    } catch (e) {
      done.fail(e)
    }
  })
})
