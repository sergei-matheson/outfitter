import { fetchItems } from './Client'
import fetchMock from 'fetch-mock'

const items = [
  {
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos',
    email: 'Eliseo@gardner.biz',
    id: 1,
    name: 'id labore ex et quam laborum',
    postId: 1
  },
  {
    body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla',
    email: 'Carmen_Keeling@caroline.name',
    id: 10,
    name: 'eaque et deleniti atque tenetur ut quo ut',
    postId: 2
  }
]

describe('fetchItems', () => {
  it('returns items from the API as an array of objects', async () => {
    fetchMock.get(
      'http://jsonplaceholder.typicode.com/comments',
      JSON.stringify(items)
    )
    return expect(await fetchItems()).toEqual(items)
  })
})
