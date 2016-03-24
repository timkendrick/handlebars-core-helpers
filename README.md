# handlebars-core-helpers

> Useful helpers for Handlebars templates

## Included helpers

- Logic helpers:
	- `{{ eq value1 value2 [...valueN] }}` – Return `true` if all arguments are strictly equal to each other, otherwise return `false`
	- `{{ not-eq value1 value2 [...valueN] }}` – Return `true` if all arguments are not strictly equal to each other, otherwise return `false`
	- `{{ not value }}` – Return `true` if `value` is empty, otherwise return `false`
	- `{{ and value1 value2 [...valueN] }}` – Return `true` if all arguments are not empty, otherwise return `false`
	- `{{ or value1 value2 [...valueN] }}` – Return `true` if at least one argument is not empty, otherwise return `false`
	- `{{ gt value1 value2 }}` – Return `true` if `value1 > value2`, otherwise return `false`
	- `{{ gte value1 value2 }}` – Return `true` if `value1 >= value2`, otherwise return `false`
	- `{{ lt value1 value2 }}` – Return `true` if `value1 < value2`, otherwise return `false`
	- `{{ lte value1 value2 }}` – Return `true` if `value1 <= value2`, otherwise return `false`

- Datatype helpers:
	- `{{ is-undefined value }}` – Return `true` if `value` is `undefined`, otherwise return `false`
	- `{{ is-null value }}` – Return `true` if `value` is `null`, otherwise return `false`
	- `{{ is-boolean value }}` – Return `true` if `value` is a boolean, otherwise return `false`
	- `{{ is-number value }}` – Return `true` if `value` is a number, otherwise return `false`
	- `{{ is-string value }}` – Return `true` if `value` is a string, otherwise return `false`
	- `{{ is-object value }}` – Return `true` if `value` is a non-null object, otherwise return `false`
	- `{{ is-symbol value }}` – Return `true` if `value` is an ES6 Symbol, otherwise return `false`
	- `{{ is-function value }}` – Return `true` if `value` is a function, otherwise return `false`
	- `{{ is-array value }}` – Return `true` if `value` is an array, otherwise return `false`
	- `{{ is-date value }}` – Return `true` if `value` is a Date object, otherwise return `false`
	- `{{ is-regexp value }}` – Return `true` if `value` is a RegExp object, otherwise return `false`
	- `{{ is-numeric value }}` – Return `true` if `value` can be coerced to a number, otherwise return `false`

- String helpers:
	- `{{ concat value1 value2 [...valueN] separator=[separator=''] }}` – Return a concatenated string consisting of all arguments joined together by `separator`
	- `{{ replace source pattern replacement }}` – Replace first occurence of `pattern` in `source` with `replacement`
	- `{{ starts-with haystack needle }}` – Return `true` if `haystack` starts with `needle`, otherwise return `false`
	- `{{ escape-newlines value }}` – Replace `\n` and `\r` characters in `value` with `&#10` and `&#13` HTML entities (useful to preserve formatting in `white-space: pre` elements)
	- `{{ nl2br value }}` – Replace newline characters in `value` with `<br/>` HTML tags
	- `{{ wrap value left right }}` – Return an HTML-safe string consisting of an HTML-escaped `value` wrapped between unescaped `left` and `right` HTML segments
	- `{{ safe value }}` – Return an HTML-safe string representation of `value`

- Date helpers:
	- `{{ timestamp date }}` – Return the UNIX timestamp corresponding to `date`, e.g. `1262304000`
	-  `{{ date date }}` – **[deprecated]** Return a short date label corresponding to `date`, e.g. `"Mon 1 Jan 1970"` (uses UTC time).

- Serialization helpers:
	- `{{ json value {[indent=undefined]} }}` – Return a JSON-encoded string representation of `value`
	- `{{ parse-json value }}` – Return the object that results from parsing the `value` JSON string
	- `{{ urlencode value }}` – Return a URL-encoded representation of `value`
	- `{{ urldecode value }}` – Return a version of `value` with URL entities decoded
