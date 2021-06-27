<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterDedupeBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an [iterator][mdn-iterator-protocol] which removes consecutive values that resolve to the same value according to a provided function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-dedupe-by
```

</section>

<section class="usage">

## Usage

```javascript
var iterDedupeBy = require( '@stdlib/iter-dedupe-by' );
```

#### iterDedupeBy( iterator, \[limit,] fcn )

Returns an [iterator][mdn-iterator-protocol] which removes consecutive values that resolve to the same value according to a provided function.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function fcn( v ) {
    return v;
}

var arr = array2iterator( [ 1, 1, 2, 3, 3, 3, 4, 4 ] );
var it = iterDedupeBy( arr, fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The callback function is provided five arguments:

-   **curr**: current source iterated value.
-   **sprev**: previous source iterated value.
-   **dprev**: previous downstream iterated value.
-   **index**: source iteration index (zero-based).
-   **acc**: previous resolved value.

The returned [iterator][mdn-iterator-protocol] removes **consecutive** values which resolve to the same value and does **not** return globally "unique" values.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function fcn( v ) {
    return v;
}

var arr = array2iterator( [ 1, 1, 2, 1, 1, 2 ] );
var it = iterDedupeBy( arr, fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

var bool = it.next().done;
// returns true
```

To specify the number of allowed consecutive duplicated values, provide a `limit` argument.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function fcn( v ) {
    return v;
}

var arr = array2iterator( [ 1, 1, 2, 3, 3, 3, 3, 4, 4, 4 ] );
var it = iterDedupeBy( arr, 2, fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randi = require( '@stdlib/random-iter-discrete-uniform' );
var iterDedupe = require( '@stdlib/iter-dedupe' );
var iterDedupeBy = require( '@stdlib/iter-dedupe-by' );

function fcn( curr, sprev, dprev, i, acc ) {
    if ( curr < dprev ) {
        return 1;
    }
    if ( curr === dprev ) {
        return acc; // ensures that duplicate values are removed
    }
    // curr > dprev
    return -1;
}

// Create a seeded iterator for generating pseudorandom integers:
var rand = randi( 1, 10, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator which removes consecutive duplicated values:
var deduped = iterDedupe( rand );

// Create an iterator which forces consecutive values to follow an alternating less than, greater than pattern:
var it = iterDedupeBy( deduped, fcn );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-dedupe-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-dedupe-by

[test-image]: https://github.com/stdlib-js/iter-dedupe-by/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter-dedupe-by/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-dedupe-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-dedupe-by?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-dedupe-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-dedupe-by/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-dedupe-by/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
