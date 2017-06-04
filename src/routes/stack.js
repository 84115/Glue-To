import { route, stream } from 'mythic/core'
import { a, p, h1, button, ul, li, main, hr, div } from 'mythic/markup'
import { compose, map, inc, length, range, init, append } from 'ramda'

let items = stream(range(1, 6))

let add_item = items => items(append(inc(length(items())), items()))

let remove_item = items => items(init(items()))

let home = node => main([
  h1({class: "title"}, a({href: "#!/home"}, `Stack: ${length(items())}`)),
  button({onclick: () => add_item(items)}, "Add List Item"),
  button({onclick: () => remove_item(items)}, "Remove List Item"),
  ul({ class: "list"}, map(item => li(a({href: `#!/edit/${item}`}, item)), items()))
])

export default home
