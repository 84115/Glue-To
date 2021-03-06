import { request, route, stream } from 'mythic/core'
import store from 'mythic/store'
import persist from 'mythic/persist'
import { main, a, div, h4, p, hr } from 'mythic/markup'
import { map } from 'ramda'
import api from 'mythic/api'

/// filmCache :: Array -> Object
/// ============================
/// ...
let filmCache = [{
    "id": "0",
    "title": "N/A",
    "description": "N/A",
    "director": "N/A",
    "producer": "N/A",
    "release_date": "0000",
    "rt_score": "0",
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"}]


/// filmStore :: Node -> Attribute -> String
/// ========================================
/// ...
let filmStore = persist(store('films'), filmCache)


/// api :: String -> String -> Stream -> Stream
/// ===========================================
/// Fetchs an update and updates the film Stream
api('https://ghibliapi.herokuapp.com/films/', 'GET', filmStore)


/// filmItem :: Node -> Node
/// ========================
/// Renders a static
/// film component
let filmItem = film => [
    h4(film.title),
    p(`Director: ${film.director}`),
    p(`Producer: ${film.producer}`),
    p(`Release: ${film.release_date}`),
    p(`Score: ${film.rt_score}%`),
    a({href: `${film.url}`}, 'source'),
    hr()]


/// ajaxV2 :: Node -> Node
/// ======================
/// Render the Ajax content
let ajaxV2 = node => main(div({class: "films"}, map(filmItem, filmStore())))


export default ajaxV2
