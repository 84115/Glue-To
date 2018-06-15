import { map, nth, curry, filter, propEq, indexBy, prop, when, defaultTo, mapObjIndexed, values, omit } from 'ramda'
import { h3, br, form, input, label, div, option, select, main, a, h5, p, hr } from 'mythic/markup'
import { stream, redraw } from 'mythic/core'
import api from 'mythic/api'
import store from 'mythic/store'
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


/// submitButton :: String -> Node
/// ==============================
/// Renders a form submit
let submitButton = name => input({ type: "submit", value: name })


/// editable :: (String, String) -> Node
/// ====================================
/// Renders a editable form input
let editable = (key, value) => div({ class: 'form-control' }, [
    label({ for: key }, key),
    br(),
    input({ id: key, name: key, type: "text", value: value }),
    br(),
    br()])


/// nodeFilm :: Node -> Node
/// ========================
/// Renders an editable
/// film component
let nodeFilm = film => values(mapObjIndexed((value, key) =>
    editable(key, value), omit(['id', 'people', 'species', 'locations', 'vehicles', 'url'], film)))

let nodeStream = (a, b, data) => (data ? a(data) : b)


/// formHtml :: Node -> Node
/// ========================
/// Render the Form content
let formHtml = node => form({ id: 'example-form' }, div([
    h3("Edit Film"),
    h5(id(node)),
    // lex(film => film ? nodeFilm(film) : div("..."),
    //     prop(id(node), streamFilm())),
    nodeStream(
        nodeFilm,
        div("..."),
        prop(id(node), streamFilm())),
    submitButton("Save"),
    p(a({ href: "/?#!/ajax/" }, "list"))
    ]))


export default formHtml
