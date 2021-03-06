const make_html = (type, props, ...childrens ) =>  {
	// console.log('making', type, 'with', props, ...childrens)
	let el = document.createElement(type)
	props = props || {}

	for (let key in props) {
	    if (!props.hasOwnProperty(key)) continue;

   		if (typeof props[key] == 'function' && key.startsWith('on')) {
        	const eventType = key.slice(2).toLowerCase();
        	el.addEventListener(eventType, props[key])   
        } 	
        else if (key == 'style') {
        	let styles = props[key]
        	for (let style in styles) {
        		if (styles.hasOwnProperty(style)) {
        			el.style[style] = styles[style]
        		}
        	}
        }
        else {
        	if (props[key] != null) {
				el.setAttribute(key, props[key]);    	
        	}
        }
	}

	// FIXME: for some reasons, it's an array ?????
	childrens = childrens[0] || []

	for (let i = 0; i < childrens.length; i++) {
		// console.log('>', childrens[i], typeof childrens[i])
		if (childrens[i] === null) { continue; }
		try {
			if (typeof childrens[i] == 'string') {
				el.appendChild(document.createTextNode(childrens[i]))
			}
			else {
				el.appendChild(childrens[i])
			}
		}
		catch (error) { console.log('error', error, childrens[i], childrens)}
	}

	return el
}



const div = (props, ...childrens) => { return make_html('div', props, childrens) }

const i = (props, ...childrens) => { return make_html('i', props, childrens) }

const p = (props, ...childrens) => { return make_html('p', props, childrens) }

const h1 = (props, ...childrens) => { return make_html('h1', props, childrens) }
const h2 = (props, ...childrens) => { return make_html('h2', props, childrens) }
const h3 = (props, ...childrens) => { return make_html('h3', props, childrens) }
const h4 = (props, ...childrens) => { return make_html('h4', props, childrens) }
const h5 = (props, ...childrens) => { return make_html('h5', props, childrens) }
const h6 = (props, ...childrens) => { return make_html('h6', props, childrens) }

const ul = (props, ...childrens) => { return make_html('ul', props, childrens) }
const ol = (props, ...childrens) => { return make_html('ol', props, childrens) }
const li = (props, ...childrens) => { return make_html('li', props, childrens) }

const img = (props, ...childrens) => { return make_html('img', props, childrens) }
const a = (props, ...childrens) => { return make_html('a', props, childrens) }

const button = (props, ...childrens) => { return make_html('button', props, childrens) }
const input = (props, ...childrens) => { return make_html('input', props, childrens) }
const form = (props, ...childrens) => { return make_html('form', props, childrens) }
const textarea = (props, ...childrens) => { return make_html('textarea', props, childrens) }


