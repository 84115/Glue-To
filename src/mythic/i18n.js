import * as locale from '../locales'
import { merge } from 'ramda'
import store from "mythic/store"

let env = store('env')

if (!(env().i18n) || !(env().i18n.lang))
{
	let opts = { "i18n": { "lang": "en" } }
	env(merge(env(), opts))
}

let i18n = tag => {
    let defaultLang = "en"
    let activeLang = env().i18n.lang

    let translations = {
        "de": locale.De,
        "en": locale.En,
        "fr": locale.Fr,
    }

    let useDefault = tag => (translations[defaultLang][tag] ?
        translations[defaultLang][tag] :
        tag)

    let lookup = (translations[activeLang] ?
        translations[activeLang][tag] :
        useDefault(tag))

    return (lookup ? lookup : useDefault(tag))
}

export default i18n
