const API_BASE = 'https://api.graphcms.com/simple/v1/movienight'

const query = (query) => {
  return window.fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query {
        ${query}
      }`
    })
  }).then(r => r.json())
}

const mutation = (mutation) => {
  return window.fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `mutation {
        ${mutation}
      }`
    })
  }).then(r => r.json())
}

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

export { query, mutation }
