import { route, stream, redraw } from 'mythic/core'
import { div, svg, circle } from 'mythic/markup'
import { map, identity, times } from 'ramda'
import faker from 'faker'

let push = (list, value) => (list().length >= 5 ?
	list().pop() :
	list().unshift(value))

let genRandom = (start, stop) =>
	Math.floor((Math.random() * stop) + start)

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

export default circleNode
