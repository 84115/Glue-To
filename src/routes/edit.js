import { a, p, h1, div } from 'mythic/markup'
import page_title from 'element/core/typography/page_title'

let edit = node => div(
	page_title("James"),
    h1(node.attrs.id),
    p(a({href: "#!/home"}, "Home"))
)

export default edit
