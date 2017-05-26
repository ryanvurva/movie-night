const KEY = 'b26f35bb01f358b949a4f13ae6280b20'
const API_BASE = 'https://api.themoviedb.org/3'

const get = (path, query) => {
  let url = API_BASE + path + '?api_key=' + KEY
  if (query) {
    url += '&query=' + query + '&include_adult=false'
  }
  return window.fetch(url).then((response) => {
    return response.json()
  })
}

// get('movie/popular').then((data) => {
//   console.log(data)
// })

// const post = (path, body) => {
//   const url = API_BASE + path + '?api_key=' + KEY
//   return window.fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }).then((response) => {
//     return response.json()
//   })
// }

export { get }
