'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var injectTemplate = require('inject-template');

module.exports = function (opts) {
	opts = opts || {};
	if (opts.templatePath === false || opts.templatePath === null) {
		opts.templatePath === undefined;
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-inject-template', 'Streaming not supported'));
			return;
		}

		try {
			if (opts.templatePath !== undefined) {
				// takes the relative path of the custom-element,
				// replaces the extension to html & add's the templatePath in front
				opts.templatePath =
					`${opts.templatePath}/${file.relative.replace('.js', '.html')}`;
			}
			file.contents = new Buffer(injectTemplate.injectSync({
				path: file.path,
				content: file.contents.toString(),
				templatePath: opts.templatePath
			}));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-inject-template', err));
		}

		cb();
	});
};
