import { request } from 'mythic/core'
import { curry } from 'ramda'

let api = curry((url="", method="GET", callback=(f => f)) =>
    request({
    	method: method,
    	url: url,
    	data: (method == "POST" ? callback() : null)
    })
    .then(callback)
    .catch(console.warn))

export default api
