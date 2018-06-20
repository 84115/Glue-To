import { route, stream, redraw } from 'mythic/core'
import { tag, div, svg, circle } from 'mythic/markup'
import { map, identity, times } from 'ramda'
import faker from 'faker'

let push = (list, value) => (list().length >= 5 ?
	list().pop() :
	list().unshift(value))

let genRandom = (start, stop) => Math.floor((Math.random() * stop) + start);
let genWidth = () => window.innerWidth / 2
let genHeight = () => window.innerHeight / 2
let genLimit = () => (genWidth() + genHeight()) / 2
let genRadius = () => genRandom(0, genLimit())
let genHex = () => "#" + ((1 << 24) * Math.random() | 0).toString(16)
let genStroke = () => genRandom(1, 10)

let genCircle = () => circle({
	"cx": genWidth(),
	"cy": genHeight(),
	"r": genRadius(),
	"stroke": genHex(),
	"stroke-width": genStroke(),
	"fill": genHex() })

let streamCircle = stream([])

let drawCircle = () => redraw(push(streamCircle, genCircle()))

let circleNode = node => svg({
	"height": "100%",
	"width": "100%",
	"onclick": drawCircle
	}, map(identity, streamCircle()))


let lex = (callback, ...data) => callback(...data)

let genProduct = (adjective=productAdjective(), color=color(), material=productMaterial(), name=productName()) => ({
	name: `${adjective} ${color} ${material} ${name}`,
	color: color,
	material: material })

// let genProduct = () => {
// 	let fake = faker.commerce
// 	let adjective = fake.productAdjective()
// 	let color = fake.color()
// 	let material = fake.productMaterial()
// 	let name = fake.productName()

// 	return {
// 		name: `${adjective} ${color} ${material} ${name}`,
// 		color: color,
// 		material: material
// 	}
// }


console.log(times(x=> genProduct(), 20))

export default circleNode
