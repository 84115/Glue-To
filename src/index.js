import { dom, route } from 'mythic/core'

import { keys, head } from 'ramda'

import stack from 'routes/stack'
import edit from 'routes/edit'
import user_api from 'routes/api/user'

let routes = {
  "/": { view: stack },
  "/stack": { view: stack },
  "/edit/:id": { view: edit },
  "/api/users/:id": { view: user_api }
}

route(dom.id('content'), keys(head(routes)), routes)
