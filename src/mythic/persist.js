import { stream, redraw } from 'mythic/core'

let persist = (store, cache=[]) => {
    let diff = stream(store())

    if (cache) diff(cache)

    return (data) => {
        if (data && data != diff()) {
            diff(data)
            store(data)
            redraw()

            return data
        }

        return diff()
    }
};

export default persist
