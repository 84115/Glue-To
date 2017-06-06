import { request, route, stream } from 'mythic/core'
import { main, a, div, h4, p, hr } from 'mythic/markup'
import { curry, map } from 'ramda'

let cache = {
    "id": "0",
    "title": "N/A",
    "description": "N/A",
    "director": "N/A",
    "producer": "N/A",
    "release_date": "0000",
    "rt_score": "0",
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"}

let films = stream([cache])

let api = curry((url, method, callback, data=null) =>
    request({method: method, url: url, data: data})
    .then(callback)
    .catch(console.warn))

let filmApi = api('https://ghibliapi.herokuapp.com/films/', 'GET', films)

let film_item = film => [
    h4(film.title),
    p(`Director: ${film.director}`),
    p(`Producer: ${film.producer}`),
    p(`Release: ${film.release_date}`),
    p(`Score: ${film.rt_score}%`),
    a({href: `${film.url}`}, 'source'),
    hr()]

let ajaxv2 = node => main(div({class: "films"}, map(film_item, films())))

export default ajaxv2
