'use strict';

var Handlebars = require('handlebars');

module.exports['concat'] = function(item1, options) {
	var options = arguments[arguments.length - 1];
	var items = Array.prototype.slice.call(arguments, 0, -1);
	var separator = (options.hash && options.hash.separator) || '';
	var escapedItems = items.map(function(item) {
		return Handlebars.Utils.escapeExpression(item);
	});
	return new Handlebars.SafeString(escapedItems.join(separator));
};
module.exports['replace'] = function(value, pattern, replacement, options) {
	var sourceIsSafeString = (typeof value.toHTML === 'function');
	var replacementIsSafeString = (typeof replacement.toHTML === 'function');
	if (!sourceIsSafeString && !replacementIsSafeString) {
		return value.replace(pattern, replacement);
	} else if (sourceIsSafeString && replacementIsSafeString) {
		value = value.toString();
		replacement = replacement.toString();
		return new Handlebars.SafeString(value.replace(pattern, replacement));
	} else {
		var segments = value.split(pattern);
		var lhs = segments[0];
		var rhs = value.substr(lhs.length + pattern.length);
		if (sourceIsSafeString) {
			return new Handlebars.SafeString(lhs + Handlebars.Utils.escapeExpression(replacement) + rhs);
		} else {
			return new Handlebars.SafeString(Handlebars.Utils.escapeExpression(lhs) + replacement + Handlebars.Utils.escapeExpression(rhs));
		}
	}
};
module.exports['starts-with'] = function(haystack, needle, options) {
	return haystack.indexOf(needle) === 0;
};
module.exports['escape-newlines'] = function(value, options) {
	var safeValue = Handlebars.Utils.escapeExpression(value);
	var escapedValue = safeValue.replace(/\n/g, '&#10;').replace(/\r/g, '&#13;');
	return new Handlebars.SafeString(escapedValue);
};
module.exports['nl2br'] = function(value, options) {
	var safeValue = Handlebars.Utils.escapeExpression(value);
	var escapedValue = safeValue.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br/>$2');
	return new Handlebars.SafeString(escapedValue);
};
module.exports['wrap'] = function(value, left, right, options) {
	return new Handlebars.SafeString(left + Handlebars.Utils.escapeExpression(value) + right);
};
module.exports['safe'] = function(value, options) {
	return new Handlebars.SafeString(value);
};
