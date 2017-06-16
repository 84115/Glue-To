import { join, juxt, compose, toUpper, head, tail } from 'ramda'

let capitalise = compose(
    join(''),
    juxt([compose(toUpper, head), tail]))

export { capitalise }
