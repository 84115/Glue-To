import { dom, route } from 'mythic/core'

import stack from 'routes/stack'
import edit from 'routes/edit'
import user_api from 'routes/api/user'

route(dom.id('content'), "/stack", {
	"/stack": { view: stack },
	"/edit/:id": { view: edit },
	"/api/users/:id": { view: user_api }
})
