import m from 'mithril'
import stream from 'mithril-stream'
import { map, objOf, merge, keys, replace } from 'ramda'
import { ul, li, a } from 'mythic/markup'

let node = m
let mount = node.mount
let redraw = node.redraw
let request = node.request

let mapGenNode = routes => node =>
	ul(map(route =>
		li(a(objOf("href", `/?#!${replace(/\:/g, '@', route)}`), route)), keys(routes)))

let route = (element, routes) =>
	node.route(element, "", map(
		objOf("view"),
		merge(objOf("", mapGenNode(routes)), routes)))

export { node, mount, redraw, request, route, stream }
