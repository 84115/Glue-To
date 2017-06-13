import { map } from 'ramda'
import { h1, br, form, input, label, div } from 'mythic/markup'

let group = node => div({ class: 'form-control' }, node)

let field = name => group([
	div(label({ for: name }, name)),
	div(input({ type: "password", id: name }))])

let submit = name => input({ type: "submit", value: name })

let formHtml = node => form([
	h1('Form'),
	map(field, ['name', 'id']),
	submit('Go!')
	])

export default formHtml
