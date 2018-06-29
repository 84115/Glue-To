import m from 'mithril'

import store from "mythic/store"
import i18n from "mythic/i18n"
import persist from 'mythic/persist'
import api from "mythic/api"

import stream from 'mithril-stream'

import { curry, map, objOf, merge, keys, replace } from 'ramda'
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

let lex = (callback, ...data) => callback(...data)


/// attr :: Node -> Attribute -> String
/// ===================================
/// Returns an Attribute from a Node
let attr = curry((attr, node) => node.attrs[attr])


/// nodeIfElse :: a, b, data -> c | b
/// =================================
/// ...
let nodeIfElse = (a, b, data) => (data ? a(data) : b)


let http = api


export { node, mount, redraw, request, route, stream, persist, store, i18n, lex, attr, http, nodeIfElse }
