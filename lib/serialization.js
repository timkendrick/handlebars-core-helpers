'use strict';

var Handlebars = require('handlebars');

module.exports['json'] = function(value, options) {
	var indent = (options.hash && options.hash.indent) || undefined;
	return JSON.stringify(value, function(key, value) {
		if (value instanceof Handlebars.SafeString) {
			return value.toString();
		}
		return value;
	}, indent);
};
module.exports['parse-json'] = function(value, options) {
	return JSON.parse(value);
};
module.exports['urlencode'] = function(value, options) {
	return encodeURIComponent(value);
};
module.exports['urldecode'] = function(value, options) {
	return encodeURIComponent(value);
};
