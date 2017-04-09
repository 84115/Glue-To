import { redraw, route, stream } from 'mythic/core'
import { a, p, h1, button, ul, li, main, hr, div } from 'mythic/markup'
import { reduce, map, inc, length, union, range, init } from 'ramda'

let items = stream(0)

let fibonacci = (n) => reduce((a,b,c) => a.concat( (b < 2) ? b : a[b-1] + a[b-2]), [0])(range(1, n + 1))

console.log(items(fibonacci(items())))

// let items = stream(range(1, inc(5)))

let add_item = (items) => items(union(items(), [inc(length(items()))]))

let remove_item = (items) => items(init(items()))

let home = (vnode) => main([
    h1({class: "title"}, a({href: "#!/home"}, `Stack: ${length(items())}`)),
    button({onclick: () => add_item(items)}, "Add List Item"),
    button({onclick: () => remove_item(items)}, "Remove List Item"),
    ul({ class: "list"}, map(item => li(a({href: `/edit/${item}`, oncreate: route.link}, item)), items()))
])

setInterval(() => {
	console.log(add_item(items))
	redraw()
	window.scrollBy(0, 18)
}, 1)

// setInterval(() => {
// 	console.log(add_item(sequence))
// 	redraw()
// 	window.scrollBy(0, 18)
// }, 100)

export default home
