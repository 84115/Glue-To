import { head, map, nth, inc, dec, clamp, length, curry } from 'ramda'
import { h1, br, form, input, label, div, option, select, main, a, h4, p, hr } from 'mythic/markup'
import { capitalise } from 'mythic/string'
import api from 'mythic/api'
import store from 'mythic/store'
import persist from 'mythic/persist'


/// attr :: Node -> Attribute -> String
/// ===================================
/// Returns an Attribute from a Node
let attr = curry((node, attr) => node.attrs[attr])


/// id :: Node -> String
/// ====================
/// Shorthand for reading
/// a Node 'id' Attribute
let id = node => attr(node, 'id')


/// absolute :: Interger -> Interger
/// ================================
/// Converts an interger
/// into its absolute value
let absolute = Math.abs


/// filmStore :: Persist
/// ======================
let filmStore = persist(store('films'))


/// totalFilms :: Interger
/// =======================
/// Gets the counts of films
let totalFilms = length(filmStore())


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


/// filmItem :: Node -> Node
/// ========================
/// Renders an editable
/// film component
let filmItem = film => [
    editable('Film', film.title),
    editable('Director', film.director),
    editable('Producer', film.producer),
    editable('Release', film.release_date),
    editable('Score', film.rt_score),
    editable('Url', film.url)]


/// browseFilms :: (Node, Function) -> String
/// ==========================================
/// This function is difficult to read
let browseFilms = (node, operator) => absolute(clamp(0, totalFilms, operator(id(node))))


/// formHtml :: Node -> Node
/// ========================
/// Render the Form content
let formHtml = node => form({ id: 'example-form' }, [
	h1(`Edit Film (${id(node)})`),
	filmItem(nth(id(node), filmStore())),
	submitButton('Save'),
	hr(),
	a({ href: `/?#!/form/${browseFilms(node, dec)}` }, 'prev'),
	a({ href: `/?#!/form/${browseFilms(node, inc)}` }, 'next'),
	a({ href: `/?#!/demo/` }, 'list')])


export default formHtml
