import { stream } from 'mythic/core'
import store from 'mythic/store'
import persist from 'mythic/persist'
import { main, button, a, div, h3, h4, p, hr,  route } from 'mythic/markup'
import api from 'mythic/api'
import { map, objOf, indexBy, prop, values, compose } from 'ramda'


let onClick = objOf("onclick")


let streamFilm = stream([])


/// filmNode :: Node -> Node
/// ========================
let filmNode = film => [
    h4(film.title),
    p(`Director: ${film.director}`),
    p(`Producer: ${film.producer}`),
    p(`Release: ${film.release_date}`),
    p(`Score: ${film.rt_score}%`),
    p(`Description: ${film.description}`),
    p(a({ href: `${film.url}` }, 'source')),
    p(route(`form/${film.id}`, 'edit')),
    hr()]


let ajaxv2 = node => main([
    h3("Browse Films"),
    p(button(onClick(event =>
        api('https://ghibliapi.herokuapp.com/films/', 'GET', compose(prop('id'), indexBy, streamFilm))), "fetch")),
    hr(),
    div({ class: "films" }, map(filmNode, values(streamFilm())))])


export default ajaxv2
