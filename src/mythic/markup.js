import m from 'mithril'

let tag = (element) => (attr, child) => m(element, attr, child)

let a = tag('a')
let p = tag('p')
let h1 = tag('h1')
let button = tag('button')
let ul = tag('ul')
let li = tag('li')
let main = tag('main')
let hr = tag('hr')
let div = tag('div')

export { tag, a, p, h1, button, ul, li, main, hr, div }
