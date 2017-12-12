//const API_URL = 'http://jsonplaceholder.typicode.com/comments'
//export const fetchItems = () => fetch(API_URL).then(response => response.json())

const delayIt = value => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), 2000)
  })
}
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

export const fetchItems = () => Promise.resolve(items).then(delayIt)

export default { fetchItems }
