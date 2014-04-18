module.exports = function(params, templates, contexts, links, buffers, done) {

	var fs = require('fs'),
		async = require('async'),
		dir = require('path').dirname,
		join = require('path').join;

	if (!params.srcField || typeof params.srcField !== 'string') {

		return done('\'srcField\' parameter required but missing.');

	}

	if (!params.contentField || typeof params.contentField !== 'string') {

		return done('\'contentField\' parameter required but missing.');

	}

	async.each(Object.keys(contexts), function(c, done) {

		var context = contexts[c],
			src = context[params.srcField];

		if (src) {

			src = join(dir(c), src);

			fs.readFile(src, function(err, data) {

				if (err) {
					//skip this file.
					// TODO - log a warning
				} else {

					context[params.contentField] = data;

				}

				done();

			});

		} else {

			// TODO - maybe need a warning?
			done();

		}

	}, done);

};