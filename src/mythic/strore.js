import { stream } from '/core'

let get = (key) => JSON.parse(localStorage.getItem(key) || '[]')

let put = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default home
