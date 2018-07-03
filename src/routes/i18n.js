import { p, h1, h2, h3, h4, h5, h6, div, route } from 'mythic/markup'
import { store, lex, mergeConf } from "mythic/core"
import { prop } from 'ramda'

let conf = mergeConf('i18n', {
    "lang": "en",
    "currency": "GBP"
})

console.log(conf)

let i18n = node => lex(i18n => div([
    h3(`Currency: ${i18n.currency}`),
    h4(`Language: ${i18n.lang}`),
    h6(`Lookup: "${node.attrs.id}"`),
    p(route("conf", "Edit")),
    p(route("", "Home"))
    ]), prop('i18n', conf))


export default i18n
