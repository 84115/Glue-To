import { stream } from 'mythic/core'
import { bind } from 'ramda'

let storageGet = bind(localStorage.getItem, localStorage)
let storageSet = bind(localStorage.setItem, localStorage)
let jsonParse = bind(JSON.parse, JSON)
let jsonStringify = bind(JSON.stringify, JSON)

let read = key => jsonParse(storageGet(key) || '[]')

let write = (key, data) => {
    localStorage.setItem(key, jsonStringify(data))

    return read(key)
}

let storage = key => data => data != null ? write(key, data) : read(key)

export default storage
