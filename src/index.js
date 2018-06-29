import { route } from 'mythic/core'
import * as to from './routes'

route(document.getElementById('content'), {
    "/stack": to.Stack,
    "/user": to.User,
    "/user/:id": to.User,
    "/ajax": to.AjaxV2,
    "/form/:id": to.Form,
    "/people/:field/:job": to.Form,
    "/svg": to.Svg,
    "/faker": to.Faker,
    "/table": to.Table,
    "/todo": to.Todo,
    "/conf": to.Conf
    })
