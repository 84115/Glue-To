import store from 'mythic/store'
import { a, p, h1, button, ul, li, main, hr, div, route } from 'mythic/markup'
import { compose, map, inc, length, range, init, append, objOf } from 'ramda'
import i18n from "mythic/i18n"

/// stack -> Object
/// ===============
let stack = store('stack')


/// onClick -> Object
/// =================
let onClick = objOf("onclick")


/// className -> Object
/// ===================
let className = objOf("class")


/// push :: Event -> Store
/// ======================
let push = event => stack(append(inc(length(stack())), stack()))


/// pop :: Event -> Store
/// =====================
let pop = event => stack(init(stack()))


/// stackNode :: Node -> Node
/// =========================
/// Render the Stack data...
let homeNode = node => main([
    h1(className("title"), `${i18n("stack.heading.title")}: ${length(stack())}`),
    button(onClick(push), i18n("stack.button.add")),
    button(onClick(pop), i18n("stack.button.remove")),
    ul(className("list"), map(item =>
        li(route(`edit/${item}`, item)), stack()))])


export default homeNode
