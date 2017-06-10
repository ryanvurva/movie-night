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

export { get }
