import { p, h1, h2, h3, h4, h5, h6, div, route } from 'mythic/markup'
import { store, lex, mergeConf } from "mythic/core"
import { prop } from 'ramda'


let conf = mergeConf('user', {
	"uuid": "a6d64873-abe1-4a76-b249-8eef970184ff",
	"firstname": "Joe",
	"surname": "Bloggs",
	"age": 32
})

let edit = node => lex(user => div([
    h1(`${user.firstname} ${user.surname}`),
    h4(user.age),
    h6(`Lookup: "${node.attrs.id}"`),
    p(route("conf", "Edit")),
    p(route("", "Home"))
    ]), prop('user', conf()))


export default edit
