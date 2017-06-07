import { stream } from 'mythic/core'
import store from 'mythic/store'
import persist from 'mythic/persist'
import { main, a, div, h4, p, hr, input, label } from 'mythic/markup'
import { curry, map, length } from 'ramda'

let storage = store('todos')
let todos = persist(storage)

// todos([1,2,3,4,5,6])

window.todos = todos

let todo_item = todo => [div(
    input({type: "checkbox", id: "todo" + todo}, "lol"),
    label({for: "todo" + todo}, todo + ": Check it!")
    )]

let todo_view = node => main(map(todo_item, todos()))

export default todo_view
