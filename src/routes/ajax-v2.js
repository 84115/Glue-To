// import { stream } from "mythic/core"
import store from 'mythic/store'
import { main, button, a, div, h3, h4, p, hr,  route } from "mythic/markup"
import api from "mythic/api"
import { map, objOf, indexBy, prop, values, compose } from "ramda"
import i18n from "mythic/i18n"


let onClick = objOf("onclick")


// let streamFilm = stream({})
let streamFilm = store('film')


/// filmNode :: Node -> Node
/// ========================
let filmNode = film => [
    h4(i18n("film.text.title") + `: ${film.title}`),
    p(i18n("film.text.director") + `: ${film.director}`),
    p(i18n("film.text.producer") + `: ${film.producer}`),
    p(i18n("film.text.release") + `: ${film.release_date}`),
    p(i18n("film.text.score") + `: ${film.rt_score}%`),
    p(i18n("film.text.description") + `: ${film.description}`),
    p(a({ href: film.url }, i18n("film.link.source"))),
    p(route(`form/${film.id}`, i18n("film.link.edit"))),
    hr()]


let ajaxv2 = node => main([
    h3(i18n("film.heading.title")),
    p(button(onClick(event =>
        api("https://ghibliapi.herokuapp.com/films/", "GET", data =>
            streamFilm(indexBy(prop('id'), data)))), i18n("film.button.fetch"))),
    hr(),
    div({ class: "films" }, map(filmNode, values(streamFilm())))])


export default ajaxv2
