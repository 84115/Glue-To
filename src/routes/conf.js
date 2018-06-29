import { node, store, lex } from 'mythic/core'
import { h1, h3, form, input, label, div, a, hr, route } from 'mythic/markup'
import { assocPath, keys, merge, map, prop, objOf } from 'ramda'

let env = store('env')


/// editable :: (String, String) -> Node
/// ====================================
/// Renders a editable form input
let editable = (key, value, group) => div(objOf('class', 'form-control'), [
    label(objOf('for', key), key),
    input({
    	id: key,
    	name: key,
    	type: "text",
    	value: value,
    	onkeyup: node.withAttr("value", value =>
    		env(merge(env(), assocPath((group + "-" + key).split('-'), value, env()))))
    })])


/// envNode :: Node -> Node
/// =======================
let envNode = node => div([
	h1("app.user.conf"),
	hr(),
	map(group => [
		h3(group),
		lex(setting =>
			map(value =>
				editable(value, prop(value, setting), group), keys(setting)),
			prop(group, env())),
		hr()
		], keys(env()))])


////// Node
////// ====
export default envNode
