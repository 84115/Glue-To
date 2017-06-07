import { stream, redraw } from 'mythic/core'

let persist = (store) => {
    let diff = stream(store())

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
