import { request, route, stream } from 'mythic/core'
import store from 'mythic/store'
import persist from 'mythic/persist'
import { main, a, div, h4, p, hr, input, label } from 'mythic/markup'
import { curry, map, length } from 'ramda'
import api from 'mythic/api'

let movieTemplate = {
    "id": "0",
    "title": "N/A",
    "description": "N/A",
    "director": "N/A",
    "producer": "N/A",
    "release_date": "0000",
    "rt_score": "0",
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"}

let storage = store('movies')
// make persist load storage if set else []
let moviesStore = persist(storage)

// moviesStore([movieTemplate])
window.moviesStore = moviesStore

api('https://ghibliapi.herokuapp.com/films/', 'GET', moviesStore)

let film_item = film => [
    h4(film.title),
    p(`Director: ${film.director}`),
    p(`Producer: ${film.producer}`),
    p(`Release: ${film.release_date}`),
    p(`Score: ${film.rt_score}%`),
    a({href: `${film.url}`}, 'source'),
    hr()]

let ajaxv2 = node => main(div({class: "films"}, map(film_item, moviesStore())))

export default ajaxv2
