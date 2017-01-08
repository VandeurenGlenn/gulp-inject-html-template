# gulp-inject-html-template [![Build Status](https://travis-ci.org/vandeurenglenn/gulp-inject-html-template.svg?branch=master)](https://travis-ci.org/vandeurenglenn/gulp-inject-html-template)

> Inject html template into innerHTML


## Install

```
$ npm install --save-dev gulp-inject-html-template
```


## Usage

### File to inject template in
Add the **// @template** comment to your element, the comment will be replaced by the template's content
```js
class SomeElement extends HTMLElement {
	constructor() {
		super();
		// @template
	}
}
```

### Template to inject
```html
<template>
	<h1>hello world</h1>
</template>
```

### Usage in gulpfile
```js
const gulp = require('gulp');
const injectTemplate = require('gulp-inject-html-template');

// Inject html template into custom-element
// inject-template searches in the same directory for a matching template.html file
// in this case some-element.html
gulp.task('default', () => {
	gulp.src('src/some-element.js')
		.pipe(injectTemplate())
		.pipe(gulp.dest('dist'))
);
```

## TODO
- [ ] Add all inject-template options
- [ ] Support template id's (&lt;template id="some-element"&gt;)

## License

MIT © [Glenn Vandeuren](https://github.com/vandeurenglenn)
