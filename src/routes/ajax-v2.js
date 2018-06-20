import { stream } from 'mythic/core'
import { main, button, a, div, h3, h4, p, hr } from 'mythic/markup'
import api from 'mythic/api'
import { map, indexBy, prop, values } from 'ramda'


/// streamFilm :: Stream
/// ====================
let cache = [{
    "id": "...",
    "title": "...",
    "description": "...",
    "director": "...",
    "producer": "...",
    "release_date": "...",
    "rt_score": "0",
    "url": "..."}]

let streamFilm = stream(cache)

api('https://ghibliapi.herokuapp.com/films/', 'GET', data => streamFilm(indexBy(prop('id'), data)))

/// filmNode :: Node -> Node
/// ========================
let filmNode = film => [
    h4(film.title),
    p(`Director: ${film.director}`),
    p(`Producer: ${film.producer}`),
    p(`Release: ${film.release_date}`),
    p(`Score: ${film.rt_score}%`),
    p(`Description: ${film.description}`),
    p(a({href: `${film.url}`}, 'source')),
    p(a({href: `/?#!/form/${film.id}`}, 'edit')),
    hr()]

let ajaxv2 = node => main([
    h3("Browse Films"),
    p(button({ onclick: console.log }, "fetch")),
    hr(),
    div({ class: "films" }, map(filmNode, values(streamFilm())))])

export default ajaxv2
