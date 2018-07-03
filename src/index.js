import { route } from 'mythic/core'
import * as to from './routes'

route(document.getElementById('content'), {
    "/stack": to.Stack,
    "/user": to.User,
    "/user/:id": to.User,
    "/ajax": to.AjaxV2,
    "/i18n": to.I18n,
    "/i18n/:id": to.I18n,
    "/people/:field/:job": to.Form,
    "/svg": to.Svg,
    "/faker": to.Faker,
    "/table": to.Table,
    "/todo": to.Todo,
    "/conf": to.Conf
    })
