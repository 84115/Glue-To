import { request } from 'mythic/core'
import { a, p, h1, div } from 'mythic/markup'

request({
    method: "GET",
    url: "/#!/api/v1/users/:id",
    deserialize: (value) => value
})
.then(function(result) {
    console.log(result)
})

let edit = (vnode) => div(
    h1(vnode.attrs.id),
    p(a({href: "#!/home"}, "Home"))
)

export default edit
