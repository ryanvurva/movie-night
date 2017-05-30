const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTYwODI5NzQsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqMnFjaHNtaTZ0MDYwMTAzNG8xaW9zaDgiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqM2FoNmI4NW02dGowMTMwejJ3ZXRpcTQifQ.lz4tXTqyzwmesB3JbP-TSlRD_JHcaqWxoQeH9wsMfgc'
const API_BASE = 'https://api.graphcms.com/simple/v1/movienight'

const get = (path, query) => {
  let url = API_BASE + path + '?api_key=' + TOKEN
  if (query) {
    url += '&query=' + query + '&include_adult=false'
  }
  return window.fetch(url).then((response) => {
    return response.json()
  })
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

export { get }
