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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which removes consecutive values that resolve to the same value according to a provided function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterDedupeBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-dedupe-by@esm/index.mjs';
```

#### iterDedupeBy( iterator, \[limit,] fcn )

Returns an [iterator][mdn-iterator-protocol] which removes consecutive values that resolve to the same value according to a provided function.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

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
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

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
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randi from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-discrete-uniform@esm/index.mjs';
import iterDedupe from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-dedupe@esm/index.mjs';
import iterDedupeBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-dedupe-by@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter/dedupe`][@stdlib/iter/dedupe]</span><span class="delimiter">: </span><span class="description">create an iterator which removes consecutive duplicated values.</span>
-   <span class="package-name">[`@stdlib/iter/unique`][@stdlib/iter/unique]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-dedupe-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-dedupe-by

[test-image]: https://github.com/stdlib-js/iter-dedupe-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-dedupe-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-dedupe-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-dedupe-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-dedupe-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-dedupe-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-dedupe-by/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-dedupe-by/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-dedupe-by/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-dedupe-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-dedupe-by/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/dedupe]: https://github.com/stdlib-js/iter-dedupe/tree/esm

[@stdlib/iter/unique]: https://github.com/stdlib-js/iter-unique/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
