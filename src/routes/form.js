import { map, prop, mapObjIndexed, values, omit, objOf } from 'ramda'
import { h3, br, form, input, label, div, main, a, h5, p, route } from 'mythic/markup'
import { stream, redraw, node, i18n, lex, attr, store, nodeIfElse } from 'mythic/core'


/// streamFilm :: Stream
/// ====================
let streamFilm = store('film')


/// submit :: String -> Node
/// ========================
/// Renders a form submit
let submit = name => input({ type: "submit", value: name })


/// editable :: (String, String) -> Node
/// ====================================
/// Renders a editable form input
let editable = (key, value) => div({ class: 'form-control' }, [
    label(objOf("for", key), key),
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


/// formNode :: Node -> Node
/// ========================
/// Render the Form content
let formNode = node => form({ id: 'example-form' }, lex(id => div([
    h3("Edit Film"),
    h5(id),
    nodeIfElse(
        filmNode,
        div(p(i18n("film.text.not-found"))),
        prop(id, streamFilm())),
    submit(i18n("shared.save")),
    p(route("ajax", i18n("shared.view-all")))
    ]), attr('id', node)))


////// Node
////// ====
export default formNode
