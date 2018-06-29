import store from "mythic/store"
import { node } from 'mythic/core'
import { h1, h2, h3, h4, h5, h6, br, form, input, label, div, option, select, main, a, p, hr, route, ul, li } from 'mythic/markup'
import { assocPath, keys, tap, merge, map, forEach, nth, curry, filter, propEq, indexBy, prop, when, defaultTo, mapObjIndexed, values, omit, objOf, compose } from 'ramda'
import i18n from "mythic/i18n"

let env = store('env')

let lex = (callback, ...data) => callback(...data)


/// editable :: (String, String) -> Node
/// ====================================
/// Renders a editable form input
let editable = (key, value, group) => div({ class: 'form-control' }, [
    label({ for: key }, key),
    br(),
    input({
    	id: key,
    	name: key,
    	type: "text",
    	value: value,
    	onkeyup: node.withAttr("value", value => {
    		let path = (group + "-" + key).split('-')
			let diff = assocPath(path, value, env())

			console.log(path, value, diff, env())

			env(merge(env(), diff))
    	})
    }),
    br(),
    br()
    ])


/// submit :: String -> Node
/// ========================
/// Renders a form submit
let submit = name => input({ type: "submit", value: name })


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
		submit(i18n("shared.save")),
		hr()
		], keys(env()))])


////// Node
////// ====
export default envNode
