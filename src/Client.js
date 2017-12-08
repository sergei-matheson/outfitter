const api_url = 'http://jsonplaceholder.typicode.com/comments'

//export const fetchItems = () => fetch(api_url).then(response => response.json())
export const fetchItems = () => [{ name: 'client wifflebat' }]

export default { fetchItems }
