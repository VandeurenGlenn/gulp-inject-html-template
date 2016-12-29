import path from 'path';
import test from 'ava';
import gulpUtil from 'gulp-util';
import fn from './';

test.cb(t => {
	const stream = fn();

	stream.once('data', file => {
		t.is(file.contents.toString(), '<p>Something</p>');
		t.end();
	});

	stream.write(new gulpUtil.File({
		base: __dirname,
		path: path.join(__dirname, 'test-el.js'),
		contents: new Buffer('// @template')
	}));

	stream.end();
});
