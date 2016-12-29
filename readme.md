# gulp-inject-template [![Build Status](https://travis-ci.org/vandeurenglenn/gulp-inject-template.svg?branch=master)](https://travis-ci.org/vandeurenglenn/gulp-inject-template)

> Inject template into innerHTML


## Install

```
$ npm install --save-dev gulp-inject-template
```


## Usage

```js
const gulp = require('gulp');
const injectTemplate = require('gulp-inject-template');

gulp.task('default', () => {
	gulp.src('src/file.js')
		.pipe(injectTemplate())
		.pipe(gulp.dest('dist'))
);
```


## API

### injectTemplate([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [Glenn Vandeuren](https://github.com/vandeurenglenn)
