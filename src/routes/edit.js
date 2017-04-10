import { request } from 'mythic/core'
import { a, p, h1, div } from 'mythic/markup'

request({
    method: "GET",
    url: "/#!/api/v1/users/:id",
    deserialize: value => value
})
.then(result => console.log(result))

let edit = node => div(
    h1(node.attrs.id),
    p(a({href: "#!/home"}, "Home"))
)

export default edit
