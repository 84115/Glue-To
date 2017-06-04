import { h1 } from '../../../mythic/markup'

let page_title = args => h1("Hello World" + (args ? " @ " + args : ""))

export default page_title
