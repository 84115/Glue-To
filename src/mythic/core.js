import m from 'mithril'
import stream from 'mithril-stream'
import { map, objOf } from 'ramda'

let mount = m.mount

let redraw = m.redraw

let router = (element, routes) => m.route(element, "", map(objOf("view"), routes))

let node = m

let request = m.request

export { redraw, node, mount, router, stream, request }
