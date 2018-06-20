import m from 'mithril'

let tag = (element) => (attr, child) => m(element, attr, child)

let a = tag('a')
let abbr = tag('abbr')
let acronym = tag('acronym')
let address = tag('address')
let applet = tag('applet')
let area = tag('area')
let article = tag('article')
let aside = tag('aside')
let audio = tag('audio')
let b = tag('b')
let base = tag('base')
let basefont = tag('basefont')
let bdi = tag('bdi')
let bdo = tag('bdo')
let big = tag('big')
let blockquote = tag('blockquote')
let body = tag('body')
let br = tag('br')
let button = tag('button')
let canvas = tag('canvas')
let caption = tag('caption')
let center = tag('center')
let cite = tag('cite')
let code = tag('code')
let col = tag('col')
let colgroup = tag('colgroup')
let datalist = tag('datalist')
let dd = tag('dd')
let del = tag('del')
let details = tag('details')
let dfn = tag('dfn')
let dialog = tag('dialog')
let dir = tag('dir')
let div = tag('div')
let dl = tag('dl')
let dt = tag('dt')
let em = tag('em')
let embed = tag('embed')
let fieldset = tag('fieldset')
let figcaption = tag('figcaption')
let figure = tag('figure')
let font = tag('font')
let footer = tag('footer')
let form = tag('form')
let frame = tag('frame')
let frameset = tag('frameset')
let h1 = tag('h1')
let h2 = tag('h2')
let h3 = tag('h3')
let h4 = tag('h4')
let h5 = tag('h5')
let h6 = tag('h6')
let head = tag('head')
let header = tag('header')
let hr = tag('hr')
let html = tag('html')
let i = tag('i')
let iframe = tag('iframe')
let img = tag('img')
let input = tag('input')
let ins = tag('ins')
let kbd = tag('kbd')
let keygen = tag('keygen')
let label = tag('label')
let legend = tag('legend')
let li = tag('li')
let link = tag('link')
let main = tag('main')
let map = tag('map')
let mark = tag('mark')
let menu = tag('menu')
let menuitem = tag('menuitem')
let meta = tag('meta')
let meter = tag('meter')
let nav = tag('nav')
let noframes = tag('noframes')
let noscript = tag('noscript')
let object = tag('object')
let ol = tag('ol')
let optgroup = tag('optgroup')
let option = tag('option')
let output = tag('output')
let p = tag('p')
let param = tag('param')
let picture = tag('picture')
let pre = tag('pre')
let progress = tag('progress')
let q = tag('q')
let rp = tag('rp')
let rt = tag('rt')
let ruby = tag('ruby')
let s = tag('s')
let samp = tag('samp')
let script = tag('script')
let section = tag('section')
let select = tag('select')
let small = tag('small')
let source = tag('source')
let span = tag('span')
let strike = tag('strike')
let strong = tag('strong')
let style = tag('style')
let sub = tag('sub')
let summary = tag('summary')
let sup = tag('sup')
let table = tag('table')
let tbody = tag('tbody')
let td = tag('td')
let textarea = tag('textarea')
let tfoot = tag('tfoot')
let th = tag('th')
let thead = tag('thead')
let time = tag('time')
let title = tag('title')
let tr = tag('tr')
let track = tag('track')
let tt = tag('tt')
let u = tag('u')
let ul = tag('ul')
let variable = tag('var')
let video = tag('video')
let wbr = tag('wbr')

let svg = tag('svg')
let circle = tag('circle')

export {
	tag,

	a, abbr, acronym, address, applet, area, article, aside, audio,
	b, base, basefont, bdi, bdo, big, blockquote, body, br, button,
	canvas, caption, center, cite, code, col, colgroup,
	datalist, dd, del, details, dfn, dialog, dir, div, dl, dt,
	em, embed, fieldset, figcaption, figure, font, footer, form, frame, frameset,
	h1, h2, h3, h4, h5, h6, head, header, hr, html,
	i, iframe, img, input, ins,
	kbd, keygen,
	label, legend, li, link,
	main, map, mark, menu, menuitem, meta, meter,
	nav, noframes, noscript,
	object, ol, optgroup, option, output,
	p, param, picture, pre, progress,
	q,
	rp, rt, ruby,
	s, samp, script, section, select, small, source, span, strike, strong, style, sub, summary, sup,
	table, tbody, td, textarea, tfoot, th, thead, time, title, tr, track, tt,
	u, ul,
	variable, video,
	wbr,

	svg, circle
}
