import { request } from 'mythic/core'
import { curry } from 'ramda'

let api = curry((url, method, callback, data=null) =>
    request({method: method, url: url, data: data})
    .then(callback)
    .catch(console.warn))

export default api
