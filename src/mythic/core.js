import m from 'mithril'
import stream from 'mithril-stream'

let mount = m.mount

let redraw = m.redraw

let route = m.route

let node = m

let dom = {
	id: document.getElementById.bind(document),
	class: document.getElementsByClassName.bind(document),
	query: document.querySelector.bind(document),
	name: document.getElementsByName.bind(document),
	tag: document.getElementsByTagName.bind(document)
}

let request = m.request

export { redraw, node, mount, route, dom, stream, request }
