import { map, nth, curry, filter, propEq, indexBy, prop, when, defaultTo, mapObjIndexed, values, omit, objOf, compose } from 'ramda'
import { h3, br, form, input, label, div, option, select, main, a, h5, p, hr, route } from 'mythic/markup'
import { stream, redraw, node } from 'mythic/core'
import api from 'mythic/api'
import persist from 'mythic/persist'

let lex = (callback, ...data) => callback(...data)


/// attr :: Node -> Attribute -> String
/// ===================================
/// Returns an Attribute from a Node
let attr = curry((attr, node) => node.attrs[attr])


/// id :: Node -> String
/// ====================
/// Shorthand for reading
/// a Node 'id' Attribute
let id = node => attr('id', node)


/// streamFilm :: Stream
/// ====================
let streamFilm = stream({})

api('https://ghibliapi.herokuapp.com/films/', 'GET', data =>
    streamFilm(indexBy(prop('id'), data)))


/// submit :: String -> Node
/// ========================
/// Renders a form submit
let submit = name => input({ type: "submit", value: name })


/// editable :: (String, String) -> Node
/// ====================================
/// Renders a editable form input
let editable = (key, value) => div({ class: 'form-control' }, [
    label({ for: key }, key),
    br(),
    input({ id: key, name: key, type: "text", value: value }),
    br(),
    br()])


/// filmNode :: Node -> Node
/// ========================
/// Renders an editable
/// film component
let filmNode = film => values(mapObjIndexed((value, key) =>
    editable(key, value), omit(['id', 'people', 'species', 'locations', 'vehicles', 'url'], film)))


/// ifElse :: a, b, data -> c | b
/// =============================
/// ...
let ifElse = (a, b, data) => (data ? a(data) : b)


/// formNode :: Node -> Node
/// ========================
/// Render the Form content
let formNode = node => form({ id: 'example-form' }, lex(nid => div([
    h3("Edit Film"),
    h5(nid),
    ifElse(
        filmNode,
        div(p("Loading...")),
        prop(nid, streamFilm())),
    submit("Save"),
    p(route("ajax", "View All"))
    ]), id(node)))


////// Node
////// ====
export default formNode
