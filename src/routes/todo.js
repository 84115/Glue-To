import { node, route, stream } from 'mythic/core'

import {
	ul, li,
	form,
	div,
	input, select, option, button } from 'mythic/markup'

import {
	filter,
	keys,
	length,
	map, mapObjIndexed,
	objOf,
	prop, propEq,
	sortBy,
	times,
	values,
	unary } from 'ramda'

let todos = stream([])

let todo = (value="") => ({
	"id": length(todos()),
	"value": value,
	"done": false
	})

let todoNode = node => div([
	button({
		"onclick": e => todos().push(todo())
		}, "Add"),

	ul(map(todo =>
		li([
			input({
				"type": "text",
				"disabled": (todo.done ? "disabled" : ""),
				"value": todo.value
				}),
			input({
				"type": "checkbox",
				"checked": (todo.done ? "checked" : "")
				}),
			button("X")
			]), todos()))
	])

export default todoNode
