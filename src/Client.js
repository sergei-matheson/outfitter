const API_URL = 'http://jsonplaceholder.typicode.com/comments'
export const fetchItems = () => fetch(API_URL).then(response => response.json())

export default { fetchItems }
