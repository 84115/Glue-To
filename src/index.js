import { dom, route } from 'mythic/core'

import { keys, head } from 'ramda'

import stack from 'routes/stack'
import persist from 'routes/persist'
import edit from 'routes/edit'
import paginate from 'routes/paginate'
import ajax from 'routes/ajax'
import ajaxv2 from 'routes/ajax-v2'
import demo from 'routes/demo'
import form from 'routes/form'
import user_api from 'routes/api/user'
import Maybe from 'maybe'

let routes = {
    "": { view: stack },
    "/stack": { view: stack },
    "/persist": { view: persist },
    "/paginate": { view: paginate },
    "/ajax": { view: ajax },
    "/ajax-v2": { view: ajaxv2 },
    "/demo": { view: demo },
    "/form/:id": { view: form },
    "/edit/:id": { view: edit },
    "/api/users/:id": { view: user_api }}

console.log(true, Maybe(true), Maybe(true).isJust(), Maybe(true).isNothing())
console.log(false, Maybe(false), Maybe(false).isJust(), Maybe(false).isNothing())
console.log(null, Maybe(null), Maybe(null).isJust(), Maybe(null).isNothing())
console.log(undefined, Maybe(undefined), Maybe(undefined).isJust(), Maybe(undefined).isNothing())
console.log(NaN, Maybe(NaN), Maybe(NaN).isJust(), Maybe(NaN).isNothing())
console.log(0, Maybe(0), Maybe(0).isJust(), Maybe(0).isNothing())
console.log(1, Maybe(1), Maybe(1).isJust(), Maybe(1).isNothing())
console.log([], Maybe([]), Maybe([]).isJust(), Maybe([]).isNothing())
console.log([0], Maybe([0]), Maybe([0]).isJust(), Maybe([0]).isNothing())
console.log([1], Maybe([1]), Maybe([1]).isJust(), Maybe([1]).isNothing())
console.log("", Maybe(""), Maybe("").isJust(), Maybe("").isNothing())
console.log("a", Maybe("a"), Maybe("a").isJust(), Maybe("a").isNothing())

route(dom.id('content'), keys(head(routes)), routes)
