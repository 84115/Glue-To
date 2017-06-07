import { dom, route } from 'mythic/core'

import { keys, head } from 'ramda'

import stack from 'routes/stack'
import persist from 'routes/persist'
import edit from 'routes/edit'
import ajax from 'routes/ajax'
import ajaxv2 from 'routes/ajax-v2'
import demo from 'routes/demo'
import user_api from 'routes/api/user'

let routes = {
  "": { view: stack },
  "/stack": { view: stack },
  "/persist": { view: persist },
  "/ajax": { view: ajax },
  "/ajax-v2": { view: ajaxv2 },
  "/demo": { view: demo },
  "/edit/:id": { view: edit },
  "/api/users/:id": { view: user_api }
}

route(dom.id('content'), keys(head(routes)), routes)
