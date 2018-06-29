import { a, p, h1, h2, h3, h4, h5, h6, div, route } from 'mythic/markup'
import store from "mythic/store"
import { has, merge, prop, objOf } from 'ramda'

let lex = (callback, ...data) => callback(...data)

let defineEnv = (key, opts, store) =>
	(!has(key, store()) ?
		store(merge(env(), objOf(key, opts))) :
		undefined)

let env = store('env')

defineEnv('user', {
	"uuid": "a6d64873-abe1-4a76-b249-8eef970184ff",
	"firstname": "Joe",
	"surname": "Bloggs",
	"age": 32
}, env)


let edit = node => lex(user => div([
    h1(`${user.firstname} ${user.surname}`),
    h4(user.age),
    h6(`Lookup: "${node.attrs.id}"`),
    p(route("conf", "Edit")),
    p(route("", "Home"))
    ]), prop('user', env()))

export default edit
