import { node, route, stream } from 'mythic/core'
import faker from 'faker'

import { table, thead, tfoot, tbody, tr, th, td, div, button } from 'mythic/markup'

import {
	filter,
	keys,
	map, mapObjIndexed,
	objOf,
	prop, propEq,
	sortBy,
	times,
	values } from 'ramda'

let onClick = objOf("onclick")
let onChange = objOf("onchange")

let personGen = () => ({
	id: faker.random.uuid(),
	firstname: faker.name.firstName(),
	lastname: faker.name.lastName(),
	username: faker.internet.userName(),
	email: faker.internet.email(),
	phone: faker.phone.phoneNumber(),
	ip: faker.internet.ip(),
	job: faker.name.jobType(),
	country: faker.address.country(),
	added: faker.date.past().toISOString().slice(0, 10)})

let peopleGen = () => times(personGen, 1000)

let columns = values(mapObjIndexed((_, key) => key, personGen()))

let people = stream(peopleGen())

let sortableNodeGen = el =>
	tr(map(column =>
		el(onClick(e =>
			people(sortBy(prop(column), people()))), column), columns))

let personNode = person =>
	tr(values(mapObjIndexed(((key, value) =>
		td(onClick(_ =>
			people(filter(propEq(value, key), people()))), key)), person)))

let tableNode = node =>
	div([
		button(onClick(e =>
			people(peopleGen())), "Repopulate"),
		table([
			thead(sortableNodeGen(th)),
			tfoot(sortableNodeGen(td)),
			tbody(map(personNode, people()))])
		])

export default tableNode
