import { route, stream, redraw } from 'mythic/core'
import api from 'mythic/api'
import { div, h2, p, hr, img } from 'mythic/markup'
import { map, identity, times } from 'ramda'
import faker from 'faker'

let genRandom = (start, stop) =>
	Math.floor((Math.random() * stop) + start)

let genProduct = () => {
	let fake = faker.commerce
	let adjective = fake.productAdjective()
	let color = fake.color()
	let material = fake.productMaterial()
	let name = fake.productName()

	return {
		name: `${adjective} ${color} ${material} ${name}`,
		color: color,
		material: material
	}
}

let products = times(genProduct, 10)

let productsNode = node => div({}, map(product => div([
	h2(product.name),
	img({
		"src": faker.image.avatar(),
		"width": "100px",
		"height": "100px",
		"style": "filter: sepia(100%) hue-rotate(" + genRandom(0, 360) + "deg)"
	}),
	p(product.color),
	p(product.material),
	hr(),
	]), products))

export default productsNode
