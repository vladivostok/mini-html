# mini-html


## What

Helper functions to generate HTML objects with javascript (ex, `div`s, `button`s, `h1`s) with childrens and attributes


## Why

Because writing `document.createElement(...)` is no-fun. Alternative surely exists, but I have not found any for my taste in less than 5 minutes, so I decided to spend 1h to write it.


## How

in the form off:

		var html_object = (attribute_object, children1, children2, children3 ...)
		some_dom_element.appendChild(html_object)

ex:

	let some_html = div(
			{
				id :'main',
				class : 'some_class',
			},
			h1(
				{ style : { background : 'red'} },
				'header 1'
			),
			p(
				{ style : {'text-decoration' : 'underline' } },
				'some underline text'
			),
			button(
				{ onclick : (evt) => alert('look on press event') }, 
				'i am a button press me'
			)
	)

	document.body.appendChild(some_html)

this will generate this:

```html
	<div id="main" class="some_class">
		<h1 style="background-color: red;">
			header 1
		</h1>
		<p style="text-decoration: underline;">
			some underline text
		</p>
		<button>
			i am a button press me
		</button>
	</div>
```

### Notes:

- attributes starting with `on` and which value is a funtion will be considered as eventListners and attached to the html-object
- `style` attribute will be considered as CSS styles
- an attribute which value is `null`, will not be added to the html-object (helps with the presence/abscence of an attribute)
- all other attribute will be added to the html-object, regardless of their validity
- childs can be any other html-object or a string (it will be converted to a text-node)