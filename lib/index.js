module.exports = function(params, templates, contexts, links, buffers, done) {

	var fs = require('fs'),
		async = require('async'),
		dir = require('path').dirname,
		join = require('path').join,
		format = require('util').format;

	var strict = !! params.strict;

	if (strict) {

		if (!params.srcField || typeof params.srcField !== 'string') {

			return done('\'srcField\' parameter required but missing.');

		}

		if (!params.contentField || typeof params.contentField !== 'string') {

			return done('\'contentField\' parameter required but missing.');

		}

	} else {

		if (!params.srcField || typeof params.srcField !== 'string') {

			if (params.contentField && typeof params.contentField === 'string') {

				return done('\'srcField\' parameter required but missing.');

			}

		}

		if (!params.contentField || typeof params.contentField !== 'string') {

			if (params.srcField && typeof params.srcField === 'string') {

				return done('\'contentField\' parameter required but missing.');

			}

		}

	}

	async.each(Object.keys(contexts), function(c, done) {

		var context = contexts[c],
			src = context[params.srcField];

		if (src) {

			src = join(dir(c), src);

			fs.readFile(src, {
				encoding: 'utf8'
			}, function(err, data) {

				if (err) {
					return done(format('Unable to read file %s.', src));
				}

				context[params.contentField] = data;
				done();

			});

		} else if (strict) {

			done(format('\'srcField\' missing in %s.', c));

		} else {

			done();

		}

	}, done);

};