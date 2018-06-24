import { request, route, stream } from 'mythic/core'
import { main, div, h4, p } from 'mythic/markup'
import { map } from 'ramda'

let users = stream([])

request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/feed/"
}).then((data) => users(data))

let user_item = user => [
	h4(user.name),
	p(user.id),
	p(user.email),
	p(user.phone)]

let home = node => main(div({class: "user"}, map(user_item, users())))

export default home

// setInterval(() => request({
// }).then((data) => users(data)), 25)
