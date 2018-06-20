import { router } from 'mythic/core'

import stack from 'routes/stack'
import edit from 'routes/edit'

import demo from 'routes/demo'
import form from 'routes/form'

import ajaxv2 from 'routes/ajax-v2'

import svg from 'routes/svg'

router(document.getElementById('content'), {
    "": ajaxv2,
    "/stack": stack,
    "/edit/:id": edit,
    "/ajax": ajaxv2,
    "/form/:id": form,
    "/svg": svg
})
